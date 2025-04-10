import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  PhoneCall,
  AlertTriangle,
  AmbulanceIcon as FirstAid,
  FlameIcon as Fire,
  TornadoIcon as Hurricane,
} from "lucide-react";

export default function EmergencyInfoPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Emergency Information</h1>

      <Alert variant="destructive" className="mb-8">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Emergency Contact</AlertTitle>
        <AlertDescription>
          For immediate emergency assistance on campus, call (555) 123-4567 or
          911.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PhoneCall className="h-5 w-5" />
              Emergency Contacts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Campus Police: (555) 123-4567</li>
              <li>Fire Department: 911</li>
              <li>Medical Emergency: 911</li>
              <li>Poison Control: (800) 222-1222</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FirstAid className="h-5 w-5" />
              First Aid Locations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Main Building Lobby</li>
              <li>Library, 1st Floor</li>
              <li>Student Center</li>
              <li>All Research Labs</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4">Emergency Procedures</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="fire">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <Fire className="h-5 w-5" />
              Fire Emergency
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>Activate the nearest fire alarm</li>
              <li>Evacuate the building immediately</li>
              <li>Do not use elevators</li>
              <li>Call 911 or Campus Police at (555) 123-4567</li>
              <li>
                Do not re-enter the building until authorized by emergency
                personnel
              </li>
            </ol>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="medical">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <FirstAid className="h-5 w-5" />
              Medical Emergency
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>Call 911 or Campus Police at (555) 123-4567</li>
              <li>Provide your location and the nature of the emergency</li>
              <li>Stay with the person until help arrives</li>
              <li>
                Do not move the person unless they are in immediate danger
              </li>
              <li>If trained, provide first aid or CPR as needed</li>
            </ol>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="severe-weather">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <Hurricane className="h-5 w-5" />
              Severe Weather
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>Move to a safe location indoors</li>
              <li>Stay away from windows and exterior doors</li>
              <li>Monitor official campus communications for updates</li>
              <li>Follow instructions from campus authorities</li>
              <li>Do not leave the safe area until the all-clear is given</li>
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Emergency Preparedness</CardTitle>
          <CardDescription>
            Stay prepared for potential emergencies
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Familiarize yourself with building evacuation routes</li>
            <li>Keep emergency numbers saved in your phone</li>
            <li>Sign up for campus emergency alerts</li>
            <li>Know the locations of fire extinguishers and AEDs</li>
            <li>Attend campus safety training sessions when offered</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
