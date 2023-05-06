import React from 'react';

import './Auth.css';

import Logo from '../../img/logo.png';

const Auth = () => {
    return (
        <div className='auth'>
            <div className="a-left">
                <img src={Logo} alt="logo" />
                <div className="webname">
                    <h1>Social Images</h1>
                    <h6>Explore the ideas throughout the world</h6>
                </div>
            </div>

            <Login />
        </div>
    );
}

function Login() {
    return (
        <div className='a-right'>
            <form className="infoForm loginForm">
                <h3>Login</h3>
                <div>
                    <input type="text" placeholder='Username' className='infoInput' name='username' />
                </div>
                <div>
                    <input type="text" placeholder='Password' className='infoInput' name='password' />
                </div>

                <div className='btn-wrapper'>
                    <span>Don't have an account?</span>
                    <button className="button info-button" type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

function SignUp() {
    return (
        <div className='a-right'>
            <form className="infoForm authForm">
                <h3>Sign Up</h3>
                <div>
                    <input type="text" placeholder='First Name' className='infoInput' name='firstname' />
                    <input type="text" placeholder='Last Name' className='infoInput' name='lastname' />
                </div>
                <div>
                    <input type="text" placeholder='Username' className='infoInput' name='username' />
                </div>
                <div>
                    <input type="text" placeholder='Password' className='infoInput' name='password' />
                    <input type="text" placeholder='Confirm Password' className='infoInput' name="confirmpassword" />
                </div>

                <div className='btn-wrapper'>
                    <span>Already have an account?</span>
                    <button className="button info-button" type="submit">Sign up</button>
                </div>
            </form>
        </div>
    );
}

export default Auth;
