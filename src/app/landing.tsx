import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#e0eafc] to-[#cfdef3] flex flex-col items-center justify-center">
      <Card className="backdrop-blur-lg bg-white/30 border border-white/40 shadow-xl rounded-2xl p-8 max-w-xl w-full">
        <NavigationMenu className="mb-6" />
        <h1 className="text-4xl font-bold mb-2 text-center text-gray-900 drop-shadow-lg">Aditi&apos;s Portfolio</h1>
        <p className="text-lg text-center text-gray-700 mb-4">Welcome to my unique glassy portfolio built with Next.js & shadcn/ui!</p>
        <Separator className="my-4" />
        <div className="flex flex-col gap-4">
          <Link href="/education"><Button variant="outline" className="backdrop-blur bg-white/40">Education</Button></Link>
          <Link href="/contact"><Button variant="outline" className="backdrop-blur bg-white/40">Contact Me</Button></Link>
          <Link href="/resume"><Button variant="outline" className="backdrop-blur bg-white/40">Download Resume</Button></Link>
        </div>
      </Card>
    </main>
  );
}
