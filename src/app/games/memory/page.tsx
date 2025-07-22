"use client";
import React from "react";
import { Navbar } from "@/components/Navbar";

export default function MemoryMatch() {
  const initialCards = shuffle([
    { id: 1, value: "🍎" },
    { id: 2, value: "🍌" },
    { id: 3, value: "🍇" },
    { id: 4, value: "🍓" },
    { id: 5, value: "🍎" },
    { id: 6, value: "🍌" },
    { id: 7, value: "🍇" },
    { id: 8, value: "🍓" },
  ]);
  const [cards, setCards] = React.useState(initialCards);
  const [flipped, setFlipped] = React.useState<number[]>([]);
  const [matched, setMatched] = React.useState<number[]>([]);
  const [moves, setMoves] = React.useState(0);
  const [busy, setBusy] = React.useState(false);

  React.useEffect(() => {
    if (flipped.length === 2) {
      setBusy(true);
      const [first, second] = flipped;
      if (cards[first].value === cards[second].value) {
        setMatched((prev) => [...prev, first, second]);
        setTimeout(() => {
          setFlipped([]);
          setBusy(false);
        }, 800);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setBusy(false);
        }, 1000);
      }
      setMoves((m) => m + 1);
    }
  }, [flipped, cards]);

  function handleFlip(idx: number) {
    if (busy || flipped.includes(idx) || matched.includes(idx) || flipped.length === 2) return;
    setFlipped([...flipped, idx]);
  }

  function handleRestart() {
    setCards(shuffle(initialCards));
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setBusy(false);
  }

  const allMatched = matched.length === cards.length;

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#e0eafc] to-[#cfdef3] flex flex-col items-center">
      <Navbar />
      <h1 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Memory Match</h1>
      <div className="bg-white/60 p-6 rounded-xl shadow-lg flex flex-col items-center">
        <div className="grid grid-cols-4 gap-4 mb-4">
          {cards.map((card, idx) => {
            const isFlipped = flipped.includes(idx) || matched.includes(idx);
            return (
              <button
                key={idx}
                className={`w-16 h-16 text-3xl font-bold rounded-lg shadow border border-gray-300 flex items-center justify-center transition ${isFlipped ? "bg-blue-100" : "bg-white"}`}
                onClick={() => handleFlip(idx)}
                disabled={isFlipped || busy || flipped.length === 2}
              >
                {isFlipped ? card.value : "❓"}
              </button>
            );
          })}
        </div>
        <div className="mb-2 text-lg font-medium text-gray-800 min-h-[1.5em]">
          {allMatched ? `You won in ${moves} moves!` : `Moves: ${moves}`}
        </div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
          onClick={handleRestart}
        >
          Restart
        </button>
      </div>
    </main>
  );
}

function shuffle<T>(array: T[]): T[] {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
