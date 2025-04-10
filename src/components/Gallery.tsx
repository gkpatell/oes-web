"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { VisuallyHidden } from "@/components/ui/visually-hidden";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

export function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openImage = (index: number) => setSelectedImage(index);
  const closeImage = () => setSelectedImage(null);

  const nextImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage + 1) % images.length);
  };

  const previousImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] cursor-pointer"
            onClick={() => openImage(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded border"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50">
                <p className="text-sm text-white">{image.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={closeImage}>
        <DialogContent className="max-w-4xl p-0 bg-black">
          <DialogTitle asChild>
            <VisuallyHidden>Image Gallery</VisuallyHidden>
          </DialogTitle>
          {selectedImage !== null && (
            <div className="relative">
              <div className="relative aspect-[16/9]">
                <Image
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              <Button
                onClick={closeImage}
                variant="ghost"
                className="absolute top-4 right-4 p-2 text-white hover:bg-black/50"
              >
                <X className="h-6 w-6" />
              </Button>
              <Button
                onClick={previousImage}
                variant="ghost"
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white hover:bg-black/50"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                onClick={nextImage}
                variant="ghost"
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:bg-black/50"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50">
                <p className="text-white text-center">
                  {images[selectedImage].caption}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
