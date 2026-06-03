import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        
        {/* Весь текстовый контент и кнопки теперь собраны здесь */}
        <div className="hero-content">
          
          {/* Фиолетовый бейдж сверху */}
          <div className="badge">
            <span className="badge-icon">✦</span> Новая версия 2.0 уже доступна
          </div>
          
          {/* Главный заголовок с переносами */}
          <h1 className="hero-title">
            Управляйте <br />
            командой <br />
            проще и быстрее
          </h1>
          
          {/* Подзаголовок (описание) */}
          <p className="hero-subtitle">
            Nova объединяет задачи, аналитику и общение в одном понятном рабочем пространстве. 
            Запуститесь за минуты — без сложных настроек.
          </p>
          
          {/* Блок с двумя кнопками */}
          <div className="hero-buttons">
            <button className="btn-primary">Начать бесплатно</button>
            <button className="btn-secondary">Узнать больше</button>
          </div>
          
        </div> {/* Конец hero-content */}

      </div>
    </section>
  );
}

export default Hero;