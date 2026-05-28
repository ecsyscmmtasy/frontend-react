import React, { useState } from 'react';
import Button from '../Button/Button';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter">
      <p className="counter__value">{count}</p>
      <div className="counter__controls">
        <Button onClick={decrement} variant="secondary">
          -
        </Button>
        <Button onClick={reset} variant="danger">
          Сбросить
        </Button>
        <Button onClick={increment} variant="primary">
          +
        </Button>
      </div>
    </div>
  );
}

export default Counter;
