import React from 'react'; 
import AboutHome from '../AboutHome/AboutHome';
import BannerHome from '../Banner/BannerHome';
import ServicesHome from '../ServicesHome/ServicesHome';

const Home = () => {
    return (
        <div>
            <BannerHome></BannerHome>
            <AboutHome></AboutHome>
            <ServicesHome></ServicesHome>
        </div>
    );
};

export default Home;