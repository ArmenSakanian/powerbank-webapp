import { useState } from "react";

export default function MainScreen() {
  const [balance, setBalance] = useState(150);
  const [station, setStation] = useState("Станция #1");

  const handleRent = () => {
    alert("✅ Пауэрбанк выдан! (заглушка)");
    setBalance((prev) => prev - 100);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-5 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold mb-4 text-white">🔋 PowerBank</h1>

        <div className="bg-[#1a1a1a] p-4 rounded-2xl mb-4">
          <p className="text-sm text-gray-400">Баланс</p>
          <p className="text-xl font-semibold">{balance} ₽</p>
        </div>

        <div className="bg-[#1a1a1a] p-4 rounded-2xl mb-6">
          <p className="text-sm text-gray-400">Станция</p>
          <p className="text-lg">{station}</p>
        </div>

        <button
          onClick={handleRent}
          className="w-full bg-[#0085BB] hover:bg-[#0072a1] text-white py-3 rounded-2xl text-lg font-medium transition"
        >
          Арендовать за 100 ₽
        </button>
      </div>

      <div className="mt-8 text-sm text-gray-400 flex flex-col gap-3">
        <button className="text-left hover:text-white transition">📦 История аренды</button>
        <button className="text-left hover:text-white transition">💰 Пополнить баланс</button>
        <button className="text-left hover:text-white transition">🛠 Поддержка</button>

        <p className="text-center text-xs text-gray-600 mt-4">© PowerBank WebApp</p>
      </div>
    </div>
  );
}
