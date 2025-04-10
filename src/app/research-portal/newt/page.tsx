"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NEWTDepartmentPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/oes-lab-people.jpg"
          alt="NEWT Department"
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
              Rice Water Institute
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8">
              Revolutionizing water treatment through nanotechnology.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-light mb-6">About NEWT</h2>
              <p className="text-lg mb-6">
                [Information about NEWT and its activities in the O'Connor Building will be added here]
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-light mb-6">Principal Investigators</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-muted rounded-lg">
                  <h3 className="text-xl font-medium mb-2">[PI Name]</h3>
                  <p className="text-muted-foreground">[Title]</p>
                </div>
                {/* Add more PIs as needed */}
              </div>
            </div>

            <div className="text-center">
              <Button asChild>
                <Link href="https://newt.rice.edu" target="_blank" rel="noopener noreferrer">
                  Visit NEWT Website
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 