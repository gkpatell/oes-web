import { Gallery } from "./Gallery";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Lightbulb, Users, Award } from "lucide-react";

export function BuildingShowcase() {
  return (
    <section id="buildingShowcase" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">History meets high-performance</h2>
          <p className="text-xl text-gray-600">
            At 250,000 square feet, the Ralph S. O'Connor Building for Engineering and Science 
            is the largest research facility in Rice University's historic core campus. 
            Located on the site of the former Abercrombie Engineering Lab, the O'Connor Building 
            provides users with technology-rich facilities that embody the University's goal to 
            stay at the forefront of scientific discovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3 rounded-full">
                <Building className="h-6 w-6 text-gray-800" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">State-of-the-art laboratories</h3>
                <p className="text-gray-600">
                  The new high-performance facility includes state-of-the-art laboratories, 
                  classrooms, offices, a cafe, and interactive gathering spaces throughout.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-gray-800" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Collaborative spaces</h3>
                <p className="text-gray-600">
                  A flexible, multi-purpose event space with an outdoor terrace sits at the 
                  top level with views of the campus and the Houston skyline.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3 rounded-full">
                <Lightbulb className="h-6 w-6 text-gray-800" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Innovation hub</h3>
                <p className="text-gray-600">
                  The building fosters collaboration in four research areas: advanced materials, 
                  quantum science and computing, urban research and innovation, and the energy transition.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3 rounded-full">
                <Award className="h-6 w-6 text-gray-800" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Award-winning design</h3>
                <p className="text-gray-600">
                  The building has received multiple awards including Design Excellence Awards, 
                  AIA California Design Awards, and Best of Design Awards.
                </p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square">
            <Gallery
              images={[
                {
                  src: "/facility7.jpg?height=600&width=800",
                  alt: "O'Connor Building Exterior",
                  caption: "Modern architectural design meets functionality",
                },
                {
                  src: "/facility2.jpg?height=600&width=800",
                  alt: "Main Laboratory",
                  caption: "Advanced research laboratories",
                },
                {
                  src: "/facility3.jpg?height=600&width=800",
                  alt: "Collaboration Space",
                  caption: "Open spaces for collaboration",
                },
                {
                  src: "/facility4.jpg?height=600&width=800",
                  alt: "Conference Room",
                  caption: "State-of-the-art conference facilities",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
