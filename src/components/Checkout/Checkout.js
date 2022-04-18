import React from 'react';
import { useParams } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
    const {serviceId} = useParams();

    return (
        <div className='register-form'>
            <h2 className='text-center mb-3'>Checkout Form</h2>
            <form>
                <h3>{serviceId}</h3>
                <input type="text" name="name" id="" placeholder='YourName'/>
                <input type="email" name="email" id="" placeholder='Your Email Address' required/>
                <input type="password" name="password" id="" placeholder='Password' required/>
                <input type="address" name="address" id="" placeholder='address' required/>
                <input type="phone number" name="phone number" id="" placeholder='Phone number' required/>
                <input
                 className='btn btn-primary w-50 mx-auto mt-2' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Checkout;