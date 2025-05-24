import React from 'react';
import Banner from '../components/Banner';
import AboutUs from '../components/AboutUs';
import FeedBack from '../components/FeedBack';
import AllRecipe from './AllRecipe';
import DisplayRecipe from '../components/DisplayRecipe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <DisplayRecipe></DisplayRecipe>
            <FeedBack></FeedBack>
        </div>
    );
};

export default Home;