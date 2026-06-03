import React from 'react';
import Header from './components/Header.jsx'; 
import Hero from './components/Hero.jsx'; 
import About from './components/About.jsx';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;