'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const slides = [
  {
    id: 1,
    title: "Excellence in Education",
    subtitle: "Nurturing minds, building futures",
    description: "St. Boston Edtech provides a stimulating environment where students thrive academically and personally.",
    image: "https://images.pexels.com/photos/8617899/pexels-photo-8617899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cta: "/about",
    ctaText: "Discover More"
  },
  {
    id: 2,
    title: "State-of-the-Art Facilities",
    subtitle: "Modern learning environment",
    description: "Our campus features advanced technology and facilities to enhance the learning experience.",
    image: "https://images.pexels.com/photos/8617913/pexels-photo-8617913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cta: "/academics",
    ctaText: "Explore Facilities"
  },
  {
    id: 3,
    title: "Holistic Development",
    subtitle: "Beyond academics",
    description: "We focus on developing well-rounded individuals through sports, arts, and extracurricular activities.",
    image: "https://images.pexels.com/photos/8617865/pexels-photo-8617865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cta: "/gallery",
    ctaText: "View Gallery"
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-xl text-white">
                <h2 className="text-sm md:text-base font-medium mb-2 text-pink-200">{slide.subtitle}</h2>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg mb-8 text-gray-100">{slide.description}</p>
                <Button asChild className="bg-pink-600 hover:bg-pink-700">
                  <Link href={slide.cta}>{slide.ctaText}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              index === currentSlide ? "bg-pink-500 w-6" : "bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}