import Image from "next/image";


import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#e0eafc] to-[#cfdef3] flex flex-col items-center justify-center">
      <Navbar />
      <Card className="backdrop-blur-lg bg-white/30 border border-white/40 shadow-xl rounded-2xl p-8 max-w-xl w-full mt-24">
        <h1 className="text-4xl font-bold mb-2 text-center text-gray-900 drop-shadow-lg">Aditi Shaileshbhai Patel</h1>
        <p className="text-lg text-center text-gray-700 mb-4">Ahmedabad, Student, 17 years old</p>
        <Separator className="my-4" />
        <div className="text-center text-gray-800 text-base leading-relaxed">
          <p>
            Welcome to my portfolio! I am a passionate student from Ahmedabad, interested in science, technology, and sports. I love participating in competitions and exploring new opportunities to learn and grow. Feel free to explore my achievements, resume, and contact me for collaboration or queries.
          </p>
        </div>
      </Card>
    </main>
    
  );
}
