"use client";

import { useAtom } from "jotai";
import { currentPageAtom } from "@/store";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [currentPage] = useAtom(currentPageAtom);

  const images = [
    "/oes-frontview-eve.jpeg",
    "/oes-abercrombie-carve.jpg",
    "/oes-crux-art.jpeg",
    "/oes-collab-floor0.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Slideshow Section */}
      <section className="relative h-[80vh] overflow-hidden">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-1000 transform ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
          >
            <Image
              src={src}
              alt={`Slideshow image ${index + 1}`}
              fill
              className="object-cover"
            />
            {/* Grey Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
            {/* Text Overlay */}
            <div
              className="absolute bottom-24 left-8 text-left text-white p-4 rounded-lg"
            >
              {index === 0 && <h2 className="text-6xl font-light">Welcome to the O'Connor Building</h2>}
              {index === 1 && <h2 className="text-6xl font-light">A Hub of Innovation and Research</h2>}
              {index === 2 && <h2 className="text-6xl font-light">State-of-the-Art Facilities</h2>}
              {index === 3 && <h2 className="text-6xl font-light">Designed for Collaboration</h2>}
              <p className="mt-2 text-lg">Explore the cutting-edge spaces and vibrant community.</p>
            </div>
          </div>
        ))}

        {/* Indicator Dots */}
        <div className="absolute bottom-20 left-12 flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-8 rounded-full transition-colors duration-300 ${
                index === currentIndex ? "bg-red-500" : "bg-white"
              }`}
            />
          ))}
        </div>
      </section>

      <main>
        {/* Featured Spaces */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-light mb-12">Featured Spaces</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/research-portal" className="group">
                <div className="architectural-image aspect-[4/3]">
                  <Image
                    src="/oes-ece-place.jpeg"
                    alt="State-of-the-art laboratory"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl mb-2">Research Laboratories</h3>
                  <p className="text-muted-foreground">Advanced facilities for groundbreaking research in engineering and science.</p>
                </div>
              </Link>
              <Link href="/cafe" className="group">
                <div className="architectural-image aspect-[4/3]">
                  <Image
                    src="/oes-floor1-sitting.JPG"
                    alt="Collaboration space"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl mb-2">Collaboration Spaces</h3>
                  <p className="text-muted-foreground">Open areas designed to encourage interdisciplinary interaction and innovation.</p>
                </div>
              </Link>
              <Link href="/spaces-and-facilities" className="group">
                <div className="architectural-image aspect-[4/3]">
                  <Image
                    src="/oes-terrace-sunset.jpeg"
                    alt="Event space"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl mb-2">Event Spaces</h3>
                  <p className="text-muted-foreground">Versatile venues for conferences, seminars, and academic gatherings.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Research Focus */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-light mb-12">Research Focus</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-light mb-4">Advanced Materials</h3>
                <p className="text-muted-foreground mb-6">
                  Developing next-generation materials for sustainable technology and engineering applications.
                </p>
                <Link 
                  href="/research-portal"
                  className="inline-flex items-center gap-2 nav-link"
                >
                  Explore RAMI <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-4">Civil & Environmental Engineering</h3>
                <p className="text-muted-foreground mb-6">
                  Pushing the boundaries of civil research for cleaner & greener environment.
                </p>
                <Link 
                  href="/research-portal"
                  className="inline-flex items-center gap-2 nav-link"
                >
                  Explore CEE <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-4">Chemical & Biomolecular Technology</h3>
                <p className="text-muted-foreground mb-6">
                  Breaking grounds in soil studies and environmental chemical phenomena.
                </p>
                <Link 
                  href="/research-portal"
                  className="inline-flex items-center gap-2 nav-link"
                >
                  Explore ChBE <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-4">Water Resources</h3>
                <p className="text-muted-foreground mb-6">
                  Leading research in water recycling and sustainable future.
                </p>
                <Link 
                  href="/research-portal"
                  className="inline-flex items-center gap-2 nav-link"
                >
                  Explore RWI <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Building Highlights */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-light mb-6">Building Highlights</h2>
              <p className="text-lg mb-6">
                Discover the impressive features of the O'Connor Building, spanning over an area of 250,000 square feet, designed with cutting-edge architecture, it offers state-of-the-art facilities and innovative spaces for research and collaboration.
              </p>
            </div>
            <div className="flex-1 relative h-100 md:h-80">
              <Image
                src="/oes-central-attrium.jpg"
                alt="Central Atrium"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Dandelion Cafe */}
        <section className="py-20 bg-yellow-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 relative h-64 md:h-80">
                <Image
                  src="/oes-dandelion-pour.jpg"
                  alt="Dandelion Cafe"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl text-yellow-600 font-light mb-6">Dandelion Cafe</h2>
                <p className="text-lg text-green-700 mb-6">
                  Discover the cozy atmosphere of Dandelion Cafe, where you can enjoy a variety of delicious beverages and snacks. It's the perfect spot to relax, study, or catch up with friends.
                </p>
                <Button asChild>
                  <Link href="/cafe" className="inline-flex bg-green-700 text-white items-center gap-2 nav-link">
                    Visit Dandelion! <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
