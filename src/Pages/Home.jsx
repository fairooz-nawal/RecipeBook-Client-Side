import React from 'react';
import Banner from '../components/Banner';
import AboutUs from '../components/AboutUs';
import FeedBack from '../components/FeedBack';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <FeedBack></FeedBack>
        </div>
    );
};

export default Home;