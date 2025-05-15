"use client";

import { Button } from "@/components/ui/button";
import { Microscope, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ResearchPortalPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <Image
          src="/oes-lab-space.jpg"
          alt="Research Laboratory"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
          <div className="container mx-auto h-full flex flex-col justify-end pb-16 px-4">
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6">
              Rice Research
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8">
              Cutting-edge research lab suites driving innovation in the realm of science.
            </p>
          </div>
        </div>
      </section>

      {/* Research Centers Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* RAMI */}
            <Link
              href="https://rami.rice.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="architectural-image aspect-[3/2] mb-6">
                <Image
                  src="/Rice_Rami.png"
                  alt="RAMI Lab"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl mb-2">RAMI</h3>
              <p className="text-muted-foreground">Rice Advanced Materials Institute</p>
            </Link>

            {/* MSNE */}
            <Link
              href="https://msne.rice.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="architectural-image aspect-[3/2] mb-6">
                <Image
                  src="/Rice_MSNE.png"
                  alt="MSNE Lab"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl mb-2">MSNE</h3>
              <p className="text-muted-foreground">Materials Science and NanoEngineering</p>
            </Link>

            {/* ChBE */}
            <Link
              href="https://chbe.rice.edu/research"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="architectural-image aspect-[3/2] mb-6">
                <Image
                  src="/Rice_ChBE.png"
                  alt="ChBE Lab"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl mb-2">ChBE</h3>
              <p className="text-muted-foreground">Chemical and Biomolecular Engineering</p>
            </Link>

            {/* RWI */}
            <Link
              href="https://water.rice.edu/research-thrusts"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="architectural-image aspect-[3/2] mb-6">
                <Image
                  src="/Rice_Water.png"
                  alt="WaTer Lab"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl mb-2">RWI</h3>
              <p className="text-muted-foreground">Rice Water Institute</p>
            </Link>

            {/* Chemistry */}
            <Link
              href="https://chemistry.rice.edu/research-disciplines"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="architectural-image aspect-[3/2] mb-6">
                <Image
                  src="/Rice_Chemistry.png"
                  alt="Chemistry"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl mb-2">Chemistry</h3>
              <p className="text-muted-foreground">Chemistry</p>
            </Link>

            {/* CEE */}
            <Link
              href="https://cee.rice.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="architectural-image aspect-[4/3] mb-6">
                <Image
                  src="/Rice_CEE.png"
                  alt="Civil & Environmental Engineering"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl mb-2">CEE</h3>
              <p className="text-muted-foreground">Civil & Environmental Engineering</p>
            </Link>

            {/* Physics */}
            <Link
              href="https://physics.rice.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="architectural-image aspect-[4/3] mb-6">
                <Image
                  src="/Rice_Physics.png"
                  alt="Urban Research Lab"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl mb-2">Physics</h3>
              <p className="text-muted-foreground">Physics</p>
            </Link>

            {/* ECE */}
            <Link
              href="https://ece.rice.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="architectural-image aspect-[4/3] mb-6">
                <Image
                  src="/Rice_ECE.png"
                  alt="ECE Lab"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl mb-2">ECE</h3>
              <p className="text-muted-foreground">Electrical and Computer Engineering</p>
            </Link>

            {/* SEA */}
            <Link
              href="https://sea.rice.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="architectural-image aspect-[4/3] mb-6">
                <Image
                  src="/Rice_SEA.png"
                  alt="ECE Lab"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl mb-2">SEA</h3>
              <p className="text-muted-foreground">Shared Equipment Authority</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
