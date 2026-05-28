import React, { useState, useEffect } from 'react';
import './UserList.css';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Ошибка загрузки данных');
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="user-list__status">Загрузка...</p>;
  if (error) return <p className="user-list__status user-list__status--error">{error}</p>;

  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id} className="user-list__item">
          <span className="user-list__name">{user.name}</span>
          <span className="user-list__email">{user.email}</span>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
