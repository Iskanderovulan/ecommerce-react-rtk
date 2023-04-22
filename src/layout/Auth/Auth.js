import React from 'react';
import loginHoc from '../../loginHoc';


const Auth = ({ handleValues, loginAsyncUI }) => {

    return (
        <form onSubmit={loginAsyncUI}>
            <h2>AUTHORIZATION</h2>
            <input
                type="text"
                placeholder='email'
                onChange={handleValues('email')}
            />
            <input
                type="text"
                placeholder='password'
                onChange={handleValues('password')}
            />
            <button>Register</button>
        </form>
    );
};

export default loginHoc(Auth, '/login');