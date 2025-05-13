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
                <p>Campanile Rd, Houston, TX 77005-1827</p>
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
                <li>From Downtown Houston, take I-45 South (Gulf Freeway) toward Galveston.</li>
                <li>Use exit 47B toward University Blvd East and merge onto University Blvd.</li>
                <li>Continue on University Blvd for about 0.7 miles, then turn right onto Main St.</li>
                <li>Continue on Main St for 0.5 miles; the Ralph S. O’Connor Building will be on your right at 6100 Main St.</li>
              </ol>
              <p className="mt-4">
                Visitor parking is available in the Central Campus Parking Garage located on Rice Blvd.
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
              <h3 className="font-semibold mb-2">By METRORail (Red Line):</h3>
              <ol className="list-decimal list-inside space-y-2 mb-4">
                <li>Board the METRORail Red Line toward Fannin South.</li>
                <li>Exit at the Rice University station.</li>
                <li>Walk east on University Blvd to Main St.</li>
                <li>Turn right on Main St; the building will be on your right.</li>
              </ol>
              <h3 className="font-semibold mb-2">By Bus:</h3>
              <p>
                METRO Bus Route 41 serves University Blvd. Disembark at University Blvd & Main St and walk to 6100 Main St.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="airport">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plane className="w-5 h-5" />
                From Airports
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-2">From George Bush Intercontinental Airport (IAH):</h3>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Exit IAH via John F. Kennedy Blvd and merge onto I-69/US-59 South toward downtown Houston.</li>
                    <li>Continue on I-69/US-59 S for about 12 miles.</li>
                    <li>Take exit 136B toward Greenbriar Dr / Main St.</li>
                    <li>Turn left onto Greenbriar Dr, then right onto Main St.</li>
                    <li>The Ralph S. O’Connor Building will be on your right at 6100 Main St.</li>
                  </ol>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">From William P. Hobby Airport (HOU):</h3>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Exit HOU onto Airport Blvd heading west.</li>
                    <li>Continue onto Telephone Rd for approximately 1.5 miles.</li>
                    <li>Turn right onto Martin Luther King Blvd and follow for 2 miles.</li>
                    <li>Turn left onto Main St; the building will be on your left at 6100 Main St.</li>
                  </ol>
                </div>
              </div>
              <p className="mt-4">Travel time is approximately 30–45 minutes depending on traffic.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
