import React from 'react';
import {
    Link, NavLink
  } from 'react-router-dom';
const NavBar = () =>{
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
            <Link className="navbar-brand" to="/">Home</Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                <NavLink 
                    style={{display:'inline-block',margin:'0 1rem'}}
                    activeClassName='active'
                    className="nav-link" 
                    aria-current="page" to="/blogs"
                >
                    Blogs
                </NavLink>
                <NavLink
                    style={{display:'inline-block', margin:'0 1rem'}}
                    activeClassName='active'
                    className="nav-link" 
                    aria-current="page" to="/LoginPage"
                >
                    Login
                </NavLink>
                </li>
            </ul>
            </div>
        </nav>
    )
};

export default NavBar;