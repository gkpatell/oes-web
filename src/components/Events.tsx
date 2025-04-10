import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";

interface Event {
  date: {
    day: string;
    month: string;
  };
  category: string;
  title: string;
  time: string;
  location: string;
  image: string;
  link: string;
}

const events: Event[] = [
  {
    date: { month: "MAY", day: "15" },
    category: "LECTURE",
    title: "The Future of Quantum Computing: A Panel Discussion",
    time: "3:00 PM - 5:00 PM",
    location: "O'Connor Building, Room 101",
    image: "/event1.webp",
    link: "#",
  },
  {
    date: { month: "MAY", day: "18" },
    category: "WORKSHOP",
    title: "Hands-on Materials Science Workshop",
    time: "10:00 AM - 2:00 PM",
    location: "O'Connor Building, Laboratory 205",
    image: "/event2.webp",
    link: "#",
  },
  {
    date: { month: "MAY", day: "22" },
    category: "EXHIBITION",
    title: "Student Research Showcase",
    time: "1:00 PM - 5:00 PM",
    location: "O'Connor Building, Atrium",
    image: "/event3.png",
    link: "#",
  },
  {
    date: { month: "MAY", day: "25" },
    category: "CONFERENCE",
    title: "Urban Innovation Symposium",
    time: "9:00 AM - 6:00 PM",
    location: "O'Connor Building, Conference Center",
    image: "/event4.jpeg",
    link: "#",
  },
];

export function Events() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Upcoming Events</h2>
          <p className="text-xl text-gray-600">
            Join us for lectures, workshops, exhibitions, and conferences at the O'Connor Building. 
            These events bring together researchers, students, and industry leaders to share knowledge 
            and foster collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {events.map((event, index) => (
            <Link href={event.link} key={index}>
              <Card className="overflow-hidden border h-full">
                <div className="grid grid-cols-1 md:grid-cols-3 h-full">
                  <div className="relative aspect-[4/3] md:aspect-auto md:col-span-1">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute left-4 top-4 bg-black text-white p-2 text-center min-w-[60px]">
                      <div className="text-sm font-bold">{event.date.month}</div>
                      <div className="text-xl font-bold">{event.date.day}</div>
                    </div>
                  </div>
                  <div className="md:col-span-2 p-6 flex flex-col">
                    <Badge
                      variant="outline"
                      className="mb-3 text-red-600 border-red-600 w-fit"
                    >
                      {event.category}
                    </Badge>
                    <h3 className="font-bold text-xl mb-3 line-clamp-2">{event.title}</h3>
                    <div className="space-y-2 text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <Button variant="outline" className="w-full">
                        Register Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button variant="default" size="lg" className="bg-black text-white hover:bg-gray-900">
            <Calendar className="mr-2 h-5 w-5" />
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
}
