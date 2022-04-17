import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name, price, img, description} = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p>Description: {description}</p>
            <button>BOOK: {name}</button>
        </div>
    );
};

export default Service;