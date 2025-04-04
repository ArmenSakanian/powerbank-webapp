import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    if (window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
    }
  }, []);

  const handleTakePower = () => {
    alert('Открытие камеры для сканирования QR...');
    // Здесь позже будет логика для Web API доступа к камере
  };

  const handleSupport = () => {
    alert('Техподдержка: свяжитесь с нами в Telegram @support');
  };

  const handleInfo = () => {
    alert('Информация: аренда пауэрбанков по всей Москве.');
  };

  return (
    <div className="App">
      <div className="header">
        <span className="logo">POWER</span>
        <div className="top-buttons">
          <button className="top-btn" onClick={handleSupport}>Техподдержка</button>
          <button className="top-btn" onClick={handleInfo}>Информация</button>
        </div>
      </div>

      <div className="content" />

      <button className="main-button" onClick={handleTakePower}>🔌 Взять заряд</button>
    </div>
  );
}

export default App;
