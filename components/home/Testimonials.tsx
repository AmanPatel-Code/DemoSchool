'use client';

import { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight,
  Quote 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Parent",
    testimonial: "Enrolling my children at St. Boston Edtech was one of the best decisions we've made. The teachers are passionate and dedicated to helping each student succeed academically while fostering their personal growth.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Michael Roberts",
    role: "Alumni, Class of 2022",
    testimonial: "My years at Rosewood prepared me exceptionally well for university. The rigorous academic program combined with supportive teachers helped me develop critical thinking skills that I use every day in my studies now.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Dr. Emily Chen",
    role: "Education Partner",
    testimonial: "As a university professor who works closely with Rosewood students, I'm consistently impressed by their academic preparation and their well-rounded character. They stand out among their peers in both academic excellence and leadership qualities.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">What People Say About Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our community about their experiences with St. Boston Edtech
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Controls for larger screens */}
          <div className="hidden md:block">
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center hover:bg-pink-200 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center hover:bg-pink-200 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          
          <div className="bg-pink-50 rounded-lg p-8 md:p-10 shadow-sm">
            <div className="text-pink-600 mb-6">
              <Quote className="h-10 w-10" />
            </div>
            <p className="text-lg md:text-xl text-gray-700 italic mb-8">
              "{testimonials[currentIndex].testimonial}"
            </p>
            <div className="flex items-center">
              <div className="h-14 w-14 rounded-full overflow-hidden mr-4">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  index === currentIndex ? "bg-pink-500 w-6" : "bg-pink-200 hover:bg-pink-300"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Controls for small screens */}
          <div className="flex justify-center mt-6 space-x-4 md:hidden">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center hover:bg-pink-200 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center hover:bg-pink-200 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}