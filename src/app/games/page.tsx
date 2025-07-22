import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";

const games = [
  { id: 1, name: "Tic Tac Toe", description: "Classic 2-player game.", link: "/games/tictactoe" },
  { id: 2, name: "Memory Match", description: "Test your memory skills.", link: "/games/memory" },
  { id: 3, name: "Number Guess", description: "Guess the hidden number.", link: "/games/numberguess" },
];

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#e0eafc] to-[#cfdef3] flex flex-col items-center">
      <Navbar />
      <h1 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Games</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl px-4">
        {games.map((game) => (
          <Card key={game.id} className="p-6 bg-white/60 shadow-lg rounded-xl flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">{game.name}</h2>
            <p className="text-gray-700 mb-4">{game.description}</p>
            <Link href={game.link} className="text-blue-600 hover:underline font-medium">Play</Link>
          </Card>
        ))}
      </div>
    </main>
  );
}
