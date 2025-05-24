import React, { useContext } from 'react';
import Banner from '../components/Banner';
import AboutUs from '../components/AboutUs';
import FeedBack from '../components/FeedBack';
import Lottie from "lottie-react";
import theme from '../../public/theme.json'
import DisplayRecipe from '../components/DisplayRecipe';
import { ContextAPI } from '../components/ContextApi';

const Home = () => {
    const {handletheme} = useContext(ContextAPI);
    return (
        <div className='relative'>
            <Banner></Banner>
            <button onClick={handletheme} className="w-[100px] fixed top-[20%] right-0 z-5 cursor-pointer">
                <Lottie  onClick={handletheme} animationData={theme} loop={true} />
            </button>
            <AboutUs></AboutUs>
            <DisplayRecipe></DisplayRecipe>
            <FeedBack></FeedBack>
        </div>
    );
};

export default Home;