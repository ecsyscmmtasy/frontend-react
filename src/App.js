import { useState } from 'react';
import './App.css';

export default function App() {

  const[text, setText] = useState('');

  return(
    <div className='box'>
      <label> Введите текст:</label> 
    <input
    className="input-style"
    value={text}
    onChange={(e) => setText(e.target.value)}
    />
<p>{text}</p>
    </div>
  );
}