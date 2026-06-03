import React from 'react';
import './About.css';

function About() {
    return (
    <section id ="about" className="about-section">
        <div className="about-container">
        <div className="about-header">
        <div className="about-badge">Преимущества</div>
        <h2 className="about-title">Все что нужно нашей команде</h2>
        <p className="about-description">Три причины, почему компании выбирают Nova для ежедневной работы.</p>
        </div>
        
        <div className="about-cards">
            <div className="about-card">
                <h3 className="about-first-card">Высокая скорость</h3>
                <p className="about-first-text">Интерфейс загружается мгновенно, а все действия выполняются без задержек и лишних кликов.</p>

            <div className="about-card-second">
                <h3 className="about-second-card">Надежная защита</h3>
                <p className="about-second-text">Данные шифруются и хранятся на защищённых серверах с ежедневным резервным копированием.</p>

            <div className="about-card-third">
                <h3 className="about-third-card">Удобно для команд</h3>
                <p className="about-third-text">Приглашайте коллег, распределяйте роли и работайте над задачами вместе в реальном времени.</p>
            </div>
        </div>
    </section>  
    )
}

export default About;