import React from 'react';
import Awards from '../Awards/Awards';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Awards></Awards>
        </div>
    );
};

export default Home;