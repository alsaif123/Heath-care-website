import React from 'react';
import { Card } from 'react-bootstrap';

import './Information.css'

const Information = (props) => {
    const { name , img, id , description} = props.information;
    return (
        <>
           <Card>
    <Card.Img variant="top" style={{
        width : "auto "
    }} src={img} />
    <Card.Body>
      <Card.Title><p>{id} </p>{name}</Card.Title>
      <Card.Text>
        {description}
        
      </Card.Text>
    </Card.Body>
     {/* <Link to {}><small className=""><button className="btn btn-primary">See Details</button></small></Link> 
       */}
   
  </Card>
        </>
    );
};

export default Information;