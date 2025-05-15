"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Laptop,
  Coffee,
  PresentationIcon,
  BookOpen,
  ArrowRight,
  Users,
  Microscope,
  Building2
} from "lucide-react";
import Image from "next/image";
import { BookingModal } from "@/components/BookingModal";
import { useState } from "react";
import Link from "next/link";

export default function SpacesAndFacilitiesPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <Image
          src="/oes-brick-mesh.jpeg"
          alt="O'Connor Building Architecture"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
          <div className="container mx-auto h-full flex flex-col justify-end pb-16 px-4">
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6">
              Spaces & Facilities
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8">
              State-of-the-art environments designed for breakthrough research and innovation
            </p>
            <Button 
              variant="outline"
              onClick={() => setIsBookingModalOpen(true)}
              className="w-fit bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-colors"
            >
              Book a Space
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light mb-8">Overview</h2>
              <p className="text-lg text-muted-foreground mb-8">
                The O&apos;Connor Building offers cutting-edge spaces that foster collaboration, 
                innovation, and groundbreaking research. Our facilities are designed to support 
                the next generation of scientific discovery and engineering excellence.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="mb-4">
                    <Users className="h-6 w-6 text-primary mb-2" />
                    <h3 className="text-lg font-medium">Collaborative Spaces</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Open areas designed for interdisciplinary interaction
                  </p>
                </div>
                <div>
                  <div className="mb-4">
                    <Microscope className="h-6 w-6 text-primary mb-2" />
                    <h3 className="text-lg font-medium">Research Labs</h3>
                  </div>
                  <p className="text-muted-foreground">
                    State-of-the-art facilities for advanced research
                  </p>
                </div>
                <div>
                  <div className="mb-4">
                    <Building2 className="h-6 w-6 text-primary mb-2" />
                    <h3 className="text-lg font-medium">Event Venues</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Flexible spaces for conferences and seminars
                  </p>
                </div>
                <div>
                  <div className="mb-4">
                    <Coffee className="h-6 w-6 text-primary mb-2" />
                    <h3 className="text-lg font-medium">Social Areas</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Comfortable spaces for informal meetings
                  </p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/oes-conference-out.jpg"
                alt="Conference Room"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-stone">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-12">Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/spaces-and-facilities/conference-rooms" className="group">
              <div className="architectural-image aspect-[4/3] mb-6">
                <Image
                  src="/oes-510-grps.jpg"
                  alt="Conference Rooms"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl mb-2">Conference Rooms</h3>
              <p className="text-muted-foreground">High-tech spaces equipped with advanced presentation and conferencing capabilities.</p>
            </Link>
            <Link href="/spaces-and-facilities/study-spaces" className="group">
              <div className="architectural-image aspect-[4/3] mb-6">
                <Image
                  src="/lab-desk.jpg"
                  alt="Study Spaces"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl mb-2">Study Spaces</h3>
              <p className="text-muted-foreground">Quiet areas designed for focused individual work and collaborative study sessions.</p>
            </Link>
            <Link href="/spaces-and-facilities/event-spaces" className="group">
              <div className="architectural-image aspect-[4/3] mb-6">
                <Image
                  src="/oes-opening-ceremony.jpg"
                  alt="Event Spaces"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl mb-2">Event Spaces</h3>
              <p className="text-muted-foreground">Versatile venues perfect for conferences, seminars, and academic gatherings.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/oes-lab-space.jpg"
                alt="Research Facilities"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-light mb-8">Research Facilities</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <Microscope className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Advanced Laboratories</h3>
                    <p className="text-muted-foreground">
                      State-of-the-art research spaces equipped with specialized instruments and safety features.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <Laptop className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Computing Resources</h3>
                    <p className="text-muted-foreground">
                      High-performance computing facilities and specialized software for research needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Collaborative Areas</h3>
                    <p className="text-muted-foreground">
                      Open spaces designed to encourage interdisciplinary interaction and innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}
