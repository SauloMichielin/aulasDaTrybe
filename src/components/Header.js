import React, { useContext } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { ThemeContext } from '../context/ThemeContext';

function Header() {
  const { dark, toggleTheme } = useContext(ThemeContext);
  return (
    <header>
      <div
        className="theme"
        onClick={ toggleTheme }
        role="presentation"
      >
        {dark && <BsSunFill style={ { color: 'yellow' } } />}
        {!dark && <BsMoonFill />}
      </div>
    </header>
  );
}

export default Header;
