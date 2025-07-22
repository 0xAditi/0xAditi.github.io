"use client";
import React from "react";
import { Navbar } from "@/components/Navbar";

export default function NumberGuess() {
  const [target, setTarget] = React.useState(() => Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [attempts, setAttempts] = React.useState(0);
  const [gameOver, setGameOver] = React.useState(false);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setGuess(e.target.value);
  }

  function handleGuess() {
    const num = parseInt(guess);
    if (isNaN(num) || num < 1 || num > 100) {
      setMessage("Please enter a number between 1 and 100.");
      return;
    }
    setAttempts(attempts + 1);
    if (num === target) {
      setMessage(`Congratulations! You guessed the number in ${attempts + 1} attempts.`);
      setGameOver(true);
    } else if (num < target) {
      setMessage("Too low! Try again.");
    } else {
      setMessage("Too high! Try again.");
    }
  }

  function handleRestart() {
    setTarget(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setMessage("");
    setAttempts(0);
    setGameOver(false);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#e0eafc] to-[#cfdef3] flex flex-col items-center">
      <Navbar />
      <h1 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Number Guess</h1>
      <div className="bg-white/60 p-6 rounded-xl shadow-lg flex flex-col items-center">
        <p className="mb-4 text-gray-800">Guess a number between 1 and 100!</p>
        <div className="flex gap-2 mb-4">
          <input
            type="number"
            min={1}
            max={100}
            value={guess}
            onChange={handleInput}
            className="w-24 px-2 py-1 border rounded-lg text-center"
            disabled={gameOver}
          />
          <button
            className="px-4 py-1 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
            onClick={handleGuess}
            disabled={gameOver}
          >
            Guess
          </button>
        </div>
        <div className="mb-2 text-lg font-medium text-gray-800 min-h-[1.5em]">{message}</div>
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
