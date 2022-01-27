import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/Slider/banner1.jpg';
import banner2 from '../../../images/Slider/banner2.jpg';
import banner3 from '../../../images/Slider/banner3.jpg';
const Slider = () => {
    return (
        <div className='container mt-5 slider'>
        <div class="row row-cols-1 row-cols-md-2">
                <div class="col d-flex justify-content-center align-items-center">
                    <h1>Read Blog For Your Favourite Place</h1>
                </div>
                <div class="col">
                    <Carousel>
                        <Carousel.Item className="banner" >
                            <img
                                className="d-block w-100 rounded-pill"
                                src={banner1}
                                alt="First slide"
                            />
                            <Carousel.Caption className="banner-title">
                                
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="banner">
                            <img
                                className="d-block w-100 rounded-pill h-100"
                                src={banner2}
                                alt="Second slide"
                            />

                            <Carousel.Caption className="banner-title">
                                
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="banner">
                            <img
                                className="d-block w-100 rounded-pill h-100"
                                src={banner3}
                                alt="Third slide"
                            />

                            <Carousel.Caption className="banner-title">
                                
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel></div>
            </div>
            
        </div>
    );
};

export default Slider;