import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    let { serviceId } = useParams();
    return (
        <div>
            <h2 className='text-center mt-5'>This is ServiceDetails: {serviceId}</h2>
            <div className='text-center mt-5'>
                <Link to='/checkout'>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;