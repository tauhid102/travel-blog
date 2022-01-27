import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyBlog = () => {
    const [blogs, setBlogs] = useState([]);
    const [accepted, setAccepted] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data.blogs))
    }, [accepted]);
    console.log(blogs);
    const handleCancenBlog = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/blogs/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        alert('Cancel Successfully');
                        const restBooking = blogs.filter(order => order._id !== id);
                        setBlogs(restBooking);
                    }
                })
        }
    }
    const handleAcceptBlog = (id) => {
        const ids = { id };
        const proceed = window.confirm('Are you sure, you want to accepted?');
        if (proceed) {
            const url = `http://localhost:5000/blogs/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(ids)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.modifiedCount > 0) {
                        alert('Accepted Successfully');
                        setAccepted(false);
                    }
                })
        }
    }
    return (
        <div className='container-fluid'>
        <h3 className='mt-5 mb-3'>All<span className='text-danger'> Blogs</span></h3>
        <Row xs={1} md={2} lg={4} className="g-4">
            {blogs.map(blog => <>
                <Col>
                    <Card border="secondary" style={{ width: '16rem' }}>
                        <Card.Header><span>Blog name: </span> {blog.name}</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <span className='text-bold'>Date:</span> {blog.date}
                            </Card.Text>
                            <Card.Text>
                               Category: ${blog.category}
                            </Card.Text>
                            <Card.Text>
                               Expense: {blog.expense}
                            </Card.Text>
                            <Card.Text>
                                   Status: {blog.status}
                                </Card.Text>
                        </Card.Body>
                        <button onClick={() => handleCancenBlog(blog._id)} className="btn btn-danger b-0">Delete Blog</button>
                        <button onClick={() => handleAcceptBlog(blog._id)} className="btn btn-info mt-2 b-0">Accept Blog</button>
                    </Card>
                </Col>
            </>)}
        </Row>
    </div>
    );
};

export default MyBlog;