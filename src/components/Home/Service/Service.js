import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const navigate = useNavigate();
    const navigateToCheckout = id => {
        navigate('/checkout')
    }
    const {name, price, img, description} = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p>Description: {description}</p>
            <button className='btn btn-primary' onClick={() => navigateToCheckout()}>Please Checkout</button>
        </div>
    );
};

export default Service;