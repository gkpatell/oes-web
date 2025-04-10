"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ECEDepartmentPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/oes-ece-place.jpeg"
          alt="ECE Department"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
          <div className="container mx-auto h-full flex flex-col justify-end pb-16 px-4">
            <Link href="/research-portal" className="flex items-center text-white mb-4">
              <ArrowLeft className="mr-2" size={20} />
              Back to Research Portal
            </Link>
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6">
              Electrical and Computer Engineering
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8">
              Advancing technology through cutting-edge research and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-light mb-6">About ECE at Rice</h2>
              <p className="text-lg mb-6">
                The Ralph S. O'Connor Building for Engineering and Science and its state-of-the-art facility are essential part of our daily operations and key to our growth. The cutting-edge laboratories located in the center of each quad accelerate the discovery and implementation of emerging technologies.
              </p>
              <p className="text-lg mb-6">
                The faculty offices and well-designed cubicles for postdocs and students are perfect touchdown spaces and provide them with a comfortable environment to work and study. We especially enjoy the spacious event hall with a stunning view just above us.
              </p>
              <p className="text-lg mb-6">
                We were fortunate to welcome our new graduate students during the orientation in this event hall in August 2024. We also had several events, including the Welcome Back Undergraduate Ice Cream Social event in October 2024 and ECE Staff Holiday Lunch in December 2024 in the common kitchen area on the fourth floor right outside of the ECE Administrative Suite. The open space with the big center table and seating areas is an ideal layout for such purposes.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-light mb-6">Principal Investigators</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-muted rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Edward Knightly</h3>
                  <p className="text-muted-foreground">Sheafor-Lindsay Professor</p>
                </div>
                <div className="p-6 bg-muted rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Ashutosh Sabharwal</h3>
                  <p className="text-muted-foreground">Ernest Dell Butcher Professor of Engineering</p>
                </div>
                <div className="p-6 bg-muted rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Yuji Zhao</h3>
                  <p className="text-muted-foreground">Associate Professor</p>
                </div>
                <div className="p-6 bg-muted rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Shengxi Huang</h3>
                  <p className="text-muted-foreground">Associate Professor</p>
                </div>
                <div className="p-6 bg-muted rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Akane Sano</h3>
                  <p className="text-muted-foreground">Associate Professor</p>
                </div>
                <div className="p-6 bg-muted rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Kaiyuan Yang</h3>
                  <p className="text-muted-foreground">Associate Professor</p>
                </div>
                <div className="p-6 bg-muted rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Taiyun Chi</h3>
                  <p className="text-muted-foreground">Assistant Professor</p>
                </div>
                <div className="p-6 bg-muted rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Rahman Doost-Mohammady</h3>
                  <p className="text-muted-foreground">Assistant Research Professor</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button asChild>
                <Link href="https://ece.rice.edu/" target="_blank" rel="noopener noreferrer">
                  Visit ECE Department Website
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 