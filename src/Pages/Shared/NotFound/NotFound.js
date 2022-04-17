import React from 'react';
import './NotFound.css'
import notFound from '../../../images/not404.jpg'
const NotFound = () => {
    return (
        <div className='not-found'>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;