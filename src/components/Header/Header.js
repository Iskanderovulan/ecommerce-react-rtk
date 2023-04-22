import React, { useState } from 'react';
import BadgeCart from '../../components/BadgeCart/BadgeCart';
import Cart from '../../components/Cart/Cart';
import s from './Header.module.css'
import Info from '../Info/Info'
import { NavLink } from 'react-router-dom';

const Header = () => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(prev => !prev)
    }
    console.log(toggle)
    return (
        <>
            <header>
                <div className="container">
                    <div className={s.header__nav}>
                        <Info />
                        <div className={s.header__cart}>
                            <NavLink to='/favorites'>Favourites</NavLink>
                            <BadgeCart
                                handleToggle={handleToggle}
                            />
                        </div>
                    </div>
                </div>
            </header>
            <Cart
                toggle={toggle}
                handleToggle={handleToggle}
            />
        </>
    );
};

export default Header;