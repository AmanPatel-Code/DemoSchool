import { Heading } from "@/components/ui/heading";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover the story, mission, and values that make St. Boston Edtech a leading educational institution.
          </p>
        </div>
      </div>

      {/* Mission and Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Heading 
                title="Our Mission & Vision" 
                description="Guiding principles that drive our educational approach"
              />
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-pink-700 mb-2">Our Mission</h3>
                  <p className="text-gray-700">
                    To provide a nurturing and stimulating environment where students can develop intellectually, emotionally, and socially, preparing them to become responsible global citizens who contribute positively to society.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pink-700 mb-2">Our Vision</h3>
                  <p className="text-gray-700">
                    To be recognized globally as a center of academic excellence that inspires lifelong learning, fosters innovation, and develops well-rounded individuals equipped to navigate the challenges of the 21st century.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pink-700 mb-2">Our Values</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Excellence in all endeavors</li>
                    <li>Integrity and ethical conduct</li>
                    <li>Respect for diversity and inclusion</li>
                    <li>Innovation and creative thinking</li>
                    <li>Responsibility towards community and environment</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Students in a classroom" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <Heading 
            title="Our History" 
            description="A legacy of excellence since 2000"
            centered
          />
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-pink-700 mb-2">Founding Years (2000-2005)</h3>
                <p className="text-gray-700">
                  St. Boston Edtech was founded in 2000 by Dr. Eleanor Rosewood, a visionary educator who believed in providing high-quality education accessible to all. Starting with just 150 students and 15 faculty members, the school quickly gained recognition for its innovative teaching methods and personalized approach to education.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-pink-700 mb-2">Growth and Development (2006-2015)</h3>
                <p className="text-gray-700">
                  The school expanded rapidly during this period, adding new facilities including a state-of-the-art science laboratory, a comprehensive library, and sports facilities. Academic programs were enhanced, and several international partnerships were established to provide students with global exposure.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-pink-700 mb-2">Digital Transformation (2016-2020)</h3>
                <p className="text-gray-700">
                  Recognizing the importance of technology in education, St. Boston Edtech underwent a complete digital transformation. Smart classrooms, digital learning resources, and a robust online learning platform were introduced to enhance the learning experience and prepare students for the digital age.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-pink-700 mb-2">Present Day (2021-Present)</h3>
                <p className="text-gray-700">
                  Today, St. Boston Edtech stands as a premier educational institution with over 2,500 students and 200 faculty members. Our commitment to excellence in education, innovative teaching methods, and holistic development continues to drive our mission forward as we prepare students to become future leaders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Heading 
            title="School Leadership" 
            description="Meet the dedicated team guiding our institution"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-pink-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Dr. Sarah Mitchell" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-pink-800 mb-1">Dr. Sarah Mitchell</h3>
                <p className="text-pink-600 mb-3">Principal</p>
                <p className="text-gray-700">
                  With over 20 years of experience in education, Dr. Mitchell leads St. Boston Edtech with a focus on academic excellence and student-centered learning.
                </p>
              </div>
            </div>
            
            <div className="bg-pink-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Dr. James Wilson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-pink-800 mb-1">Dr. James Wilson</h3>
                <p className="text-pink-600 mb-3">Vice Principal (Academics)</p>
                <p className="text-gray-700">
                  Dr. Wilson oversees the academic curriculum and faculty development, ensuring that educational standards remain high across all grade levels.
                </p>
              </div>
            </div>
            
            <div className="bg-pink-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5212315/pexels-photo-5212315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Ms. Rebecca Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-pink-800 mb-1">Ms. Rebecca Chen</h3>
                <p className="text-pink-600 mb-3">Vice Principal (Student Affairs)</p>
                <p className="text-gray-700">
                  Ms. Chen is dedicated to creating a positive school culture and ensuring the well-being of all students through comprehensive support systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <Heading 
            title="Campus Facilities" 
            description="State-of-the-art facilities to enhance the learning experience"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <img 
                src="https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="St. Boston Edtech Campus" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h3 className="text-lg font-semibold text-pink-700 mb-1">Smart Classrooms</h3>
                <p className="text-gray-700">
                  Equipped with interactive whiteboards, projectors, and high-speed internet to facilitate a modern learning experience.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h3 className="text-lg font-semibold text-pink-700 mb-1">Science Laboratories</h3>
                <p className="text-gray-700">
                  Well-equipped physics, chemistry, and biology labs with advanced equipment for practical learning.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h3 className="text-lg font-semibold text-pink-700 mb-1">Library & Resource Center</h3>
                <p className="text-gray-700">
                  A comprehensive collection of books, digital resources, and quiet study spaces to support research and learning.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h3 className="text-lg font-semibold text-pink-700 mb-1">Sports Facilities</h3>
                <p className="text-gray-700">
                  Indoor and outdoor sports facilities including basketball courts, swimming pool, track field, and a modern gymnasium.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h3 className="text-lg font-semibold text-pink-700 mb-1">Performing Arts Center</h3>
                <p className="text-gray-700">
                  A dedicated space for music, dance, drama, and other creative arts with professional acoustics and stage equipment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}