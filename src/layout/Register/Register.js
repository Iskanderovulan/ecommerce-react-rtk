import React from 'react';
import loginHoc from '../../loginHoc';


const Register = ({ handleValues, loginAsyncUI }) => {



    return (
        <form onSubmit={loginAsyncUI}>
            <h2>REGISTRATION</h2>
            <input
                type="text"
                placeholder='username'
                onChange={handleValues('name')}
            />
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

export default loginHoc(Register, '/reg');