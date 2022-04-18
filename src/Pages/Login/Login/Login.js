import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleLoginSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }
    return (
        <div className='container main-container'>
            <form onSubmit={handleLoginSubmit} className='form-container'>
                <input ref={emailRef} type="email" name="email" id="" placeholder='Enter Your Email' required />
                <input ref={passwordRef} type="password" name="password" id="" placeholder='Enter Your Password' required />
                <input type="submit" value="Login" />
                <Link className='goToRegister' to='/register'>New to medi pharm? <span className='create-account'> Create a account</span></Link>
            </form>

        </div>
    );
};

export default Login;