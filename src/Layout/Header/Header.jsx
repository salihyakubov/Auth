import React from 'react';
import { Link , NavLink} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {



    return (
        <header className='header'>
                    <div className='header-container'>
            <ul className='header__list'>
                <li className='header__list-item'>
                    <NavLink className='header__link' to='/'>Home</NavLink>
                </li>
                <li className='header__'>
                    <NavLink className='header__link' to='/about'>About</NavLink>
                </li>
                <li className='header__list-item'>
                    <NavLink className='header__link' to='/contact'>Contact</NavLink>
                </li>
                <li className='header__list-item'>
                    <NavLink className='header__link' to='/login'>Login</NavLink>
                </li>
                <li className='header__list-item'>
                    <NavLink className='header__link' to='/registr'>Registration</NavLink>
                </li>
            </ul>
            
        </div>
        </header>

    );
};

export default Header;