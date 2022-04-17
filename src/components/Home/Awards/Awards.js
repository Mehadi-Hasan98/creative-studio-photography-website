import React from 'react';
import award from '../../../images/award.jpg';
import award1 from '../../../images/award1.jpg';
import award2 from '../../../images/award2.jpg';

const Awards = () => {
    const awards = [
        {id: 1, img: award},
        {id: 2, img: award1},
        {id: 3, img: award2}
    ]
    return (
        <div>
            <h2 className='text-primary text-center'>My Awards!!!</h2>
        </div>
    );
};

export default Awards;