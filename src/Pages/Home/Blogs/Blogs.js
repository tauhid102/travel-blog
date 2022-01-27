import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import '../../Style/style.css';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    // const size=10;
    useEffect(() => {
        fetch(`http://localhost:5000/blogs?page=${page}`)
            .then(res => res.json())
            .then(data => {
                setBlogs(data.blogs);
                const count = data.count;
                const pageNumber = Math.ceil(count / 10);
                setPageCount(pageNumber);
            })
    }, [page]);
    const filteringBlogs = blogs?.filter(
        (blog) => blog.status === 'accepted'
    );
    return (
        <div className='container mt-5'>
            <h1 className='text-center'>All Blogs Are Here</h1>
            <h6 className='text-danger m-auto text-center border-2 mb-3 border-bottom border-danger w-25'>Get Your Favourite b from here</h6>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                    filteringBlogs.map(blog => <div class="col">
                        <div class="card">
                            <img height={200} src={blog.img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h4 class="card-title">{blog.name}</h4>
                                <h6 className='card-title'>{blog.date}</h6>
                                <h6 className='card-title'>Rating: <Rating
                                    initialRating={blog.rating}
                                    readonly
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star"></Rating>({blog.rating})</h6>
                                <Link to={`/details/${blog._id}`}><button className='btn btn-dark'>Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className="pagination">
                {[...Array(pageCount).keys()].map(number => <button
                    className={number === page ? 'selected' : ''}
                    key={number}
                    onClick={() => setPage(number)}
                >{number}</button>)}
            </div>
        </div>
    );
};

export default Blogs;