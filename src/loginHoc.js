import React from 'react';
import { useSelector } from 'react-redux';
import { handleLogin } from './redux/slicers/loginSlice';
import { useDispatch } from 'react-redux';
import { loginAsync } from './redux/actions/action';
import { setToken } from './redux/slicers/tokenSlice';


const loginHoc = (Component, url) => ({ ...props }) => {

    const setTokenUI = (token) => {
        dispatch(setToken(token))
    }

    const dispatch = useDispatch()
    const { login } = useSelector(state => state.loginSlice)
    const newLogin = url === '/reg' ? login : { email: login.email, password: login.password }

    const handleValues = (prop) => (e) => {
        dispatch(handleLogin({ ...newLogin, [prop]: e.target.value }))
    }

    const loginAsyncUI = (e) => {
        e.preventDefault()
        dispatch(loginAsync({ setTokenUI, url }))
    }

    return (
        <Component
            {...props}
            handleValues={handleValues}
            loginAsyncUI={loginAsyncUI}
        />
    )
}
export default loginHoc;