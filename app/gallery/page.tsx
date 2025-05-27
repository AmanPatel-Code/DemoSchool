'use client';

import { useState } from 'react';
import { Heading } from "@/components/ui/heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from 'lucide-react';

// Mock data for gallery
const galleryData = {
  campus: [
    {
      id: 1,
      title: "Main Building",
      description: "Our state-of-the-art main academic building",
      image: "https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      title: "Science Laboratory",
      description: "Fully equipped modern science laboratory",
      image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      title: "Library",
      description: "Our extensive library with thousands of books and digital resources",
      image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      title: "Sports Complex",
      description: "Multi-purpose sports complex with indoor and outdoor facilities",
      image: "https://images.pexels.com/photos/1103829/pexels-photo-1103829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 5,
      title: "Cafeteria",
      description: "Spacious cafeteria serving nutritious meals",
      image: "https://images.pexels.com/photos/5490335/pexels-photo-5490335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 6,
      title: "Auditorium",
      description: "Modern auditorium for performances and events",
      image: "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ],
  events: [
    {
      id: 1,
      title: "Annual Science Fair",
      description: "Students showcasing their innovative science projects",
      image: "https://images.pexels.com/photos/8423049/pexels-photo-8423049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      title: "Sports Day",
      description: "Annual inter-house sports competition",
      image: "https://images.pexels.com/photos/8332772/pexels-photo-8332772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      title: "Cultural Festival",
      description: "Celebrating diversity through music, dance, and food",
      image: "https://images.pexels.com/photos/11796765/pexels-photo-11796765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      title: "Graduation Ceremony",
      description: "Celebrating the achievements of our graduating class",
      image: "https://images.pexels.com/photos/7941988/pexels-photo-7941988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 5,
      title: "Debate Competition",
      description: "Students showcasing their public speaking skills",
      image: "https://images.pexels.com/photos/6592670/pexels-photo-6592670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 6,
      title: "Art Exhibition",
      description: "Showcasing creative works by our talented students",
      image: "https://images.pexels.com/photos/8179934/pexels-photo-8179934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ],
  activities: [
    {
      id: 1,
      title: "Robotics Club",
      description: "Students learning to build and program robots",
      image: "https://images.pexels.com/photos/8566325/pexels-photo-8566325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      title: "Music Class",
      description: "Students learning various musical instruments",
      image: "https://images.pexels.com/photos/210766/pexels-photo-210766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      title: "Art Workshop",
      description: "Creative arts sessions for students",
      image: "https://images.pexels.com/photos/8106190/pexels-photo-8106190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      title: "Sports Training",
      description: "Professional coaching for various sports",
      image: "https://images.pexels.com/photos/4761813/pexels-photo-4761813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 5,
      title: "Coding Class",
      description: "Learning programming and software development",
      image: "https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 6,
      title: "Chess Club",
      description: "Strategic thinking and competitive chess",
      image: "https://images.pexels.com/photos/5042384/pexels-photo-5042384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ]
};

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<{
    image: string;
    title: string;
    description: string;
  } | null>(null);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore our campus, events, and student activities through our collection of photographs
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Heading 
            title="Our Gallery" 
            description="A visual journey through St. Boston Edtech"
            centered
          />
          
          <Tabs defaultValue="campus" className="max-w-6xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 w-full max-w-md">
                <TabsTrigger value="campus">Campus</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="activities">Activities</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="campus" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryData.campus.map((item) => (
                  <div 
                    key={item.id} 
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => setSelectedImage(item)}
                  >
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="events" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryData.events.map((item) => (
                  <div 
                    key={item.id} 
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => setSelectedImage(item)}
                  >
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="activities" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryData.activities.map((item) => (
                  <div 
                    key={item.id} 
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => setSelectedImage(item)}
                  >
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-[90vw] p-0 overflow-hidden bg-transparent border-none shadow-none">
          <div className="relative">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center z-10 hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="max-h-[80vh] overflow-hidden">
                <img 
                  src={selectedImage?.image} 
                  alt={selectedImage?.title} 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <DialogHeader>
                  <DialogTitle className="text-xl">{selectedImage?.title}</DialogTitle>
                  <DialogDescription className="text-gray-600 mt-2">
                    {selectedImage?.description}
                  </DialogDescription>
                </DialogHeader>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Video Showcase */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <Heading 
            title="Video Showcase" 
            description="Watch highlights from our school events and activities"
            centered
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="School Showcase Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            
            <div className="mt-8 text-center">
              <h3 className="text-xl font-semibold mb-2">St. Boston Edtech: A Day in the Life</h3>
              <p className="text-gray-700">
                Experience the vibrant atmosphere of St. Boston Edtech through this showcase video highlighting our facilities, academic programs, and student life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Heading 
            title="Our Achievements" 
            description="Recognition and awards that showcase our excellence"
            centered
          />
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-pink-500">
                <h3 className="text-xl font-semibold text-pink-800 mb-3">Academic Excellence</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-pink-600 mr-2 mt-0.5">
                      <path d="M6 19V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14l-4.2-3.6a2 2 0 0 0-3.6 0z"></path>
                    </svg>
                    <span className="text-gray-700">
                      Ranked #1 in the Regional Academic Excellence Awards for 5 consecutive years
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-pink-600 mr-2 mt-0.5">
                      <path d="M6 19V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14l-4.2-3.6a2 2 0 0 0-3.6 0z"></path>
                    </svg>
                    <span className="text-gray-700">
                      100% college acceptance rate for graduating seniors with 85% receiving scholarships
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-pink-600 mr-2 mt-0.5">
                      <path d="M6 19V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14l-4.2-3.6a2 2 0 0 0-3.6 0z"></path>
                    </svg>
                    <span className="text-gray-700">
                      National Math Olympiad team champions for 3 consecutive years
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-pink-600 mr-2 mt-0.5">
                      <path d="M6 19V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14l-4.2-3.6a2 2 0 0 0-3.6 0z"></path>
                    </svg>
                    <span className="text-gray-700">
                      15 National Merit Scholars in the past 5 years
                    </span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-pink-500">
                <h3 className="text-xl font-semibold text-pink-800 mb-3">Sports & Extracurricular</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-pink-600 mr-2 mt-0.5">
                      <circle cx="12" cy="8" r="7"></circle>
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                    </svg>
                    <span className="text-gray-700">
                      State Basketball Champions (Boys) 2023, 2024
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-pink-600 mr-2 mt-0.5">
                      <circle cx="12" cy="8" r="7"></circle>
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                    </svg>
                    <span className="text-gray-700">
                      National Debate Tournament Champions 2024
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-pink-600 mr-2 mt-0.5">
                      <circle cx="12" cy="8" r="7"></circle>
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                    </svg>
                    <span className="text-gray-700">
                      Regional Robotics Competition Winners 2023
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-pink-600 mr-2 mt-0.5">
                      <circle cx="12" cy="8" r="7"></circle>
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                    </svg>
                    <span className="text-gray-700">
                      All-State Orchestra Selections - 12 students in 2024
                    </span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-pink-500">
                <h3 className="text-xl font-semibold text-pink-800 mb-3">School Recognition</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-pink-600 mr-2 mt-0.5">
                      <path d="M20 6H4V18H20z"></path>
                      <path d="M2 12h2"></path>
                      <path d="M20 12h2"></path>
                    </svg>
                    <span className="text-gray-700">
                      Blue Ribbon School of Excellence Award 2023
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-pink-600 mr-2 mt-0.5">
                      <path d="M20 6H4V18H20z"></path>
                      <path d="M2 12h2"></path>
                      <path d="M20 12h2"></path>
                    </svg>
                    <span className="text-gray-700">
                      Green School Certification for Environmental Initiatives
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-pink-600 mr-2 mt-0.5">
                      <path d="M20 6H4V18H20z"></path>
                      <path d="M2 12h2"></path>
                      <path d="M20 12h2"></path>
                    </svg>
                    <span className="text-gray-700">
                      STEM Education Excellence Award 2024
                    </span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-pink-500">
                <h3 className="text-xl font-semibold text-pink-800 mb-3">Community Service</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-pink-600 mr-2 mt-0.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span className="text-gray-700">
                      Over 15,000 community service hours completed by students in 2023
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-pink-600 mr-2 mt-0.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span className="text-gray-700">
                      City Volunteer Organization of the Year Award 2023
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-pink-600 mr-2 mt-0.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span className="text-gray-700">
                      Raised over $50,000 for local children's hospital through annual charity drive
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}