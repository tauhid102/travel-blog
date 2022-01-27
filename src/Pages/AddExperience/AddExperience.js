import React, { useState } from 'react';
import Header from '../Share/Header/Header';

const AddExperience = () => {
    const [addBlog, setAddBlog] = useState({});
    const [confirm, setConfirm] = useState(false);
    // const { user, registerUser, isLoading, authError } = useAuth();
    const status='pending';
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newAddData = { ...addBlog };
        newAddData[field] = value;
        setAddBlog(newAddData);
    }
    const handleAddProduct=(e)=>{
        e.preventDefault();
        const blogs = {
            ...addBlog,
            status
        }
        fetch('http://localhost:5000/blogs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blogs)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setConfirm(true);
                    document.getElementById("create-course-form").reset();
                }
            })
    }
    return (
        <>
        <Header></Header>
        <div className="container">
                <div className="row row-cols-1 row-cols-sm-2">
                    <div className="col">
                        <h3 className='mt-5'>Please Provide<span className='text-danger'> Information </span>For Add <span className='text-danger'>Blogs</span></h3>
                        <form className="row g-3 w-100 inputFrom mt-2" id="create-course-form" onSubmit={handleAddProduct}>
                            <div className="col-12">
                                <label for="inputAddress" className="form-label">Blog Title</label>
                                <input type="text" name='name' onBlur={handleOnBlur} className="form-control" id="inputAddress"/>
                            </div>
                            <div className="col-12">
                                <label for="inputEmail4" className="form-label">Blog Category</label>
                                <input type="text" name='category' onBlur={handleOnBlur} className="form-control" id="inputEmail4" />
                            </div>
                            <div className="col-12">
                                <label for="inputEmail4" className="form-label">Date</label>
                                <input type="text" name='date' onBlur={handleOnBlur} className="form-control" id="inputEmail4" placeholder='20 December,2021'/>
                            </div>
                            <div className="col-12">
                                <label for="inputEmail4" className="form-label">Location</label>
                                <input type="text" name='location' onBlur={handleOnBlur} className="form-control" id="inputEmail4" />
                            </div>
                            <div className="col-12">
                                <label for="inputEmail4" className="form-label">Expense</label>
                                <input type="text" name='expense' onBlur={handleOnBlur} className="form-control" id="inputEmail4" />
                            </div>
                            <div className="col-12">
                                <label for="inputPassword4" className="form-label">Details</label>
                                <textarea type="text" name='details' onBlur={handleOnBlur} className="form-control" id="inputPassword4" />
                            </div>
                            <div className="col-12">
                                <label for="inputPassword4" className="form-label">Image Url</label>
                                <input type="text" name='img' onBlur={handleOnBlur} className="form-control" id="inputPassword4" />
                            </div>
                            <div className="col-12">
                                <label for="inputPassword4" className="form-label">Rating</label>
                                <input type="text" name='rating' onBlur={handleOnBlur} className="form-control" id="inputPassword4" placeholder='1 to 5'/>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-dark">Add Blog</button>
                            </div>
                            {
                                confirm && <div class="alert alert-success" role="alert">
                                    Add Blog Successfully
                                </div>
                            }
                        </form>
                        
                    </div>
                    <div className="col picutre">
                    {/* <img src={picture} alt="" /> */}
                </div>
                </div>
            </div>
        </>
    );
};

export default AddExperience;