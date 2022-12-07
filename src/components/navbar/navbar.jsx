import React from 'react';
import './navbar.css';
import { Link, Outlet } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      {' '}
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            {' '}
            <Link to="/menu">menu</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
