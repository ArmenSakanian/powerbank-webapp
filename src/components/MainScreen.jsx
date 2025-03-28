import { useState } from "react";

export default function MainScreen() {
  const [balance, setBalance] = useState(150);
  const [station, setStation] = useState("Станция #1");

  const handleRent = () => {
    alert("✅ Пауэрбанк выдан! (заглушка)");
    setBalance((prev) => prev - 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1c1c1c] to-[#141414] text-white p-4 flex flex-col items-center">
      <div className="w-full max-w-md bg-[#1d1d1d] rounded-2xl shadow-xl p-5 mt-6 flex flex-col gap-6">

        <div className="text-center">
          <h1 className="text-2xl font-bold text-white">🔋 PowerBank</h1>
          <p className="text-gray-400 text-sm mt-1">Аренда пауэрбанков через Telegram</p>
        </div>

        <div className="bg-[#2a2a2a] rounded-xl p-4">
          <p className="text-sm text-gray-400">💳 Баланс</p>
          <p className="text-2xl font-semibold">{balance} ₽</p>
        </div>

        <div className="bg-[#2a2a2a] rounded-xl p-4">
          <p className="text-sm text-gray-400">📍 Текущая станция</p>
          <p className="text-lg">{station}</p>
        </div>

        <button
          onClick={handleRent}
          className="bg-[#FF9900] hover:bg-[#e78c00] text-black py-3 rounded-xl text-lg font-semibold transition"
        >
          ⚡ Арендовать за 100 ₽
        </button>
      </div>

      <div className="mt-8 w-full max-w-md px-4 text-sm text-gray-400 flex flex-col gap-4">
        <button className="text-left hover:text-white transition">📦 История аренды</button>
        <button className="text-left hover:text-white transition">💰 Пополнить баланс</button>
        <button className="text-left hover:text-white transition">🛠 Поддержка</button>

        <p className="text-center text-xs text-gray-600 mt-6">© PowerBank WebApp</p>
      </div>
    </div>
  );
}
