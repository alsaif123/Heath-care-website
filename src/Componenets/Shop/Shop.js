import React from 'react';
import './shop.css'
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/4.jpg'
import img5 from './img/5.jpg'
import img6 from './img/6.jpg'

const Shop = () => {
    return (
        <div>
            <h1 className='text-danger'>
                You can buy medicine here</h1>

                <div className='shop'>
                    <p> <img src= {img1} /> <br />
                    <p>Medicine 1</p>  </p>
                    <p> <img src= {img2} /><br />
                    <p>Medicine 2</p>  </p>
                    <p> <img src= {img3} /><br />
                    <p>Medicine 3</p>  </p>
                    <p> <img src= {img4} /><br />
                    <p>Medicine 4</p>  </p>
                    <p> <img src= {img5} /><br />
                    <p>Medicine 5</p>  </p>
                    <p> <img src= {img6} /><br />
                    <p>Medicine 6</p>  </p>
                   
                    
                </div>
        </div>
    );
};

export default Shop;