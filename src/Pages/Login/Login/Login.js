import React from 'react';
import './Login.css'
const Login = () => {
    return (
        <div className='container main-container'>
            <form className='form-container'>
                <input type="email" name="email" id="" placeholder='Enter Your Email' />
                <input type="password" name="password" id="" placeholder='Enter Your Password' />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;