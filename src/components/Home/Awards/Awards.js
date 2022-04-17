import React from 'react';
import award from '../../../images/Award/award.jpg';
import award1 from '../../../images/Award/award1.jpg';
import award2 from '../../../images/Award/award2.jpg';
import Award from '../Award/Award';

const Awards = () => {
    const awards = [
        {id: 1, name:'PhotoFest Award', img: award},
        {id: 2, name:'Presidential Award', img: award1},
        {id: 3, name:'National Award',img: award2}
    ]
    return (
        <div className='container'>
            <h2 className='text-primary text-center mt-5'>My Awards!!!</h2>
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