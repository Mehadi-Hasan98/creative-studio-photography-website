import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const navigate = useNavigate();
    const navigateToCheckout = id => {
        navigate('/checkout')
    }
    const {id, name, price, img, description} = service;
    return (
        <div className='service mb-5'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
            <button className='btn btn-primary' onClick={() => navigateToCheckout(id)}>Please Checkout</button>
        </div>
    );
};

export default Service;