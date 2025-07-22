"use client";
import React from "react";
import { Navbar } from "@/components/Navbar";

export default function TicTacToe() {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = React.useState(initialBoard);
  const [xIsNext, setXIsNext] = React.useState(true);
  const winner = calculateWinner(board);

  function handleClick(index: number) {
    if (board[index] || winner) return;
    const newBoard = board.slice();
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  }

  function resetGame() {
    setBoard(initialBoard);
    setXIsNext(true);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#e0eafc] to-[#cfdef3] flex flex-col items-center">
      <Navbar />
      <h1 className="text-2xl font-bold mt-12 mb-6 text-gray-900">Tic Tac Toe</h1>
      <div className="bg-white/60 p-6 rounded-xl shadow-lg flex flex-col items-center">
        <div className="grid grid-cols-3 gap-2 mb-4">
          {board.map((cell, idx) => (
            <button
              key={idx}
              className="w-16 h-16 text-2xl font-bold bg-white rounded-lg shadow border border-gray-300 flex items-center justify-center hover:bg-blue-100 transition"
              onClick={() => handleClick(idx)}
              disabled={!!cell || !!winner}
            >
              {cell}
            </button>
          ))}
        </div>
        <div className="mb-2 text-lg font-medium text-gray-800">
          {winner
            ? `Winner: ${winner}`
            : board.every(Boolean)
            ? "It's a draw!"
            : `Next player: ${xIsNext ? "X" : "O"}`}
        </div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
          onClick={resetGame}
        >
          Restart
        </button>
      </div>
    </main>
  );
}

function calculateWinner(squares: (string | null)[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const line of lines) {
    const [a, b, c] = line;
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }
  return null;
}
