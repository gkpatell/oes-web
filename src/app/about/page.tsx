import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { BarChart, Users, Globe, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">
        About O&apos;Connor Building of Engineering and Sciences
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-4">
            The Advanced Research Center is dedicated to pushing the boundaries
            of scientific knowledge and technological innovation. Our mission is
            to conduct cutting-edge research that addresses global challenges
            and drives positive change in society.
          </p>
          <p>
            We foster a collaborative environment where brilliant minds from
            diverse disciplines come together to explore, discover, and create
            solutions that shape the future.
          </p>
        </div>
        <div className="relative aspect-video">
          <Image
            src="/oes-about-ralph.jpg?height=600&width=800"
            alt="Advanced Research Center Building"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <Tabs defaultValue="history" className="mb-12">
        <TabsList>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="leadership">Leadership</TabsTrigger>
        </TabsList>
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Our History</CardTitle>
              <CardDescription>
                From humble beginnings to a world-class research institution
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li>
                  <strong>1948:</strong> Founded as a new science-engineering building as Abercrombie Engineering Laboratory
                </li>
                <li>
                  <strong>1961:</strong> Abercrombie Lab becomes home to the first Rice Computer - the R1, 54-bit tagged digital computer.
                </li>
                <li>
                  <strong>1964:</strong> Biomedical Lab of Willaim Akers makes its home in Abercrombie Lab to develop the first artificial heart.
                </li>
                <li>
                  <strong>2015:</strong> Launched our first international
                  satellite research lab in collaboration with global partners.
                </li>
                <li>
                  <strong>2020:</strong> Celebrated 35 years of groundbreaking
                  research with over 1,000 published studies and 50 patents.
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="leadership">
          <Card>
            <CardHeader>
              <CardTitle>Our Leadership</CardTitle>
              <CardDescription>
                Meet the team guiding our research initiatives
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Brad Thacker",
                    role: "Director of Operations",
                    image:
                      "https://utfs.io/f/aLqPSH9rfhqDaIQnmg9rfhqD02FQVB16zxmJKIoAnEHvp954",
                  },
                  {
                    name: "Dan McGarry III",
                    role: "Assistant Director, Construction, Maintenance & Events",
                    image:
                      "https://utfs.io/f/aLqPSH9rfhqDaIQnmg9rfhqD02FQVB16zxmJKIoAnEHvp954",
                  },
                  {
                    name: "Calvin Rawls",
                    role: "Facilities Management Coordinator",
                    image:
                      "https://utfs.io/f/aLqPSH9rfhqDaIQnmg9rfhqD02FQVB16zxmJKIoAnEHvp954",
                  },
                  {
                    name: "Robert Anderson",
                    role: "Shipping & Receiving Coordinator",
                    image:
                      "https://utfs.io/f/aLqPSH9rfhqDaIQnmg9rfhqD02FQVB16zxmJKIoAnEHvp954",
                  },
                ].map((leader, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={leader.image} alt={leader.name} />
                      <AvatarFallback>
                        {leader.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{leader.name}</h3>
                      <p className="text-sm text-gray-500">{leader.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Acknowledgements</CardTitle>
          <CardDescription>
            Recognizing the team behind this WebApp
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Gautam Patel",
                role: "Product Owner & Development Lead",
                image:
                  "https://utfs.io/f/aLqPSH9rfhqDaIQnmg9rfhqD02FQVB16zxmJKIoAnEHvp954",
                title: "Master of Engineering Management & Leadership Rice University",
              },
              {
                name: "Swanand Khonde",
                role: "Lead Developer",
                image:
                  "https://utfs.io/f/aLqPSH9rfhqDaIQnmg9rfhqD02FQVB16zxmJKIoAnEHvp954",
                title: "Master of Computer Science - Rice University",
              },
            ].map((person, index) => (
              <div key={index} className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={person.image} alt={person.name} />
                  <AvatarFallback>
                    {person.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{person.name}</p>
                  <p className="text-sm text-gray-500">{person.role}</p>
                  <p className="text-sm text-gray-500">{person.title}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
