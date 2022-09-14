import React from 'react';

import './template.css';
import Header from './components/Header';
import HeroScreen from './components/HeroScreen';
import Screen2 from './components/Screen2'
import ScreenGroup426 from './components/ScreenGroup426';
import NewsScreen from './components/NewsScreen';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <div className='container'>
        <Header />
        <HeroScreen />
        <Screen2 />
        <ScreenGroup426 />
        <NewsScreen />
        <Footer />
      </div>
    </div>
  );
}

export default App;
