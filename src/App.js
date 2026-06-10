import React from 'react';
import Analytics from './Analytics';
import api from './api';
import Shop from './components/Shop';

function App() {

const handleRegister = () => {
  const userData = {
    email: "alishloshara@gmail.com",
    name: "Генерал-Хуесос",
    password: "super-secret-password"
  };

  console.log('Отправляем данные на регистрацию...');
  api.post("/api/users/auth/register", userData)
  .then(response => {
    console.log('Отпровляем сервера при регистрации', response.data.detail);
    alert('Ура! Успешная регистрация!');
  })
  .catch(error => {
    console.error('Ошибка, регистрации', error.response?.data || error.massage);
    alert('Ошибка! Посмтори в консоль брвузера');
  });
};

return (
  <div className="app-container">
    <header className="app-header">
      <h3>Шапка проекта</h3>
    </header>
    <main>
      <h1 className='app-Title'>Тренька с Api</h1>
      <button onClick>
    </main>
  </div>
)

}

export default App;
