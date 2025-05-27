'use client';

import { useState } from 'react';
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  BookOpen,
  Filter,
  ShoppingCart
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";

// Mock data for books
const books = [
  {
    id: 1,
    title: "Advanced Mathematics: Calculus and Beyond",
    author: "Dr. Robert Chen",
    category: "Mathematics",
    price: 45.99,
    coverImage: "https://images.pexels.com/photos/5239574/pexels-photo-5239574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    available: true,
    description: "A comprehensive guide to advanced calculus concepts for high school students."
  },
  {
    id: 2,
    title: "Chemistry: Principles and Applications",
    author: "Dr. Emily Johnson",
    category: "Science",
    price: 42.50,
    coverImage: "https://images.pexels.com/photos/6937909/pexels-photo-6937909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    available: true,
    description: "Explore the fundamental principles of chemistry with practical applications."
  },
  {
    id: 3,
    title: "World History: Ancient Civilizations to Modern Era",
    author: "Prof. Michael Williams",
    category: "History",
    price: 38.75,
    coverImage: "https://images.pexels.com/photos/6647119/pexels-photo-6647119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    available: true,
    description: "A journey through human history from ancient civilizations to the present day."
  },
  {
    id: 4,
    title: "English Literature: Classics and Analysis",
    author: "Dr. Sarah Thompson",
    category: "Literature",
    price: 36.25,
    coverImage: "https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    available: false,
    description: "An exploration of classic literary works with in-depth analysis and critical thinking."
  },
  {
    id: 5,
    title: "Biology: The Science of Life",
    author: "Dr. James Anderson",
    category: "Science",
    price: 44.99,
    coverImage: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    available: true,
    description: "A comprehensive textbook covering all aspects of biology for high school students."
  },
  {
    id: 6,
    title: "Physics: Mechanics and Dynamics",
    author: "Prof. Richard Lee",
    category: "Science",
    price: 47.50,
    coverImage: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    available: true,
    description: "A detailed exploration of mechanics, dynamics, and the laws of physics."
  },
  {
    id: 7,
    title: "Computer Science: Programming Fundamentals",
    author: "Dr. Lisa Wang",
    category: "Technology",
    price: 49.99,
    coverImage: "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    available: true,
    description: "An introduction to programming concepts, algorithms, and problem-solving techniques."
  },
  {
    id: 8,
    title: "Economics: Principles and Practices",
    author: "Dr. Mark Robinson",
    category: "Social Studies",
    price: 41.25,
    coverImage: "https://images.pexels.com/photos/5965689/pexels-photo-5965689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    available: true,
    description: "Understand the principles of economics and their real-world applications."
  }
];

// All available categories
const categories = Array.from(new Set(books.map(book => book.category)));

export default function LibraryPage() {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);

  // Filter books based on search term and category
  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (bookId: number) => {
    const existingItem = cart.find(item => item.id === bookId);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === bookId 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      setCart([...cart, { id: bookId, quantity: 1 }]);
    }
    
    toast({
      title: "Added to Cart",
      description: "The book has been added to your cart.",
    });
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">School Library</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Browse and purchase books for your academic and personal growth
          </p>
        </div>
      </div>

      {/* Library Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-1/4 lg:w-1/5">
              <div className="bg-pink-50 rounded-lg p-6 sticky top-24">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Filter className="h-5 w-5 mr-2 text-pink-600" />
                    Categories
                  </h3>
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
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <ShoppingCart className="h-5 w-5 mr-2 text-pink-600" />
                    Cart
                  </h3>
                  <div className="text-gray-700 mb-3">
                    {totalItems} {totalItems === 1 ? 'item' : 'items'} in cart
                  </div>
                  <Button 
                    className="w-full bg-pink-600 hover:bg-pink-700"
                    disabled={totalItems === 0}
                  >
                    Checkout
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="w-full md:w-3/4 lg:w-4/5">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <Heading 
                  title="Browse Books" 
                  description={`Showing ${filteredBooks.length} ${filteredBooks.length === 1 ? 'book' : 'books'}`}
                  className="mb-0"
                />
                
                <div className="w-full sm:w-auto relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input 
                    placeholder="Search books..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full sm:w-[250px]"
                  />
                </div>
              </div>
              
              {/* Books Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredBooks.map((book) => (
                  <div key={book.id} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={book.coverImage} 
                        alt={book.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline" className="bg-pink-50 text-pink-700 border-pink-200">
                          {book.category}
                        </Badge>
                        {!book.available && (
                          <Badge variant="destructive">
                            Out of Stock
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold mb-1 line-clamp-2">{book.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">by {book.author}</p>
                      <p className="text-gray-700 text-sm mb-4 line-clamp-2">{book.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-pink-700">${book.price.toFixed(2)}</span>
                        <Button 
                          size="sm" 
                          className="bg-pink-600 hover:bg-pink-700"
                          disabled={!book.available}
                          onClick={() => handleAddToCart(book.id)}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Empty State */}
              {filteredBooks.length === 0 && (
                <div className="text-center py-12">
                  <BookOpen className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No Books Found</h3>
                  <p className="text-gray-600 mb-4">
                    We couldn't find any books matching your search criteria.
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

      {/* Library Services */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <Heading 
            title="Library Services" 
            description="Explore the various services offered by our school library"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-100 rounded-full mb-4 text-pink-700">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Book Borrowing</h3>
              <p className="text-gray-700">
                Students can borrow up to 5 books at a time for a period of two weeks. Late returns are subject to a small fee.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-100 rounded-full mb-4 text-pink-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M7 7h10" />
                  <path d="M7 12h10" />
                  <path d="M7 17h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Digital Resources</h3>
              <p className="text-gray-700">
                Access e-books, online journals, and research databases through our digital library portal with your student credentials.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-100 rounded-full mb-4 text-pink-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M12 22a9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 3a9.5 9.5 0 0 0-9.5 9.5A9.5 9.5 0 0 0 12 22Z" />
                  <path d="m2 12 3-3" />
                  <path d="m19 12 3-3" />
                  <path d="M12 19v-2" />
                  <path d="M12 7v2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Study Spaces</h3>
              <p className="text-gray-700">
                The library offers quiet study spaces, group study rooms, and computer workstations for individual and collaborative learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Library Hours */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-pink-50 rounded-lg p-8">
            <Heading 
              title="Library Hours" 
              description="When you can visit our library facilities"
              centered
              className="mb-6"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-pink-800">School Days</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Monday - Thursday:</span>
                    <span className="font-medium">7:30 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Friday:</span>
                    <span className="font-medium">7:30 AM - 4:00 PM</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-pink-800">Weekends & Holidays</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Saturday:</span>
                    <span className="font-medium">9:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Sunday & Holidays:</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-pink-200">
              <p className="text-gray-700">
                <strong>Note:</strong> The library may have extended hours during examination periods. Please check the school bulletin for any changes to the regular schedule.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}