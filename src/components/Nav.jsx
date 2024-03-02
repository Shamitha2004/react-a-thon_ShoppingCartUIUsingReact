import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <div>      
    <nav className="navbar">
      <div className="container">
        <div className="search-bar">
          <input type="text" placeholder="Search products..." />
          <button>Search</button>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Nav;
