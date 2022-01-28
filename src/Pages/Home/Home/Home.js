import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import Footer from '../../Share/Footer/Footer';
import Header from '../../Share/Header/Header';
import Blogs from '../Blogs/Blogs';
import Slider from '../Slider/Slider';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://pacific-plateau-84630.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data.blogs))
    }, []);
    console.log(blogs);
    const filterRating = blogs?.filter(
        (blog) => blog.rating === 5
    );
    const b = filterRating.slice(0, 12);
    return (
        <>
            <Header></Header>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-10 col-12'>
                        <Slider></Slider>
                        <Blogs></Blogs>

                    </div>
                    <div className='col-lg-2 col-6'>
                        <h6 className='mt-5'>Top Rating Blog</h6>
                        {
                            b.map(blog => <div class="">
                                <div class="card">
                                    <img height={80} src={blog.img} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <p className='card-title'><Rating
                                            initialRating={blog.rating}
                                            readonly
                                            emptySymbol="far fa-star"
                                            fullSymbol="fas fa-star"></Rating>({blog.rating})</p>
                                        <Link to={`/details/${blog._id}`}><button className='btn btn-dark'>Details</button></Link>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Home;