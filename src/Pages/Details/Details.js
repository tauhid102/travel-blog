import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Share/Header/Header';

const Details = () => {
    const { detailsId } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        const url = `https://pacific-plateau-84630.herokuapp.com/blogs/${detailsId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [detailsId]);
    return (
        <>
        <Header></Header>
        <div className="card">
            <img height={500} src={details.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{details.name}</h5>
                <h5 className="card-title">Category: <span className='text-danger'>{details.category}</span></h5>
                <h6 className="card-title">Date: <span className=''>{details.date}</span></h6>
                <h6 className="card-title">Date: <span className=''>{details.date}</span></h6>
                <h6 className="card-title">Rating: <span className=''>{details.rating}</span></h6>
                <h6 className="card-title">Details: <span className=''>{details.details}</span></h6>
                <p className="card-text"></p>
            </div>
        </div>
        </>
    );
};

export default Details;