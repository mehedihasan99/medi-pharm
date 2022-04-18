import React from 'react';
import './MysocialLogin.css'
import googleLogo from '../../../images/social/google-logo.png'
const MysocialLogin = () => {
    return (
        <div>
            <div className='line-container'>
                <div className='left-line'></div>
                <span>OR</span>
                <div className='right-line'></div>
            </div>
            <div>
                <button className='mt-3 btn btn-info w-50 d-block mx-auto'>
                    <img className='googleLogo' src={googleLogo} alt="" />
                    <span className='ms-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default MysocialLogin;