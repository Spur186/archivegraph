import React, { useState } from 'react';
import HamburgerIcon from './HamburgerIcon';
import Menu from './Menu';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu-container">
      <HamburgerIcon isOpen={isOpen} toggleMenu={toggleMenu} />
      <Menu isOpen={isOpen} />
    </div>
  );
};

export default HamburgerMenu;

