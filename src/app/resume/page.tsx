import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog } from "@/components/ui/dialog";
import { Navbar } from "@/components/Navbar";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#e0eafc] to-[#cfdef3] flex flex-col items-center justify-center">
      <Navbar />
      <Card className="backdrop-blur-lg bg-white/30 border border-white/40 shadow-xl rounded-2xl p-8 max-w-xl w-full mt-24">
        <h2 className="text-3xl font-bold mb-2 text-center text-gray-900 drop-shadow-lg">Aditi Shaileshbhai Patel</h2>
        <Separator className="my-4" />
        <div className="mb-4 text-center">
          <Badge className="bg-purple-200/60 text-purple-900">Student</Badge>
        </div>
        <div className="space-y-2 text-gray-700 mb-4">
          <p><span className="font-bold">12th Science (2023):</span> K.M. Patel Vidyamandir School, 91%</p>
          <p><span className="font-bold">10th Class (2021):</span> Sant Shree Sharda Vidyamandir, Vadali, Gujarat, 92%</p>
          <p><span className="font-bold">Primary Schooling:</span> Village School</p>
        </div>
        <Separator className="my-4" />
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Achievements</h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>District level science quiz (Rural IT Club & TCS) - 5th place</li>
            <li>Advanced to district level in Science Fair</li>
            <li>Participated in sports: Kabaddi, Kho-Kho, 400m race</li>
            <li>Won several sports competitions</li>
          </ul>
        </div>
        <Dialog>
          <Button className="w-full backdrop-blur bg-white/40" asChild>
            <a href="/Aditi_Resume.pdf" download>Download My Resume (PDF)</a>
          </Button>
        </Dialog>
      </Card>
    </main>
  );
}
