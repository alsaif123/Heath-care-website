import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notfound">
           

            <Link to="/home"><Button className='btn btn-primaty'> Home</Button></Link>
        </div>
    );
};

export default NotFound;