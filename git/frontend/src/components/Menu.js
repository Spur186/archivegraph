"use client"; // Add this directive if needed

import React from 'react';

const Menu = ({ isOpen }) => {
  return (
    <div className={isOpen ? 'menu open' : 'menu'}>
      <ul>
        <li>
          <a href="/">Home</a> {/* Navigates to the Home page */}
        </li>
        <li>
          <a href="/about">About</a> {/* Navigates to the About page */}
        </li>
        <li>
          <a href="/services">My Graphs</a> {/* Navigates to the My Graphs page */}
        </li>
        <li>
          <a href="/contact">My Profile</a> {/* Navigates to the My Profile page */}
        </li>
      </ul>
    </div>
  );
};

export default Menu;



