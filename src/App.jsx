import React from "react";
import Header from "./components/Header";
import Text from "./components/Text";
import { differences } from './data'; // Оставили только то, что используется
import './App.css';
import Button from "./components/Button/Button";
import { useState } from "react";

function App() {
  // Начальное состояние должно совпадать с ключом из объекта differences, 
  // иначе при первом рендере будет ошибка (undefined)
  const [content, setContent] = useState('title'); 

  function handleClick(type) {
    setContent(type);
  }

  return (
    <div className="app">
      <Header />
      <main>
        <section>
          <Text title="676767" description="767676" />
          <Text title="4321" description="1234" />
          <Text title="676767" description="767676" />
          <Text title="4321" description="1234" />       
          <Text title="676767" description="767676" />
          <Text title="4321" description="1234" />

          <Button onClick={() => handleClick('title')}>дароу</Button>
          <Button onClick={() => handleClick('description')}>добра</Button>
          <Button onClick={() => handleClick('govno')}>и зла</Button>
          
          {/* Отобразит текст из объекта differences по ключу */}
          <p>{differences[content]}</p> 
        </section>
      </main>
    </div>
  );
}

export default App;