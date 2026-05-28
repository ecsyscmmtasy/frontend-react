import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Counter from './components/Counter/Counter';
import UserList from './components/UserList/UserList';

function App() {
  return (
    <div className="app">
      <Header title="React Практика" />

      <main className="app__main">
        <section className="app__section">
          <h2>Задание 1: Счётчик</h2>
          <p className="app__description">
            Изучите компонент Counter — как работает useState и обработка событий.
          </p>
          <Counter />
        </section>

        <section className="app__section">
          <h2>Задание 2: Список пользователей</h2>
          <p className="app__description">
            Изучите компонент UserList — как работает useEffect и загрузка данных.
          </p>
          <UserList />
        </section>
      </main>
    </div>
  );
}

export default App;
