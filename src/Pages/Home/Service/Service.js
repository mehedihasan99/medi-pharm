import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, picture, price, about } = service;
    const navigae = useNavigate();
    const goToCheckOut = () => {
        navigae('/checkout')
    }
    return (
        <div className="card">
            <img src={picture} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p>Price: {price}</p>
                <p className="card-text">{about}</p>
                <button onClick={goToCheckOut} className="btn btn-primary">Go somewhere</button>
            </div>
        </div>
    );
};

export default Service;