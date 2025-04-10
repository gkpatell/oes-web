import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const handleScroll = () => {
    const showcaseSection = document.getElementById("buildingShowcase");
    if (showcaseSection) {
      showcaseSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative h-screen flex items-center justify-center">
      <Image
        src="/facility7.jpg?height=1080&width=1920"
        alt="O'Connor Building of Engineering and Sciences"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Ralph S. O&apos;Connor Building of Engineering and Sciences
        </h1>
        <p className="text-lg md:text-xl mb-8">
          An epicenter for interdisciplinary collaboration at Rice University
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-gray-100"
            onClick={handleScroll}
          >
            Explore the Building
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white/10"
          >
            Book a Space
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <Button
          variant="ghost"
          className="text-white hover:bg-white/10"
          onClick={handleScroll}
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
}
