import { useEffect, useState } from "react";
import Information from "../Information/Information";
import './Services.css'


const Services = () => {
        const [informations, setInformations] = useState([]);

    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setInformations(data))
    },[])

    return (
        <div>
            <h2>This is our Service Sector</h2>
            <div className="information_details">
                {
             informations.map(information =><Information
             key ={information.id}
             information = {information}
             ></Information>)
            }
            </div>
            
        </div>
    );
};

export default Services;