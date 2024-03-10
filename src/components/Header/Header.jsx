import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import './Header.scss';
import Dropdown from '../Dropdown/Dropdown';
import { navItems } from '../NavItems';
import { ReactComponent as Logo } from '../../assets/Homepage/logo.svg';



const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [stickyClass, setStickyClass] = useState('');
    const [logoColor, setlogoColor] = useState('white');
    // const [dropdown, setDropdown] = useState(false);
    const [burgerMenuColor, setBurgerMenuColor] = useState('white');


    const stickyHeader = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 0 ? setStickyClass('sticky-nav') : setStickyClass('');
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', stickyHeader);
        return () => window.removeEventListener('scroll', stickyHeader);
    }, []);


    const changeLogoColor = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 0 ? setlogoColor('black') : setlogoColor('white')
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", changeLogoColor);
    })


    const burgerColor = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 0 ? setBurgerMenuColor('black') : setBurgerMenuColor('white');
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", burgerColor);
    })

    const toggleBurger = () => {
        setMenuOpen(!menuOpen);
    }



    return (
        <>
            <header className={`header ${stickyClass}`}>
                <div className="header__content">
                    <Link to="/" className='nounderline'>
                        <Logo className='navbar__logo' fill={`${logoColor}`} />
                    </Link>
                    <nav className={menuOpen ? 'navbar menuOpen' : 'navbar'}>
                        <ul className='navbar__items'>
                            {navItems.map((item) => {
                                if (item.title === "portfolioDropdown") {
                                    return (
                                        <li key={item.id} className={item.cName}>
                                            <Link to={item.path}>{item.title}</Link>
                                            <Dropdown />
                                        </li>);
                                }
                                return (
                                    <li key={item.id} className={item.cName}>
                                        <Link to={item.path}>{item.title}</Link>
                                    </li>);
                            })}
                        </ul>
                    </nav>
                    <div className="hamburger" onClick={toggleBurger}>
                        {menuOpen ? <AiOutlineClose className="hamburger__icon" fill={`${burgerMenuColor}`} />
                            : <AiOutlineMenu className="hamburger__icon" fill={`${burgerMenuColor}`} />}
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;

