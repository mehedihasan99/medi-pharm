import React from 'react';
const MyCheckout = () => {
    return (
        <div className='container main-container'>
            <form className='form-container'>
                <h3 className='text-center text-primary'>Checkout Form</h3>
                <input type="text" name="" id="" placeholder='Enter Your Name' />
                <input type="email" name="email" id="" placeholder='Enter Your Email' required />
                <input type="password" name="password" id="" placeholder='Enter Your Password' required />
                <input type="submit" value="Check Out" />
            </form>

        </div>
    );
};

export default MyCheckout;