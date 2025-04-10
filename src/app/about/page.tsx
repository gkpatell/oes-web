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
          <TabsTrigger value="departments">Departments</TabsTrigger>
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
                  <strong>1985:</strong> Founded as a small research unit within
                  the university.
                </li>
                <li>
                  <strong>1995:</strong> Expanded to become an independent
                  research center with a focus on interdisciplinary studies.
                </li>
                <li>
                  <strong>2005:</strong> Opened our current state-of-the-art
                  facility, tripling our research capacity.
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
                    name: "Emily Chen",
                    role: "Director",
                    image:
                      "https://utfs.io/f/aLqPSH9rfhqDaIQnmg9rfhqD02FQVB16zxmJKIoAnEHvp954",
                  },
                  {
                    name: "Michael Johnson",
                    role: "Deputy Director",
                    image:
                      "https://utfs.io/f/aLqPSH9rfhqDaIQnmg9rfhqD02FQVB16zxmJKIoAnEHvp954",
                  },
                  {
                    name: "Sarah Thompson",
                    role: "Head of Research",
                    image:
                      "https://utfs.io/f/aLqPSH9rfhqDaIQnmg9rfhqD02FQVB16zxmJKIoAnEHvp954",
                  },
                  {
                    name: "David Lee",
                    role: "Chief Innovation Officer",
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
        <TabsContent value="departments">
          <Card>
            <CardHeader>
              <CardTitle>Our Departments</CardTitle>
              <CardDescription>
                Explore our diverse research areas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Quantum Computing and Information Sciences</li>
                <li>Artificial Intelligence and Machine Learning</li>
                <li>Biotechnology and Genomics</li>
                <li>Climate Science and Sustainable Technologies</li>
                <li>Advanced Materials and Nanotechnology</li>
                <li>Neuroscience and Cognitive Studies</li>
                <li>Data Science and Analytics</li>
                <li>Robotics and Automation</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="h-5 w-5" />
              Research Output
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">1,000+</p>
            <p className="text-sm text-gray-500">Published studies</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Research Team
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">250+</p>
            <p className="text-sm text-gray-500">Researchers and staff</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Global Partnerships
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">50+</p>
            <p className="text-sm text-gray-500">
              International collaborations
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Recognition
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">30+</p>
            <p className="text-sm text-gray-500">Major awards received</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Join Our Team</CardTitle>
          <CardDescription>
            Explore career opportunities at the O&apos;Connor Building of
            Engineering and Sciences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            We&apos;re always looking for talented individuals to join our team
            of researchers, engineers, and support staff. If you&apos;re
            passionate about pushing the boundaries of science and technology,
            we&apos;d love to hear from you.
          </p>
          <Link href="https://jobs.rice.edu/">
            <Button>View Open Positions</Button>
          </Link>
        </CardContent>
      </Card>
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
                title: "Master of Engineering Management & Leadership - Rice University",
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
