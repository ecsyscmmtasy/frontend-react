import React, { useEffect, useState } from 'react';
import api from '../api'; // Проверь путь! Если api.js лежит в src, а этот файл в src/components, нужно выйти на уровень вверх (../)

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/api/shop/products/')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Не удалось загрузить товары:', error);
      });
  }, []);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginTop: '20px' }}>
      <h2>Витрина магазина 🛒</h2>
      {products.length === 0 ? (
        <p>Товаров пока нет или сервер Алишера спит...</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id} style={{ marginBottom: '10px' }}>
              <strong>{product.name}</strong> — {product.price} тг. (Остаток: {product.stock} шт.)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Shop;  