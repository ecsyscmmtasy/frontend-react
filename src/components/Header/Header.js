import React from 'react';
import './Header.css';

function Header({ title }) {
  return (
    <header className="header">
      <div className="header__inner">
        <h1 className="header__title">{title}</h1>
      </div>
    </header>
  );
}

export default Header;
