import React from 'react';
import './About.css'
import myPic from '../../images/Mehedi.jpg'
const About = () => {
    return (
        <div className="container mt-5">
            <h2 className='text-primary text-center mb-5'>This is Mehedi hasan</h2>
            <div className='about-container'>
                <div>
                    <img src={myPic} alt="" />
                </div>
                <div>
                    <h2>My goal</h2>
                    <p>My name is Mehedi Hasan and I am learning as a full-stack Web Application Developer and Software Developer, currently living in Dhaka. And I am working hard to achieve my goal.</p>
                </div>
            </div>
        </div>
    );
};

export default About;