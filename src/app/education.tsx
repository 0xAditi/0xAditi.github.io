import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";


export default function EducationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#e0eafc] to-[#cfdef3] flex items-center justify-center">
      <Card className="backdrop-blur-lg bg-white/30 border border-white/40 shadow-xl rounded-2xl p-8 max-w-xl w-full">
        <h2 className="text-3xl font-bold mb-2 text-center text-gray-900 drop-shadow-lg">Education & Achievements</h2>
        <Separator className="my-4" />
        <div className="space-y-4">
          <div>
            <Badge className="bg-green-200/60 text-green-900">2023</Badge>
            <p className="font-semibold">12th Science</p>
            <p className="text-gray-700">K.M. Patel Vidyamandir School</p>
            <p className="text-gray-700">Percentage: <span className="font-bold">91%</span></p>
          </div>
          <div>
            <Badge className="bg-blue-200/60 text-blue-900">2021</Badge>
            <p className="font-semibold">10th Class</p>
            <p className="text-gray-700">Sant Shree Sharda Vidyamandir, Vadali, Gujarat</p>
            <p className="text-gray-700">Percentage: <span className="font-bold">92%</span></p>
          </div>
          <div>
            <Badge className="bg-yellow-200/60 text-yellow-900">Primary</Badge>
            <p className="font-semibold">Primary Schooling</p>
            <p className="text-gray-700">Village School</p>
          </div>
          <Separator className="my-4" />
          <div>
            <h3 className="text-xl font-bold mb-2">Competitions & Achievements</h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>District level science quiz (Rural IT Club & TCS) - 5th place</li>
              <li>Advanced to district level in Science Fair</li>
              <li>Participated in sports: Kabaddi, Kho-Kho, 400m race</li>
              <li>Won several sports competitions</li>
            </ul>
          </div>
        </div>
      </Card>
    </main>
  );
}
