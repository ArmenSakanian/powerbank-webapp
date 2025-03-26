import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(150); // рублей
  const [station, setStation] = useState("Станция #1");

  const handleRent = () => {
    alert("✅ Пауэрбанк выдан! (заглушка)");
    setBalance((prev) => prev - 100);
  };

  return (
    <div className="min-h-screen bg-white p-4 text-black flex flex-col justify-between">
      <div>
        <h1 className="text-xl font-bold mb-2">🔋 Аренда пауэрбанков</h1>
        <p className="text-sm text-gray-600 mb-4">
          Добро пожаловать! Ниже ваш текущий баланс и доступная станция.
        </p>

        <div className="bg-gray-100 p-4 rounded-xl mb-4">
          <p className="text-md">💳 Баланс: <span className="font-semibold">{balance} ₽</span></p>
          <p className="text-md mt-2">📍 Станция: {station}</p>
        </div>

        <button
          onClick={handleRent}
          className="w-full bg-blue-600 text-white py-3 rounded-2xl text-lg font-medium hover:bg-blue-700 transition"
        >
          Арендовать за 100 ₽
        </button>
      </div>

      <footer className="text-center text-xs text-gray-400 mt-6">
        Made for Telegram WebApp 👋
      </footer>
    </div>
  );
}

export default App;
