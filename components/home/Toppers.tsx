'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Mock data for toppers
const toppers = [
  {
    id: 1,
    name: "Aisha Patel",
    grade: "Grade 12",
    score: "98.7%",
    achievements: "National Science Olympiad Gold Medalist",
    college: "MIT",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "James Wilson",
    grade: "Grade 12",
    score: "98.2%",
    achievements: "Mathematics Competition Champion",
    college: "Stanford University",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Sophia Chen",
    grade: "Grade 12",
    score: "97.9%",
    achievements: "International Debate Competition Winner",
    college: "Harvard University",
    image: "https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    name: "Mohammed Ali",
    grade: "Grade 12",
    score: "97.5%",
    achievements: "Young Innovator Award Recipient",
    college: "Caltech",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    name: "Emma Rodriguez",
    grade: "Grade 12",
    score: "97.2%",
    achievements: "National Arts Competition Winner",
    college: "Yale University",
    image: "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export function Toppers() {
  const [startIndex, setStartIndex] = useState(0);
  const displayCount = 3; // Number of toppers to display at once
  
  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? toppers.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setStartIndex((prev) => (prev === toppers.length - 1 ? 0 : prev + 1));
  };
  
  // Create a circular array of toppers starting from startIndex
  const getVisibleToppers = () => {
    const result = [];
    for (let i = 0; i < displayCount; i++) {
      const index = (startIndex + i) % toppers.length;
      result.push(toppers[index]);
    }
    return result;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Star Achievers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our top-performing students who have excelled academically and made us proud
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Controls for larger screens */}
          <div className="hidden md:block">
            <button 
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center hover:bg-pink-200 transition-colors z-10"
              aria-label="Previous"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center hover:bg-pink-200 transition-colors z-10"
              aria-label="Next"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getVisibleToppers().map((topper) => (
              <div 
                key={topper.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={topper.image} 
                    alt={topper.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{topper.name}</h3>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">{topper.grade}</span>
                    <span className="font-semibold text-pink-600">{topper.score}</span>
                  </div>
                  <p className="text-gray-700 mb-2">{topper.achievements}</p>
                  <p className="text-sm text-gray-500">Going to: <span className="font-medium">{topper.college}</span></p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Controls for small screens */}
          <div className="flex justify-center mt-8 space-x-4 md:hidden">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center hover:bg-pink-200 transition-colors"
              aria-label="Previous"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center hover:bg-pink-200 transition-colors"
              aria-label="Next"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-1">
            {toppers.map((_, index) => (
              <button
                key={index}
                onClick={() => setStartIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === startIndex ? "bg-pink-500 w-4" : "bg-pink-200 hover:bg-pink-300"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}