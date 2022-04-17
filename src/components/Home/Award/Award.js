import React from 'react';

const Award = ({award}) => {
    const {name, img} = award;
    return (
       <div className='g-2 col-sm-12 col-md-6 col-lg-4'>
            <div class="card ms-auto me-auto" style={{width: "18rem"}}>
  <img src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
       </div>
    );
};

export default Award;