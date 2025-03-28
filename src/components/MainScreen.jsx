import { useEffect, useState } from "react";

export default function MainScreen() {
  const [location, setLocation] = useState(null);
  const [showSupport, setShowSupport] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Ошибка получения геолокации:", error);
      }
    );
  }, []);

  const handleScanQR = () => {
    alert("📷 Открываем камеру для сканирования QR-кода...");
    // Здесь будет логика сканера
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Карта (заглушка на фоне) */}
      <div className="absolute inset-0 z-0">
        {location ? (
          <iframe
            title="map"
            width="100%"
            height="100%"
            frameBorder="0"
            className="brightness-75"
            src={`https://maps.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`}
          ></iframe>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Получаем геолокацию...
          </div>
        )}
      </div>

      {/* Верхние кнопки */}
      <div className="absolute top-5 left-0 right-0 flex justify-center gap-4 z-10">
        <button
          onClick={() => setShowSupport(true)}
          className="bg-[#1f1f1f] text-white px-4 py-2 rounded-xl text-sm shadow-md hover:bg-[#333]"
        >
          🛠 Техподдержка
        </button>
        <button
          onClick={() => setShowInfo(true)}
          className="bg-[#1f1f1f] text-white px-4 py-2 rounded-xl text-sm shadow-md hover:bg-[#333]"
        >
          ℹ Инфо
        </button>
      </div>

      {/* Нижняя кнопка */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
        <button
          onClick={handleScanQR}
          className="bg-[#FF9900] hover:bg-[#e78c00] text-black px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg transition"
        >
          ⚡ Взять заряд
        </button>
      </div>

      {/* Модальное окно - Поддержка */}
      {showSupport && (
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-20">
          <div className="bg-[#1f1f1f] p-6 rounded-2xl max-w-sm text-center">
            <h2 className="text-lg font-bold mb-2">Техподдержка</h2>
            <p className="text-sm text-gray-300 mb-4">
              Напишите нам в Telegram: <br />
              <a
                href="https://t.me/your_support_bot"
                target="_blank"
                rel="noreferrer"
                className="text-[#FF9900] underline"
              >
                @your_support_bot
              </a>
            </p>
            <button
              onClick={() => setShowSupport(false)}
              className="mt-2 text-sm text-gray-400 hover:text-white"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}

      {/* Модальное окно - Инфо */}
      {showInfo && (
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-20">
          <div className="bg-[#1f1f1f] p-6 rounded-2xl max-w-sm text-center">
            <h2 className="text-lg font-bold mb-2">Как это работает?</h2>
            <p className="text-sm text-gray-300 mb-4">
              1. Нажмите "Взять заряд"<br />
              2. Отсканируйте QR-код станции<br />
              3. Оплатите и получите пауэрбанк<br />
              4. Верните в любую доступную станцию
            </p>
            <button
              onClick={() => setShowInfo(false)}
              className="mt-2 text-sm text-gray-400 hover:text-white"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
      
    </div>
  );
}
