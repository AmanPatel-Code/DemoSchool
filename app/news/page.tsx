'use client';

import { useState } from 'react';
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Calendar,
  ArrowRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Mock data for news
const newsItems = [
  {
    id: 1,
    title: "Annual Science Fair Winners Announced",
    date: "May 15, 2025",
    excerpt: "Congratulations to all participants and winners of this year's Science Fair. The projects displayed exceptional creativity and scientific thinking.",
    content: "The annual Science Fair was a tremendous success, showcasing the innovative thinking and scientific curiosity of our students. After careful deliberation by our panel of judges, we are pleased to announce the winners. First place was awarded to Emma Johnson for her project on sustainable energy solutions. Second place went to Michael Chen for his research on water purification methods. Third place was earned by Sarah Williams for her study on plant growth under different light conditions. We extend our congratulations to all participants for their hard work and dedication to scientific inquiry.",
    category: "Events",
    image: "https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "New Sports Complex Opening Next Month",
    date: "May 10, 2025",
    excerpt: "We're excited to announce the completion of our state-of-the-art sports complex. The facility will be open to students starting next month.",
    content: "After two years of construction, we are thrilled to announce that our new sports complex will be officially opening on June 15th. The complex features a regulation-size basketball court, Olympic swimming pool, indoor track, fitness center, and multiple practice rooms for various sports. This facility represents our commitment to providing students with the best resources for physical education and athletic development. A grand opening ceremony will be held on June 14th at 10:00 AM, and all students, parents, and staff are invited to attend.",
    category: "Announcements",
    image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "Students Excel in National Mathematics Competition",
    date: "May 5, 2025",
    excerpt: "Our students brought home multiple medals from the National Mathematics Competition, demonstrating their exceptional problem-solving skills.",
    content: "We are proud to announce that St. Boston Edtech students have achieved outstanding results in the National Mathematics Competition. Our team of 12 students competed against 200 schools nationwide, bringing home 3 gold medals, 5 silver medals, and 2 bronze medals. Special recognition goes to David Park, who ranked 2nd nationally in the high school division. This success reflects the dedication of our students and the excellent guidance provided by our mathematics department. We look forward to building on this achievement in future competitions.",
    category: "Achievements",
    image: "https://images.pexels.com/photos/714698/pexels-photo-714698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    title: "Summer School Registration Now Open",
    date: "May 3, 2025",
    excerpt: "Registration for our summer enrichment programs is now open. A variety of academic and recreational courses are available for all grade levels.",
    content: "We are pleased to announce that registration for our Summer 2025 programs is now open. This year, we are offering a diverse range of courses including Advanced Mathematics, Creative Writing, Robotics, Fine Arts, Sports Camps, and Language Immersion programs. Summer school will run from July 1st to August 15th. Early bird registration discounts are available until May 31st. Please visit the school website or contact the administration office for more information and to register your child for these enriching summer opportunities.",
    category: "Announcements",
    image: "https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    title: "Parent-Teacher Conference Schedule Released",
    date: "April 28, 2025",
    excerpt: "The schedule for the upcoming parent-teacher conferences has been released. Please book your appointments through the online portal.",
    content: "The end-of-year parent-teacher conferences will be held from May 20th to May 24th. These conferences provide an important opportunity to discuss your child's academic progress, social development, and goals for the next academic year. Appointments can be scheduled through our online portal starting May 1st. Each conference will last 15 minutes, and we encourage parents to prepare specific questions or topics they would like to discuss. If you need assistance with scheduling or have any questions, please contact our administrative office.",
    category: "Announcements",
    image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 6,
    title: "Rosewood Choir Wins Regional Championship",
    date: "April 22, 2025",
    excerpt: "Our school choir delivered a stunning performance at the Regional Choral Competition, securing first place and qualifying for nationals.",
    content: "The St. Boston Edtech Choir has once again demonstrated their exceptional talent by winning the Regional Choral Championship. Under the direction of Ms. Rebecca Thompson, the 35-member choir performed a challenging repertoire that included classical, contemporary, and folk selections. Their rendition of 'Hallelujah' by Leonard Cohen received a standing ovation from the audience and perfect scores from the judges. This victory qualifies them for the National Choral Competition, which will be held in Chicago this July. Congratulations to all choir members and their dedicated director for this outstanding achievement!",
    category: "Achievements",
    image: "https://images.pexels.com/photos/7095514/pexels-photo-7095514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 7,
    title: "International Exchange Program Applications Due Next Week",
    date: "April 18, 2025",
    excerpt: "Students interested in participating in next year's international exchange program should submit their applications by May 1st.",
    content: "We would like to remind all students interested in our International Exchange Program that applications for the 2025-2026 academic year are due by May 1st. This program offers the opportunity to study abroad for one semester in partner schools in France, Spain, Japan, or Germany. Eligible students must be entering grades 10-12 next year, maintain a GPA of 3.0 or higher, and demonstrate proficiency in the host country's language. Information sessions will be held in Room 202 on April 25th and 26th during lunch periods for students to learn more about this enriching opportunity.",
    category: "Circulars",
    image: "https://images.pexels.com/photos/16129877/pexels-photo-16129877/free-photo-of-airport-passport-and-airline-ticket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 8,
    title: "New STEM Curriculum Announced for Next Academic Year",
    date: "April 15, 2025",
    excerpt: "We're enhancing our STEM program with new courses in robotics, artificial intelligence, and environmental science starting next fall.",
    content: "As part of our ongoing commitment to providing cutting-edge education, St. Boston Edtech is excited to announce significant enhancements to our STEM curriculum for the 2025-2026 academic year. New course offerings will include Introduction to Robotics, Principles of Artificial Intelligence, Advanced Computer Programming, Environmental Science Research, and Biotechnology. These courses will be supported by newly equipped laboratories and partnerships with leading technology companies and research institutions. A curriculum preview night will be held on May 30th at 6:30 PM in the auditorium for students and parents to learn more about these exciting new opportunities.",
    category: "Announcements",
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

// Category colors
const categoryColors = {
  Events: "bg-blue-100 text-blue-800",
  Announcements: "bg-green-100 text-green-800",
  Achievements: "bg-purple-100 text-purple-800",
  Circulars: "bg-amber-100 text-amber-800"
};

// Get all unique categories
const categories = Array.from(new Set(newsItems.map(item => item.category)));

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Filter news based on search term and category
  const filteredNews = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Circulars</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Stay updated with the latest happenings, announcements, and achievements at St. Boston Edtech 
          </p>
        </div>
      </div>

      {/* News Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-1/4 lg:w-1/5">
              <div className="bg-pink-50 rounded-lg p-6 sticky top-24">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Search</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input 
                      placeholder="Search news..." 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Categories</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                        !selectedCategory 
                          ? 'bg-pink-200 text-pink-800' 
                          : 'hover:bg-pink-100 text-gray-700'
                      }`}
                    >
                      All Categories
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                          selectedCategory === category 
                            ? 'bg-pink-200 text-pink-800' 
                            : 'hover:bg-pink-100 text-gray-700'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-pink-200 pt-6">
                  <h3 className="text-lg font-semibold mb-3">Subscribe</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Subscribe to our newsletter to receive the latest news and updates directly to your inbox.
                  </p>
                  <Input 
                    placeholder="Your email address" 
                    type="email"
                    className="mb-2"
                  />
                  <Button className="w-full bg-pink-600 hover:bg-pink-700">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="w-full md:w-3/4 lg:w-4/5">
              <div className="mb-8">
                <Heading 
                  title="Latest News" 
                  description={`Showing ${filteredNews.length} ${filteredNews.length === 1 ? 'article' : 'articles'}`}
                />
              </div>
              
              {/* News Grid */}
              <div className="space-y-8">
                {filteredNews.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="md:flex">
                      <div className="md:w-1/3 h-60 md:h-auto overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex flex-wrap justify-between items-center mb-3">
                          <Badge className={cn("mb-2 md:mb-0", 
                            categoryColors[item.category as keyof typeof categoryColors])}>
                            {item.category}
                          </Badge>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Calendar className="h-4 w-4 mr-1" />
                            {item.date}
                          </div>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">
                          <Link href={`/news/${item.id}`} className="hover:text-pink-700 transition-colors">
                            {item.title}
                          </Link>
                        </h2>
                        <p className="text-gray-600 mb-4">{item.excerpt}</p>
                        <Link 
                          href={`/news/${item.id}`} 
                          className="inline-flex items-center text-pink-600 hover:text-pink-800 transition-colors"
                        >
                          Read More <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Empty State */}
              {filteredNews.length === 0 && (
                <div className="text-center py-12">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto h-12 w-12 text-gray-400 mb-4">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path>
                    <path d="M8 15h8"></path>
                    <path d="M9 9h.01"></path>
                    <path d="M15 9h.01"></path>
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No News Found</h3>
                  <p className="text-gray-600 mb-4">
                    We couldn't find any news articles matching your search criteria.
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory(null);
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Heading 
              title="Stay Informed" 
              description="Subscribe to our newsletter for regular updates"
              centered
            />
            
            <div className="mt-8 bg-white rounded-lg p-8 shadow-sm">
              <p className="text-gray-700 mb-6">
                Join our mailing list to receive the latest news, announcements, and event information directly to your inbox. We respect your privacy and will never share your email with third parties.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Input 
                  placeholder="Your email address" 
                  type="email"
                  className="flex-grow"
                />
                <Button className="bg-pink-600 hover:bg-pink-700 whitespace-nowrap">
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}