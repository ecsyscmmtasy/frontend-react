import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="main-header">
      <div className="header-container">
        
        {/* Логотип */}
        <div className="logo-block">
          <div className="logo-icon">Nurs</div>
          <span className="logo-text">Alish</span>
        </div>

        {/* Навигация по центру */}
        <nav className="nav-menu">
          <a href="#main" className="nav-link active">Главная</a>
          <a href="#about" className="nav-link">О нас</a>
          <a href="#services" className="nav-link">Услуги</a>
          <a href="#contacts" className="nav-link">Контакты</a>
        </nav>

        {/* Кнопки справа */}
        <div className="auth-buttons">
          <button className="btn-login">Войти</button>
          <button className="btn-start-nav">Начать</button>
        </div>

      </div>
    </header>
  );
}

export default Header;