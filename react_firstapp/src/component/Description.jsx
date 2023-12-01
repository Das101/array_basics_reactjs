import React from 'react'
import Button from './Button';
import './Description.css';

const Description = ({name,details,review,price,list}) =>{
return (
    <div className='product-card'>
        <h3>Name:{name}</h3>
        <p>Details:{details}</p>
        <h4>Review:{review}</h4>
        <p>Price:{price}</p>
        <ol>
            {list.map((item) =>(
                <li>{item}</li>

            ))}
        </ol>
        <button>Add to cart</button>
    </div>
);

}

export default Description;