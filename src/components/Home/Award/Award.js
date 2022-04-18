import React from 'react';

const Award = ({award}) => {
    const {name, img, p} = award;
    return (
       <div className='g-2 col-sm-12 col-md-6 col-lg-4 mb-5'>
            <div className="card ms-auto me-auto" style={{width: "18rem"}}>
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h4 className="card-title">{name}</h4>
    <p className="card-text">{p}</p>
  </div>
</div>
       </div>
    );
};

export default Award;