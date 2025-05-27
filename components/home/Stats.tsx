import { Users, BookOpen, Trophy, MapPin } from 'lucide-react';

const stats = [
  {
    icon: <Users className="h-8 w-8 text-pink-600" />,
    value: "2,500+",
    label: "Students"
  },
  {
    icon: <BookOpen className="h-8 w-8 text-pink-600" />,
    value: "120+",
    label: "Dedicated Faculty"
  },
  {
    icon: <Trophy className="h-8 w-8 text-pink-600" />,
    value: "150+",
    label: "Awards & Recognitions"
  },
  {
    icon: <MapPin className="h-8 w-8 text-pink-600" />,
    value: "25+",
    label: "Years of Excellence"
  }
];

export function Stats() {
  return (
    <section className="py-16 bg-pink-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Our Impact in Numbers</h2>
          <p className="text-pink-100">The growth and achievements of St. Boston Edtech over the years</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-pink-700/40 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
              <p className="text-pink-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}