import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const researchAreas = [
  {
    title: "Advanced Materials",
    image: "/facility8.jpg?height=600&width=800",
    description: "Developing next-generation materials for a sustainable future",
  },
  {
    title: "Quantum Science and Computing",
    image: "/facility1.jpg?height=600&width=800",
    description: "Pioneering breakthroughs in quantum information science",
  },
  {
    title: "Urban Research and Innovation",
    image: "/facility9.jpg?height=600&width=800",
    description: "Addressing urban challenges through innovative solutions",
  },
  {
    title: "Energy Transition",
    image: "/facility10.jpg?height=600&width=800",
    description: "Advancing sustainable energy technologies and systems",
  },
];

export function ResearchAreas() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">A program for collaboration</h2>
          <p className="text-xl text-gray-600">
            To extend the campus into the building, a five-story central atrium creates a hub of activity, 
            where seminar rooms, break areas, and informal gathering spaces are grouped together. 
            The design team developed a building program that fosters collaboration across research areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {researchAreas.map((area, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative aspect-[16/9]">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 p-6 bg-black/70 text-white w-full">
                  <h3 className="text-2xl font-bold mb-2">{area.title}</h3>
                  <p className="text-gray-200 mb-4">{area.description}</p>
                  <Button variant="secondary" className="bg-white text-black hover:bg-gray-100">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Promoting interaction</h3>
              <p className="text-gray-600 mb-6">
                The stair tower and the central hub connect a series of stepped double-height collaboration areas. 
                Intimate conference rooms and break areas with warm materials providing ample opportunities for 
                informal learning and connection.
              </p>
              <p className="text-gray-600">
                Circulation through and around the building is encouraged, reinforcing the campus's well 
                established pedestrian arcade network. Connections are made from the historic arcade's north 
                side to the colleges and from the Engineering Quad to the undergraduate residences on the east.
              </p>
            </div>
            <div className="relative aspect-video">
              <Image
                src="/facility3.jpg?height=600&width=800"
                alt="Collaboration Space"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
