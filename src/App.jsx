import React from "react";
import Header from "./components/Header";
import Text from "./components/Text";
import {} from './data';
import './App.css';
import Button from "./components/Button/Button";


            function handleClick(type) {
            console.log('button clicked', type);
        }

function App() {
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
      </section>
      </main>
    </div>
  );
}

export default App;