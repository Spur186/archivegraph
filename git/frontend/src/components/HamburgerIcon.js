import React from 'react';

// This component renders the hamburger icon
const HamburgerIcon = ({ isOpen, toggleMenu }) => {
  return (
    <div className="hamburger-icon" onClick={toggleMenu}>
      {/* Conditional rendering to change the icon based on the menu state */}
      <div className={isOpen ? 'line open' : 'line'}></div>
      <div className={isOpen ? 'line open' : 'line'}></div>
      <div className={isOpen ? 'line open' : 'line'}></div>
    </div>
  );
};

export default HamburgerIcon;
