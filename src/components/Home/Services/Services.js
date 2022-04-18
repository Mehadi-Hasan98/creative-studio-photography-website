import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';
import {BsFillCameraFill} from 'react-icons/bs';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( ()=> {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <div id='services' className='container'>
           <div className='row'>
           <h1 style={{color: 'indianred'}} className='text-center mt-5'>My Services <BsFillCameraFill/></h1>
           <div className='services-container'>
           {
                services.map(service => <Service
                key={service.id}
                service={service}
                ></Service>)
            }
           </div>
           </div>
        </div>
    );
};

export default Services;