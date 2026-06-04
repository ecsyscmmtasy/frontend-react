import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        

        <div className="about-header">
          <div className="about-badge">Преимущества</div>
          <h2 className="about-title">Все что нужно нашей команде</h2>
          <p className="about-description">Три причины, почему компании выбирают Nova для ежедневной работы.</p>
        </div>
        
        <div className="about-cards">   

          <div className="about-card">
            <h3 className="about-card-title">Высокая скорость</h3>
            <p className="about-card-text">Интерфейс загружается мгновенно, а все действия выполняются без задержек и лишних кликов.</p>
          </div>

          <div className="about-card">
            <h3 className="about-card-title">Надежная защита</h3>
            <p className="about-card-text">Данные шифруются и хранятся на защищённых серверах с ежедневным резервным копированием.</p>
          </div> 

          <div className="about-card">
            <h3 className="about-card-title">Удобно для команд</h3>
            <p className="about-card-text">Приглашайте коллег, распределяйте роли и работайте над задачами вместе в реальном времени.</p>
          </div>

        </div>
        
      </div> 
    </section>  
  );
}

export default About;