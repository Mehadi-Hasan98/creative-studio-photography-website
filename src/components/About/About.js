import React from 'react';
import photo from '../../images/photo.png';

const About = () => {
    return (
        <div className='text-center mt-5'>
            <h2 className='text-center text-primary mb-5'>This is About Me!</h2>
            <img src={photo} alt="" />
            <h3 className='mt-4 mb-4'>Name: Mehadi Hasan (Shuvo)</h3>
            <h6 className='ms-5 me-5'>MY GOAL : I want to become a fullstack developer. This is my only goal and i have to achieve it. Next 3-4 months i will be busy to develop my programming skills.I have to be good at frontend and backend to improving my skills. After that i will apply for job in the software company.</h6>
        </div>
    );
};

export default About;