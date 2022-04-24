import React, { useContext, useState } from 'react';
import { DarkModeContest } from '../../context';
import './styles.scss';
import sun from 'src/components/Header/icon-sun.svg';
import moon from 'src/components/Header/icon-moon.svg';

function Header() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContest);
  const handleClick = () => {
    toggleDarkMode();
  };
  return (
    <nav className={darkMode ? `nav header--dark` : `nav header--light`}>
      <div className="container-logo"><h1 className="logo">devfinder</h1></div>
      <div className="switcher_container" onClick={handleClick}>
        <p className="darkmode">{darkMode ? 'Light' : 'Dark'}</p>
        <img className="icons-card" src={darkMode ? sun : moon} alt={darkMode ? `light mode` : `dark mode`} />
      </div>
    </nav>
  );
}

export default Header;
