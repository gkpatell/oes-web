import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Car, Train, Plane } from "lucide-react";

export default function MapsAndDirectionsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Maps and Directions</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Location Map</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d900.5624703639355!2d-95.39948796416934!3d29.720744101567245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c1da790436e3%3A0xcc1f7a2e23e1b00f!2sRalph%20S.%20O%E2%80%99Connor%20Building%20for%20Engineering%20and%20Science!5e0!3m2!1sen!2sus!4v1733962829278!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-4 mb-4">
              <MapPin className="w-5 h-5 mt-1" />
              <div>
                <p className="font-semibold">
                  Ralph S. O&apos;Connor Building of Engineering and Sciences
                </p>
                <p>6100 Main St.</p>
                <p>Houston, TX 77005-1827</p>
              </div>
            </div>
            <p className="mb-4">
              For general inquiries, please call (832) 275-0895 or email
              oesmanagment@rice.edu
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="car" className="mt-8">
        <TabsList>
          <TabsTrigger value="car">By Car</TabsTrigger>
          <TabsTrigger value="publictransport">Public Transport</TabsTrigger>
          <TabsTrigger value="airport">From Airport</TabsTrigger>
        </TabsList>
        <TabsContent value="car">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="w-5 h-5" />
                Driving Directions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2">
                <li>Take Interstate 80 towards Berkeley.</li>
                <li>Exit at University Avenue.</li>
                <li>Head east on University Avenue for about 1 mile.</li>
                <li>Turn right on Oxford Street.</li>
                <li>
                  The Advanced Research Center will be on your left after two
                  blocks.
                </li>
              </ol>
              <p className="mt-4">
                Parking is available in the nearby public parking structures.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="publictransport">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Train className="w-5 h-5" />
                Public Transportation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">
                By BART (Bay Area Rapid Transit):
              </h3>
              <ol className="list-decimal list-inside space-y-2 mb-4">
                <li>Take BART to the Downtown Berkeley station.</li>
                <li>Exit the station and head west on Center Street.</li>
                <li>Turn right on Oxford Street.</li>
                <li>
                  Walk two blocks north. The Advanced Research Center will be on
                  your left.
                </li>
              </ol>
              <h3 className="font-semibold mb-2">By Bus:</h3>
              <p>
                Several AC Transit bus lines stop near the Advanced Research
                Center. Use the AC Transit trip planner for specific routes.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="airport">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plane className="w-5 h-5" />
                From the Airport
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">
                From Oakland International Airport (OAK):
              </h3>
              <ol className="list-decimal list-inside space-y-2 mb-4">
                <li>Take the BART connector to the Coliseum BART station.</li>
                <li>
                  Board a Richmond-bound train and exit at the Downtown Berkeley
                  station.
                </li>
                <li>Follow the directions from the BART station above.</li>
              </ol>
              <h3 className="font-semibold mb-2">
                From San Francisco International Airport (SFO):
              </h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Take the AirTrain to the BART station within SFO.</li>
                <li>
                  Board a Richmond-bound train and exit at the Downtown Berkeley
                  station.
                </li>
                <li>Follow the directions from the BART station above.</li>
              </ol>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
