import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'

const Home = () => {
    return (
        <>
           <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<h3 className="text-primary">Our Survices</h3>
<div className='services'>
   <Link to='/services'><h4>Drug Testing</h4></Link> 
   <Link to='/services'><h4>Blood Testing</h4></Link> 
   <Link to='/services'><h4>Supplies</h4></Link> 
   <Link to='/services'><h4>Medication Aids</h4></Link> 
   <Link to='/services'><h4>Niddles and Syringes</h4></Link> 
   <Link to='/services'><h4>Niddles and Syringes</h4></Link> 
</div>


        </>
    );
};

export default Home;