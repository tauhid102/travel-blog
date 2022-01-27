import React from 'react';
import Footer from '../../Share/Footer/Footer';
import Header from '../../Share/Header/Header';
import Blogs from '../Blogs/Blogs';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;