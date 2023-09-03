import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

function Navbar() {
  return (
    <nav>
      <h1>Dictionary App</h1>
      <ul className="navLink">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/History">History</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;