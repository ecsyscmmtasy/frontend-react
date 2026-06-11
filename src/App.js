import React from 'react';
import Analytics from './Analytics';
import api from './api';
import Shop from './components/Shop';
import './App.css'; // Не забывай импортировать стили, если перенес их в отдельную папку!

function App() {

  const handleRegister = () => {
    const userData = {
      email: "alishloshara@gmail.com",
      name: "Генерал-Хуесос",
      password: "super-secret-password"
    };

    console.log('Отправляем данные на регистрацию...');
    // Добавили слеш в конце URL, как просил бэкенд
    api.post("/api/users/auth/register/", userData) 
      .then(response => {
        console.log('Ответ сервера при регистрации:', response.data.detail);
        alert('Ура! Успешная регистрация!');
      })
      .catch(error => {
        // Исправили опечатку: message вместо massage
        console.error('Ошибка регистрации:', error.response?.data || error.message); 
        alert('Ошибка! Посмотри в консоль браузера');
      });
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h3>Шапка проекта</h3>
      </header>
      
      <main>
        <h1 className='app-Title'>Тренька с Api</h1>
        
        <button onClick={handleRegister} className="btn-register">
          Протестировать регистрацию
        </button>
        
        <div className="Analytisc-box">
          <h3>Компонент аналитики</h3>
          {/* ПРАВИЛЬНО: Открыли и закрыли компонент аналитики */}
          <Analytics /> 
        </div>

        {/* ПРАВИЛЬНО: Вывели компонент магазина здесь */}
        <Shop /> 
      </main>
    </div>
  );
}

export default App;