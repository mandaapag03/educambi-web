import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, Users } from "lucide-react";

const Catalog = () => {
  const classes = [
    {
      title: "Advanced Mathematics",
      description: "Covers calculus, algebra, and trigonometry for college preparation",
      schedule: "Mon/Wed/Fri 9:00 AM",
      instructor: "Dr. Sarah Johnson",
      students: "20 enrolled",
      level: "Advanced"
    },
    {
      title: "World Literature",
      description: "Explore classic and contemporary works from different cultures",
      schedule: "Tue/Thu 10:30 AM",
      instructor: "Prof. Michael Chen",
      students: "15 enrolled",
      level: "Intermediate"
    },
    {
      title: "Physics Fundamentals",
      description: "Learn mechanics, thermodynamics, and wave motion with hands-on experiments",
      schedule: "Mon/Wed 2:00 PM",
      instructor: "Dr. Robert Miller",
      students: "18 enrolled",
      level: "Intermediate"
    },
    {
      title: "World History",
      description: "Journey through major historical events and civilizations",
      schedule: "Tue/Thu 1:00 PM",
      instructor: "Prof. Emily White",
      students: "25 enrolled",
      level: "Beginner"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-education-700">Course Catalog</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {classes.map((classItem, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-education-700">{classItem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{classItem.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{classItem.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <BookOpen className="w-4 h-4" />
                      <span>Level: {classItem.level}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{classItem.students}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm text-gray-500">Instructor: {classItem.instructor}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Catalog;