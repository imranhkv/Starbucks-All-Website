import React, { useState,useContext } from 'react'
import "./Header.css"
import { NavLink, Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import { GlobalContext } from '../ContentAPI/Context'

function Header() {
    const {register, setReg} = useContext(GlobalContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='header'>
            <div className="container-px">
                <div className="navbar">
                    <div className="navbar-left">
                        <Link to="/"><Logo /></Link>
                        <li >
                            <NavLink to="/menu">Menu</NavLink>
                        </li>
                        <li>
                            <NavLink to="/rewards">Rewards</NavLink>
                        </li>
                        <li>
                            <NavLink to="/gift">Gift Cards</NavLink>
                        </li>
                    </div>
                    <div className="navbar-right">
                        <div className="navbar-right-findstore">
                            <NavLink to="/findastore" > <i className="fa-sharp fa-solid fa-location-dot"></i> Find a Store</NavLink>
                        </div>
                        <div className="navbar-right-buttons">
                            <Link to="/signin" id='signin' className={register ? "display-none" : ""} >Sign in</Link>
                            <Link to="/create" id='joinnow' onClick={()=>setReg(false)} >{register ? "Log Out" : "Join now"}</Link>
                        </div>
                    </div>
                </div>
                <div className="hamburger-menu">
                    <button className='menu-toggle' onClick={toggleMenu}>
                        <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} />
                    </button>
                    {isMenuOpen ? (
                        <div className='navbar-menu'>
                            <ul>
                                <li>
                                    <NavLink to='/menu' onClick={toggleMenu}>
                                        Menu
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/rewards' onClick={toggleMenu}>
                                        Rewards
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/gift' onClick={toggleMenu}>
                                        Gift Cards
                                    </NavLink>
                                </li>
                            </ul>
                            <NavLink to='/findastore'>
                                <i className='fa-sharp fa-solid fa-location-dot' /> Find a Store
                            </NavLink>
                            <div className='navbar-right-buttons'>
                                <Link to='/signin' id='signin' onClick={toggleMenu}>
                                    Sign In
                                </Link>
                                <Link to='/create' id='joinnow' onClick={toggleMenu}>
                                    Join now
                                </Link>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>

    )
}

export default Header
