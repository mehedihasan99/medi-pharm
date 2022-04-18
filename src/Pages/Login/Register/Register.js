import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleRegisterSubmit = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password, name);
    }
    return (
        <div className='container main-container'>
            <form onSubmit={handleRegisterSubmit} className='form-container'>
                <input ref={nameRef} type="text" name="" id="" placeholder='Enter Your Name' />
                <input ref={emailRef} type="email" name="email" id="" placeholder='Enter Your Email' required />
                <input ref={passwordRef} type="password" name="password" id="" placeholder='Enter Your Password' required />
                <input type="submit" value="Login" />
                <Link className='goToLogin' to='/login'>Already have a account? <span className='create-account'>Login</span></Link>
            </form>

        </div>
    );
};

export default Register;