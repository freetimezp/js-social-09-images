import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './Auth.css';

import Logo from '../../img/logo.png';
import { loginIn, signUp } from '../../actions/AuthAction.js';

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [data, setData] = useState({ firstname: '', lastname: '', username: '', password: '', confirmpass: '' });
    const [confirmPass, setConfirmPass] = useState(true);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignUp) {
            data.password === data.confirmpass ? dispatch(signUp(data)) : setConfirmPass(false);
        } else {
            dispatch(loginIn(data));
        }
    };

    const resetForm = () => {
        setConfirmPass(true);
        setData({ firstname: '', lastname: '', username: '', password: '', confirmpass: '' })
    };

    return (
        <div className='auth'>
            <div className="a-left">
                <img src={Logo} alt="logo" />
                <div className="webname">
                    <h1>Social Images</h1>
                    <h6>Explore the ideas throughout the world</h6>
                </div>
            </div>

            <div className='a-right'>
                <form className="infoForm authForm" onSubmit={handleSubmit}>
                    <h3>{isSignUp ? "Sign Up" : "Login"}</h3>

                    {isSignUp && (
                        <div>
                            <input
                                type="text"
                                placeholder='First Name'
                                className='infoInput'
                                name='firstname'
                                onChange={handleChange}
                                value={data?.firstname}
                            />
                            <input
                                type="text"
                                placeholder='Last Name'
                                className='infoInput'
                                name='lastname'
                                onChange={handleChange}
                                value={data?.lastname}
                            />
                        </div>
                    )}

                    <div>
                        <input
                            type="text"
                            placeholder='Username'
                            className='infoInput'
                            name='username'
                            onChange={handleChange}
                            value={data?.username}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder='Password'
                            className='infoInput'
                            name='password'
                            onChange={handleChange}
                            value={data?.password}
                        />
                        {isSignUp && (
                            <input
                                type="password"
                                placeholder='Confirm Password'
                                className='infoInput'
                                name="confirmpass"
                                onChange={handleChange}
                                value={data?.confirmpass}
                            />
                        )}
                    </div>

                    {isSignUp && (
                        <span
                            style={{
                                display: confirmPass ? 'none' : 'block',
                                color: 'red',
                                alignSelf: 'flex-end',
                                fontSize: '12px'
                            }}
                        >
                            * Confirm password is not same
                        </span>
                    )}

                    <div className='btn-wrapper'>
                        <span onClick={() => { setIsSignUp((prev) => !prev); resetForm(); }}>
                            {isSignUp ? 'Already have an account! Login!' : "Don't have an account! Sign Up!"}
                        </span>
                        <button className="button info-button" type="submit">
                            {isSignUp ? 'Sign Up' : 'Login'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Auth;
