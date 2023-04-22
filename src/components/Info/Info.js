import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInfoAsync } from '../../redux/actions/action';
import { useNavigate } from 'react-router-dom';
import { clearToken } from '../../redux/slicers/tokenSlice';

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { email, verified, name } = useSelector(state => state.infoSlice.info)
    const { token } = useSelector(state => state.tokenSlice);

    const handleLogout = () => {
        dispatch(clearToken())
        navigate('/auth')
    }

    useEffect(() => {
        dispatch(getInfoAsync())
    }, [dispatch, navigate, token])
    return (
        <div>
            <h2>User name:{`${name ? name : 'your name'}`}</h2>
            <h2>{verified ? `User verified: ${email}` : `Verify your email:${email ? email : 'your email'}`}</h2>
            <button
                onClick={handleLogout}
            >
                Log Out
            </button>

        </div>
    );
};

export default Header;