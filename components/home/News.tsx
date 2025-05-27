import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock data for news
const newsItems = [
  {
    id: 1,
    title: "Annual Science Fair Winners Announced",
    date: "May 15, 2025",
    excerpt: "Congratulations to all participants and winners of this year's Science Fair. The projects displayed exceptional creativity and scientific thinking.",
    category: "Events",
    image: "https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "New Sports Complex Opening Next Month",
    date: "May 10, 2025",
    excerpt: "We're excited to announce the completion of our state-of-the-art sports complex. The facility will be open to students starting next month.",
    category: "Announcements",
    image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "Students Excel in National Mathematics Competition",
    date: "May 5, 2025",
    excerpt: "Our students brought home multiple medals from the National Mathematics Competition, demonstrating their exceptional problem-solving skills.",
    category: "Achievements",
    image: "https://images.pexels.com/photos/714698/pexels-photo-714698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

// Category colors
const categoryColors = {
  Events: "bg-blue-100 text-blue-800",
  Announcements: "bg-green-100 text-green-800",
  Achievements: "bg-purple-100 text-purple-800",
  Circulars: "bg-amber-100 text-amber-800"
};

export function News() {
  return (
    <section className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest News</h2>
            <p className="text-gray-600">Stay updated with the latest happenings at St. Boston Edtech</p>
          </div>
          <Button asChild variant="outline" className="hidden md:flex items-center border-pink-300 text-pink-700 hover:bg-pink-100">
            <Link href="/news">
              View All News <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className={cn("text-xs font-medium px-2.5 py-0.5 rounded", 
                    categoryColors[item.category as keyof typeof categoryColors])}>
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  <Link href={`/news/${item.id}`} className="text-gray-900 hover:text-pink-700 transition-colors">
                    {item.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Link 
                  href={`/news/${item.id}`} 
                  className="inline-flex items-center text-pink-600 hover:text-pink-800 transition-colors"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button asChild variant="outline" className="border-pink-300 text-pink-700 hover:bg-pink-100">
            <Link href="/news">
              View All News <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}