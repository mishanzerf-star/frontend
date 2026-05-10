"use client";

import { useState } from "react";

export default function Home() {
  const [connected, setConnected] = useState(false);
  const [page, setPage] = useState("home");

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
        <div className="w-full max-w-md space-y-4">
          <h2 className="text-3xl font-bold mb-4 text-center">
            🌍 Серверы
          </h2>

          {[
            "Германия 🇩🇪",
            "Нидерланды 🇳🇱",
            "Финляндия 🇫🇮",
            "США 🇺🇸",
          ].map((server) => (
            <div
              key={server}
              className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-5 flex justify-between items-center hover:scale-[1.02] transition-all"
            >
              <span className="text-lg">{server}</span>

              <button className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-xl">
                Выбрать
              </button>
            </div>
          ))}
        </div>
      );
    }

    if (page === "referrals") {
      return (
        <div className="w-full max-w-md text-center">
          <h2 className="text-3xl font-bold mb-6">
            👥 Реферальная система
          </h2>

          <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-6">
            <p className="text-zinc-300 mb-4">
              Приглашай друзей и получай бонусы
            </p>

            <div className="bg-black/40 rounded-2xl p-4 mb-5 text-sm break-all">
              https://t.me/yourvpn_bot?start=ref123
            </div>

            <button className="bg-green-500 hover:bg-green-400 px-6 py-3 rounded-2xl font-bold transition-all active:scale-95">
              Скопировать ссылку
            </button>
          </div>
        </div>
      );
    }

    if (page === "profile") {
      return (
        <div className="w-full max-w-md">
          <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-6 text-center">

            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-5xl mx-auto mb-5 shadow-[0_0_50px_rgba(59,130,246,0.7)]">
              👤
            </div>

            <h2 className="text-3xl font-bold">
              Михаил
            </h2>

            <p className="text-zinc-400 mt-2">
              Premium пользователь
            </p>

            <div className="mt-6 space-y-3">

              <div className="bg-black/30 rounded-2xl p-4 flex justify-between">
                <span>Подписка</span>
                <span className="text-green-400">
                  Активна
                </span>
              </div>

              <div className="bg-black/30 rounded-2xl p-4 flex justify-between">
                <span>Трафик</span>
                <span>120 GB</span>
              </div>

            </div>

          </div>
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center">

        <div className={`w-40 h-40 rounded-full flex items-center justify-center text-7xl mb-8 transition-all duration-500 ${
          connected
            ? "bg-green-500 shadow-[0_0_90px_rgba(34,197,94,0.8)]"
            : "bg-blue-500 shadow-[0_0_90px_rgba(59,130,246,0.8)]"
        }`}>
          🔒
        </div>

        <h1 className="text-5xl font-bold mb-3 text-center">
          VPN Secure
        </h1>

        <p className="text-zinc-300 text-center mb-8">
          Быстрый и безопасный VPN
        </p>

        <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-6 w-full max-w-sm mb-8">

          <div className="flex justify-between mb-4">
            <span className="text-zinc-400">
              Статус
            </span>

            <span className={`font-bold ${
              connected ? "text-green-400" : "text-red-400"
            }`}>
              {connected ? "Подключен" : "Отключен"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-zinc-400">
              Сервер
            </span>

            <span>
              Германия 🇩🇪
            </span>
          </div>

        </div>

        <button
          onClick={() => setConnected(!connected)}
          className={`px-14 py-5 rounded-full text-2xl font-bold transition-all duration-300 active:scale-95 ${
            connected
              ? "bg-red-500 shadow-[0_0_40px_rgba(239,68,68,0.8)]"
              : "bg-green-500 shadow-[0_0_40px_rgba(34,197,94,0.8)]"
          }`}
        >
          {connected ? "■ Отключить" : "▶ Подключить"}
        </button>

      </div>
    );
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white flex flex-col justify-between">

      {/* Красивый фон */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[-150px] left-[-100px] w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

        <div className="absolute bottom-[-150px] right-[-100px] w-96 h-96 bg-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>

        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-purple-500 rounded-full blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2 animate-ping"></div>

      </div>

      {/* Контент */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-10">
        {renderPage()}
      </div>

      {/* Нижнее меню */}
      <div className="relative z-10 backdrop-blur-xl bg-black/40 border-t border-white/10 p-4">

        <div className="flex justify-around">

          <button
            onClick={() => setPage("home")}
            className={`flex flex-col items-center transition-all ${
              page === "home"
                ? "text-blue-400 scale-110"
                : "text-zinc-300"
            }`}
          >
            <span className="text-3xl">🏠</span>
            <span className="text-sm mt-1">Главная</span>
          </button>

          <button
            onClick={() => setPage("servers")}
            className={`flex flex-col items-center transition-all ${
              page === "servers"
                ? "text-blue-400 scale-110"
                : "text-zinc-300"
            }`}
          >
            <span className="text-3xl">🌍</span>
            <span className="text-sm mt-1">Серверы</span>
          </button>

          <button
            onClick={() => setPage("referrals")}
            className={`flex flex-col items-center transition-all ${
              page === "referrals"
                ? "text-blue-400 scale-110"
                : "text-zinc-300"
            }`}
          >
            <span className="text-3xl">👥</span>
            <span className="text-sm mt-1">Рефералы</span>
          </button>

          <button
            onClick={() => setPage("profile")}
            className={`flex flex-col items-center transition-all ${
              page === "profile"
                ? "text-blue-400 scale-110"
                : "text-zinc-300"
            }`}
          >
            <span className="text-3xl">👤</span>
            <span className="text-sm mt-1">Профиль</span>
          </button>

        </div>

      </div>

    </main>
  );
}