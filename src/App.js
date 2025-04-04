import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    if (window.Telegram.WebApp) {
      window.Telegram.WebApp.ready(); // Сообщаем Telegram, что WebApp готов
    }
  }, []);

  return (
    <div className="App">
      <h1>Powerbank аренда</h1>
      <p>Добро пожаловать в мини-приложение!</p>
    </div>
  );
}

export default App;
