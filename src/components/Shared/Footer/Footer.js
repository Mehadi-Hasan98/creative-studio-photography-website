import React from 'react';
import {RiInstagramFill} from 'react-icons/ri';
import {FaFacebook} from 'react-icons/fa';
import {BsYoutube} from 'react-icons/bs';
import {FaWhatsapp} from 'react-icons/fa';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5 border border-primary bg-primary pt-4'>
            <p><small>Copyright © by </small> <span className='fw-bold'>Creative Studio Photography ({year})</span></p>
            <RiInstagramFill/>  <FaFacebook/>  <BsYoutube/>  <FaWhatsapp/>
        </footer>
    );
};

export default Footer;