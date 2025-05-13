import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PhoneCall } from "lucide-react";

export default function EmergencyInfoPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Emergency Information</h1>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PhoneCall className="h-5 w-5" />
            Emergency Contacts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>RUPD: (713) 348-6000</li>
            <li>Building Director (Brad): (713) 348-2673</li>
            <li>REMS: (713) 348-6000</li>
            <li>Poison Control: (1800) 222-1222</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
