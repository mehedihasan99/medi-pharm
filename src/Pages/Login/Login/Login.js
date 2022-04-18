import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css'
import auth from '../../../firebase.init';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    const emailRef = useRef('');
    const passwordRef = useRef('');
    if (user) {

    }
    const handleLoginSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
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