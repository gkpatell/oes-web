"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from 'react';

export default function CafePage() {
  // Add a carousel for menu items
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: 'Blueberry Lemon Curd French Toast Stix',
      description: 'Foccacia French toast sticks topped w/ blueberry compote, lemon curd, candied lemon peel & whipped cream',
    },
    {
      title: 'Black Bean Tostada',
      description: '3 corn tostadas w/ black bean spread, oaxaca, 1 egg, salsa, avocado, queso fresco, fresh cilantro & a lime wedge',
    },
    // Add more slides as needed
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-[#FAF3E0]">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/oes-dandelion-counter.jpg"
          alt="O'Connor Building Cafe"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
          <Image
            src="/dandelion-logo.png"
            alt="Dandelion Cafe Logo"
            width={350}
            height={350}
            className="mb-4 animate"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-green-600 mb-6 font-bold">
            Welcome to O&apos;Connor Cafe
          </h2>
          <p className="text-gray-700 mb-8">
            Located in the heart of the O&apos;Connor Building, our cafe offers a perfect blend of comfort and convenience. Whether you&apos;re looking for your morning coffee, a quick lunch, or a place to meet colleagues, we&apos;ve got you covered.
          </p>
        </div>

        {/* Hours & Location */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl text-green-700 mb-4 font-semibold">Hours of Operation</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Monday - Friday: 7:30 AM - 5:00 PM</li>
              <li>Saturday: 9:00 AM - 3:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl text-green-700 mb-4 font-semibold">Location</h3>
            <p className="text-gray-700">
              First Floor<br />
              O&apos;Connor Building<br />
              Rice University Campus
            </p>
          </div>
        </div>

        {/* Showcase indoor and outdoor seating */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Image
              src="/oes-cafe-ind.jpg"
              alt="Indoor Sitting"
              className="rounded-lg mb-4 object-cover w-full h-64"
              width={400}
              height={256}
            />
            <h3 className="text-xl text-green-700 mb-4">Indoor Sitting</h3>
            <p className="text-gray-600">
              Enjoy our cozy indoor seating area, perfect for meetings or a quiet coffee break.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Image
              src="/oes-cafe-out.jpg"
              alt="Outdoor Sitting"
              className="rounded-lg mb-4 object-cover w-full h-64"
              width={400}
              height={256}
            />
            <h3 className="text-xl text-green-700 mb-4">Outdoor Sitting</h3>
            <p className="text-gray-600">
              Relax in our beautiful outdoor patio, surrounded by lush greenery.
            </p>
          </div>
        </div>

        {/* Display a brief menu */}
        <div className="mb-16">
          <h3 className="text-2xl text-green-600 mb-8 text-center font-semibold">Brief Menu</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-lg text-yellow-600 mb-2">Beverages</h4>
              <ul className="text-gray-600 space-y-2">
                <li>Freshly Brewed Coffee</li>
                <li>Espresso Drinks</li>
                <li>Tea Selection</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="text-lg text-yellow-600 mb-2">Light Bites</h4>
              <ul className="text-gray-600 space-y-2">
                <li>Fresh Pastries</li>
                <li>Sandwiches</li>
                <li>Salads</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="text-lg text-yellow-600 mb-2">Snacks</h4>
              <ul className="text-gray-600 space-y-2">
                <li>Fresh Fruit</li>
                <li>Energy Bars</li>
                <li>Trail Mix</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Add carousel to the page */}
        <div className="carousel-container mb-16">
          <h3 className="text-2xl text-green-700 mb-8 text-center font-semibold">Featured Menu Items</h3>
          <div className="carousel flex items-center justify-center h-28 w-full">
            <button onClick={prevSlide} className="carousel-control prev text-yellow-600">&#10094;</button>
            <div className="carousel-slide bg-white p-6 rounded-lg shadow-lg mx-4 w-full h-28">
              <h4 className="text-lg text-green-700 mb-2 font-semibold">{slides[currentSlide].title}</h4>
              <p className="text-yellow-600">{slides[currentSlide].description}</p>
            </div>
            <button onClick={nextSlide} className="carousel-control next text-[#9A2D1F]">&#10095;</button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            variant="default"
            size="lg"
            className="bg-green-700 hover:bg-yellow-600 transition-transform transform hover:scale-105 text-white font-bold py-3 px-6 rounded-full shadow-lg"
            onClick={() => window.location.href='https://dandelioncafericeu.toast.site/order/dandelion-cafe-rice-u?diningOption=takeout'}
          >
            Order Online
          </Button>
        </div>
      </div>
    </div>
  );
} 