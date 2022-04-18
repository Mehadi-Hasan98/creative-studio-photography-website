import React from 'react';
import award from '../../../images/Award/award.jpg';
import award1 from '../../../images/Award/award1.jpg';
import award2 from '../../../images/Award/award2.jpg';
import Award from '../Award/Award';
import {FaAward} from 'react-icons/fa';

const Awards = () => {
    const awards = [
        {id: 1, name:'PhotoFest Award', img: award, p: 'This is the Photofest Award i have got in 2018.That was my First Photo competition and i ranked 3 among 100 participants'},
        {id: 2, name:'Presidential Award', img: award1, p: 'That was my life turning moment when i got this presidential award.I was blessed enough to achieve this in my career.'},
        {id: 3, name:'National Award',img: award2, p: 'I think this award fullfilled my dream. I was the national Champion in photography contest. So I am Happy.'}
    ]
    return (
        <div className='container'>
            <h2 style={{color: 'indianred'}} className='text-center mt-5 mb-5'>My Awards! <FaAward/> </h2>
            <div className="row">
                {
                    awards.map(award => <Award
                    key= {award.id}
                    award= {award}
                    >
                    </Award>)
                }
            </div>
        </div>
    );
};

export default Awards;