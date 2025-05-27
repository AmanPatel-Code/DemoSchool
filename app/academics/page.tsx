'use client';

import { useState } from 'react';
import { Heading } from "@/components/ui/heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock data for timetable
const timetableData = {
  elementary: {
    grades: ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5"],
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    schedule: {
      "Grade 1": {
        "Monday": [
          { time: "8:00 - 8:45", subject: "Morning Assembly" },
          { time: "8:45 - 9:30", subject: "English" },
          { time: "9:30 - 10:15", subject: "Mathematics" },
          { time: "10:15 - 10:45", subject: "Break" },
          { time: "10:45 - 11:30", subject: "Science" },
          { time: "11:30 - 12:15", subject: "Art" },
          { time: "12:15 - 1:00", subject: "Lunch" },
          { time: "1:00 - 1:45", subject: "Physical Education" },
          { time: "1:45 - 2:30", subject: "Music" }
        ],
        "Tuesday": [
          { time: "8:00 - 8:45", subject: "Morning Assembly" },
          { time: "8:45 - 9:30", subject: "Mathematics" },
          { time: "9:30 - 10:15", subject: "English" },
          { time: "10:15 - 10:45", subject: "Break" },
          { time: "10:45 - 11:30", subject: "Social Studies" },
          { time: "11:30 - 12:15", subject: "Computer" },
          { time: "12:15 - 1:00", subject: "Lunch" },
          { time: "1:00 - 1:45", subject: "Library" },
          { time: "1:45 - 2:30", subject: "Dance" }
        ],
        "Wednesday": [
          { time: "8:00 - 8:45", subject: "Morning Assembly" },
          { time: "8:45 - 9:30", subject: "Science" },
          { time: "9:30 - 10:15", subject: "Mathematics" },
          { time: "10:15 - 10:45", subject: "Break" },
          { time: "10:45 - 11:30", subject: "English" },
          { time: "11:30 - 12:15", subject: "Social Studies" },
          { time: "12:15 - 1:00", subject: "Lunch" },
          { time: "1:00 - 1:45", subject: "Art" },
          { time: "1:45 - 2:30", subject: "Physical Education" }
        ],
        "Thursday": [
          { time: "8:00 - 8:45", subject: "Morning Assembly" },
          { time: "8:45 - 9:30", subject: "English" },
          { time: "9:30 - 10:15", subject: "Mathematics" },
          { time: "10:15 - 10:45", subject: "Break" },
          { time: "10:45 - 11:30", subject: "Science" },
          { time: "11:30 - 12:15", subject: "Computer" },
          { time: "12:15 - 1:00", subject: "Lunch" },
          { time: "1:00 - 1:45", subject: "Music" },
          { time: "1:45 - 2:30", subject: "Library" }
        ],
        "Friday": [
          { time: "8:00 - 8:45", subject: "Morning Assembly" },
          { time: "8:45 - 9:30", subject: "Mathematics" },
          { time: "9:30 - 10:15", subject: "English" },
          { time: "10:15 - 10:45", subject: "Break" },
          { time: "10:45 - 11:30", subject: "Science" },
          { time: "11:30 - 12:15", subject: "Social Studies" },
          { time: "12:15 - 1:00", subject: "Lunch" },
          { time: "1:00 - 1:45", subject: "Art" },
          { time: "1:45 - 2:30", subject: "Dance" }
        ]
      },
      // More grades would be defined here...
    }
  },
  middle: {
    grades: ["Grade 6", "Grade 7", "Grade 8"],
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    schedule: {
      "Grade 6": {
        "Monday": [
          { time: "8:00 - 8:45", subject: "Morning Assembly" },
          { time: "8:45 - 9:30", subject: "English" },
          { time: "9:30 - 10:15", subject: "Mathematics" },
          { time: "10:15 - 10:45", subject: "Break" },
          { time: "10:45 - 11:30", subject: "Science" },
          { time: "11:30 - 12:15", subject: "History" },
          { time: "12:15 - 1:00", subject: "Lunch" },
          { time: "1:00 - 1:45", subject: "Computer Science" },
          { time: "1:45 - 2:30", subject: "Physical Education" },
          { time: "2:30 - 3:15", subject: "Art" }
        ],
        // Other days would be defined here...
      },
      // More grades would be defined here...
    }
  },
  high: {
    grades: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    schedule: {
      "Grade 9": {
        "Monday": [
          { time: "8:00 - 8:45", subject: "Morning Assembly" },
          { time: "8:45 - 9:30", subject: "English Literature" },
          { time: "9:30 - 10:15", subject: "Advanced Mathematics" },
          { time: "10:15 - 10:45", subject: "Break" },
          { time: "10:45 - 11:30", subject: "Physics" },
          { time: "11:30 - 12:15", subject: "Chemistry" },
          { time: "12:15 - 1:00", subject: "Lunch" },
          { time: "1:00 - 1:45", subject: "Computer Science" },
          { time: "1:45 - 2:30", subject: "World History" },
          { time: "2:30 - 3:15", subject: "Physical Education" },
          { time: "3:15 - 4:00", subject: "Elective" }
        ],
        // Other days would be defined here...
      },
      // More grades would be defined here...
    }
  }
};

// Mock data for academic programs
const academicPrograms = {
  elementary: {
    title: "Elementary School (Grades 1-5)",
    description: "Our elementary program focuses on building a strong foundation in core subjects while fostering creativity and curiosity.",
    subjects: [
      "English Language Arts",
      "Mathematics",
      "Science",
      "Social Studies",
      "Art",
      "Music",
      "Physical Education",
      "Computer Literacy",
      "Library Skills"
    ],
    approach: "We use a hands-on, inquiry-based approach to learning that encourages students to explore, question, and discover. Small class sizes ensure personalized attention for each student.",
    highlights: [
      "Phonics-based reading program",
      "Hands-on science experiments",
      "Weekly field trips",
      "Annual science fair",
      "Reading buddies program"
    ]
  },
  middle: {
    title: "Middle School (Grades 6-8)",
    description: "Our middle school program helps students transition from elementary to high school, developing independent learning skills and deeper subject knowledge.",
    subjects: [
      "English Language & Literature",
      "Mathematics (Pre-Algebra, Algebra I)",
      "Life Science, Earth Science, Physical Science",
      "World Geography & History",
      "Foreign Language (Spanish or French)",
      "Visual & Performing Arts",
      "Physical Education & Health",
      "Computer Science & Technology",
      "Electives (Robotics, Debate, Journalism)"
    ],
    approach: "Our middle school program balances academic rigor with opportunities for exploration and growth. Students rotate between specialized teachers who are experts in their subject areas.",
    highlights: [
      "Annual science olympiad",
      "Model United Nations program",
      "Leadership development",
      "Community service projects",
      "Career exploration"
    ]
  },
  high: {
    title: "High School (Grades 9-12)",
    description: "Our high school program prepares students for college and career success through rigorous academics, leadership opportunities, and personalized guidance.",
    subjects: [
      "English Literature & Composition",
      "Mathematics (Algebra II, Geometry, Precalculus, Calculus)",
      "Biology, Chemistry, Physics, Environmental Science",
      "World History, U.S. History, Government, Economics",
      "Foreign Languages (Spanish, French, German, Mandarin)",
      "Visual & Performing Arts",
      "Physical Education & Health",
      "Computer Science & Technology",
      "AP and Honors courses",
      "Electives (Psychology, Business, Engineering)"
    ],
    approach: "Our high school program emphasizes critical thinking, research skills, and preparation for higher education. Students benefit from college counseling, AP and honors courses, and opportunities for internships.",
    highlights: [
      "Advanced Placement (AP) courses",
      "Dual enrollment with local colleges",
      "Comprehensive college counseling",
      "Internship opportunities",
      "Leadership and mentoring programs"
    ]
  }
};

export default function AcademicsPage() {
  const [activeLevel, setActiveLevel] = useState("elementary");
  const [selectedGrade, setSelectedGrade] = useState(timetableData[activeLevel as keyof typeof timetableData].grades[0]);
  const [selectedDay, setSelectedDay] = useState("Monday");

  const handleLevelChange = (level: string) => {
    setActiveLevel(level);
    setSelectedGrade(timetableData[level as keyof typeof timetableData].grades[0]);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore our academic programs, curriculum, and timetables designed to nurture future leaders
          </p>
        </div>
      </div>

      {/* Academic Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Heading 
            title="Academic Programs" 
            description="Comprehensive education from elementary through high school"
            centered
          />
          
          <Tabs defaultValue="elementary" className="max-w-5xl mx-auto" onValueChange={handleLevelChange}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 w-full max-w-md">
                <TabsTrigger value="elementary">Elementary</TabsTrigger>
                <TabsTrigger value="middle">Middle School</TabsTrigger>
                <TabsTrigger value="high">High School</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="elementary" className="mt-6">
              <div className="bg-pink-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-pink-800 mb-3">{academicPrograms.elementary.title}</h2>
                <p className="text-gray-700 mb-6">{academicPrograms.elementary.description}</p>
                
                <h3 className="text-xl font-semibold text-pink-700 mb-3">Core Subjects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                  {academicPrograms.elementary.subjects.map((subject, index) => (
                    <div key={index} className="flex items-center">
                      <span className="h-2 w-2 bg-pink-500 rounded-full mr-2"></span>
                      <span className="text-gray-700">{subject}</span>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold text-pink-700 mb-3">Our Approach</h3>
                <p className="text-gray-700 mb-6">{academicPrograms.elementary.approach}</p>
                
                <h3 className="text-xl font-semibold text-pink-700 mb-3">Program Highlights</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                  {academicPrograms.elementary.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="middle" className="mt-6">
              <div className="bg-pink-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-pink-800 mb-3">{academicPrograms.middle.title}</h2>
                <p className="text-gray-700 mb-6">{academicPrograms.middle.description}</p>
                
                <h3 className="text-xl font-semibold text-pink-700 mb-3">Core Subjects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                  {academicPrograms.middle.subjects.map((subject, index) => (
                    <div key={index} className="flex items-center">
                      <span className="h-2 w-2 bg-pink-500 rounded-full mr-2"></span>
                      <span className="text-gray-700">{subject}</span>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold text-pink-700 mb-3">Our Approach</h3>
                <p className="text-gray-700 mb-6">{academicPrograms.middle.approach}</p>
                
                <h3 className="text-xl font-semibold text-pink-700 mb-3">Program Highlights</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                  {academicPrograms.middle.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="high" className="mt-6">
              <div className="bg-pink-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-pink-800 mb-3">{academicPrograms.high.title}</h2>
                <p className="text-gray-700 mb-6">{academicPrograms.high.description}</p>
                
                <h3 className="text-xl font-semibold text-pink-700 mb-3">Core Subjects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                  {academicPrograms.high.subjects.map((subject, index) => (
                    <div key={index} className="flex items-center">
                      <span className="h-2 w-2 bg-pink-500 rounded-full mr-2"></span>
                      <span className="text-gray-700">{subject}</span>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold text-pink-700 mb-3">Our Approach</h3>
                <p className="text-gray-700 mb-6">{academicPrograms.high.approach}</p>
                
                <h3 className="text-xl font-semibold text-pink-700 mb-3">Program Highlights</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                  {academicPrograms.high.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Timetable Section */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <Heading 
            title="Class Timetables" 
            description="Weekly schedules for all grade levels"
            centered
          />
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Grade</label>
                  <select 
                    value={selectedGrade}
                    onChange={(e) => setSelectedGrade(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  >
                    {timetableData[activeLevel as keyof typeof timetableData].grades.map((grade) => (
                      <option key={grade} value={grade}>{grade}</option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Day</label>
                  <select 
                    value={selectedDay}
                    onChange={(e) => setSelectedDay(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  >
                    {timetableData[activeLevel as keyof typeof timetableData].days.map((day) => (
                      <option key={day} value={day}>{day}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[200px]">Time</TableHead>
                      <TableHead>Subject</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {/* For simplicity, we're only showing Grade 1 Monday schedule */}
                    {timetableData.elementary.schedule["Grade 1"][selectedDay as keyof typeof timetableData.elementary.schedule["Grade 1"]].map((period, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{period.time}</TableCell>
                        <TableCell>
                          <div className={`
                            px-3 py-1 rounded-full inline-block
                            ${period.subject.includes("Break") || period.subject.includes("Lunch") || period.subject.includes("Assembly") 
                              ? "bg-gray-100 text-gray-800" 
                              : "bg-pink-100 text-pink-800"}
                          `}>
                            {period.subject}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="mt-6 text-center text-sm text-gray-500">
                <p>Note: Timetables are subject to change. Please check the school bulletin for any updates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Heading 
            title="Our Faculty" 
            description="Experienced educators dedicated to student success"
            centered
          />
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-pink-50 rounded-lg overflow-hidden shadow-sm">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Dr. Emily Watson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-pink-800 mb-1">Dr. Emily Watson</h3>
                  <p className="text-pink-600 mb-3">Head of Science Department</p>
                  <p className="text-gray-700 mb-3">
                    Ph.D. in Physics with over 15 years of teaching experience. Specializes in making complex scientific concepts accessible and engaging for students.
                  </p>
                  <div className="flex space-x-2">
                    <div className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs">Physics</div>
                    <div className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs">Chemistry</div>
                    <div className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs">STEM</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-pink-50 rounded-lg overflow-hidden shadow-sm">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Prof. Michael Roberts" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-pink-800 mb-1">Prof. Michael Roberts</h3>
                  <p className="text-pink-600 mb-3">Mathematics Department</p>
                  <p className="text-gray-700 mb-3">
                    Master's in Mathematics Education with a focus on innovative teaching methods. Dedicated to helping students develop strong problem-solving skills.
                  </p>
                  <div className="flex space-x-2">
                    <div className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs">Algebra</div>
                    <div className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs">Calculus</div>
                    <div className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs">Geometry</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-pink-50 rounded-lg overflow-hidden shadow-sm">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Ms. Jennifer Lee" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-pink-800 mb-1">Ms. Jennifer Lee</h3>
                  <p className="text-pink-600 mb-3">English Literature</p>
                  <p className="text-gray-700 mb-3">
                    M.A. in English Literature with expertise in contemporary and classic works. Passionate about fostering critical thinking and creative writing skills.
                  </p>
                  <div className="flex space-x-2">
                    <div className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs">Literature</div>
                    <div className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs">Creative Writing</div>
                    <div className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs">Debate</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <p className="text-gray-700 mb-6">
                Our faculty members are dedicated professionals with advanced degrees and extensive experience in their fields. They regularly participate in professional development to stay current with the latest teaching methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}