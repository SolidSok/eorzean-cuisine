import React from 'react';
import './navbar.css';
import { Link, Outlet } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      {' '}
      <nav className="navbar">
        <ul>
          <li className="home-button">
            <Link to="/">Home</Link>
          </li>
          <li>
            {' '}
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
          <li>
            <Link to="/profile">Your Account</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
