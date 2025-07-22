import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#e0eafc] to-[#cfdef3] flex items-center justify-center">
      <Card className="backdrop-blur-lg bg-white/30 border border-white/40 shadow-xl rounded-2xl p-8 max-w-xl w-full">
        <h2 className="text-3xl font-bold mb-2 text-center text-gray-900 drop-shadow-lg">Contact Me</h2>
        <Separator className="my-4" />
        <form className="space-y-4">
          <Input type="text" placeholder="Your Name" required className="backdrop-blur bg-white/40" />
          <Input type="email" placeholder="Your Email" required className="backdrop-blur bg-white/40" />
          <Textarea placeholder="Your Message" required className="backdrop-blur bg-white/40" />
          <Button type="submit" className="w-full backdrop-blur bg-white/40">Send Message</Button>
        </form>
        <Separator className="my-4" />
        <div className="text-center">
          <a href="https://github.com/0xAditi" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">My GitHub: github.com/0xAditi</a>
        </div>
      </Card>
    </main>
  );
}
