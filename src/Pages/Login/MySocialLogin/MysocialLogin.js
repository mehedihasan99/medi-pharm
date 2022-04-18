import React from 'react';
import './MysocialLogin.css'
import googleLogo from '../../../images/social/google-logo.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
const MysocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let elementError;
    if (error) {
        elementError = <div>
            <p>Error: {error.message}</p>
        </div>

    }
    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <div className='line-container'>
                <div className='left-line'></div>
                <span>OR</span>
                <div className='right-line'></div>
            </div>
            <span className='text-center text-danger'>{elementError}</span>
            <div>
                <button onClick={() => signInWithGoogle()}
                    className='mt-3 btn btn-info w-50 d-block mx-auto'>
                    <img className='googleLogo' src={googleLogo} alt="" />
                    <span className='ms-2'>Google Sign In</span>
                </button>

            </div>
        </div>
    );
};

export default MysocialLogin;