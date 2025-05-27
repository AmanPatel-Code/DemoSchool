import { 
  BookOpen, 
  Users, 
  Medal, 
  Calendar,
  GraduationCap,
  Lightbulb,
  PenTool
} from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: <BookOpen className="h-10 w-10" />,
    title: "Modern Library",
    description: "Access to thousands of books, digital resources, and study materials to enhance learning.",
    color: "bg-pink-50 text-pink-600"
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Expert Faculty",
    description: "Learn from experienced educators dedicated to bringing out the best in every student.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: <Medal className="h-10 w-10" />,
    title: "Excellence in Sports",
    description: "State-of-the-art facilities for various sports and physical education activities.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: <Calendar className="h-10 w-10" />,
    title: "Engaging Events",
    description: "Regular cultural events, competitions, and extracurricular activities for holistic development.",
    color: "bg-green-50 text-green-600"
  },
  {
    icon: <GraduationCap className="h-10 w-10" />,
    title: "Academic Excellence",
    description: "Rigorous academic programs designed to challenge and inspire students to reach their potential.",
    color: "bg-yellow-50 text-yellow-600"
  },
  {
    icon: <Lightbulb className="h-10 w-10" />,
    title: "Innovation Lab",
    description: "Cutting-edge technology and resources to foster creativity and innovative thinking.",
    color: "bg-red-50 text-red-600"
  },
  {
    icon: <PenTool className="h-10 w-10" />,
    title: "Arts & Creativity",
    description: "Comprehensive programs in visual arts, music, drama, and other creative pursuits.",
    color: "bg-indigo-50 text-indigo-600"
  }
];

export function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose St. Boston Edtech</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide a nurturing environment where students can excel academically and develop into well-rounded individuals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={cn("inline-flex p-3 rounded-lg mb-4", feature.color)}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}