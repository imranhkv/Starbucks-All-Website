import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MenuNavbar.css'

function MenuNavbar() {
    const location = useLocation();
    return (
        <div className='menunavbar'>
            <div className="container">
                <nav>
                <ul>
                        <li>
                            <Link to="/menu" className={location.pathname === '/menu' ? 'active' : ''}>All Products</Link>
                        </li>
                        <li>
                            <Link to="/featured">Featured</Link>
                        </li>
                        <li>
                            <Link to="/menu/previous" className={location.pathname === '/menu/previous' ? 'active' : ''}>Previous Orders</Link>
                        </li>
                        <li>
                            <Link to="/menu/favorite" className={location.pathname === '/menu/favorite' ? 'active' : ''}>Favorite Products</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default MenuNavbar;
