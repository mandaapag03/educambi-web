import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Catalog = () => {
  const navigate = useNavigate();
  
  const classes = [
    {
      id: 1,
      title: "Advanced Mathematics",
      description: "Covers calculus, algebra, and trigonometry for college preparation",
      instructor: "Dr. Sarah Johnson",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "World Literature",
      description: "Explore classic and contemporary works from different cultures",
      instructor: "Prof. Michael Chen",
      image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "Physics Fundamentals",
      description: "Learn mechanics, thermodynamics, and wave motion with hands-on experiments",
      instructor: "Dr. Robert Miller",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 4,
      title: "World History",
      description: "Journey through major historical events and civilizations",
      instructor: "Prof. Emily White",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-education-700">Course Catalog</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {classes.map((classItem) => (
              <Card 
                key={classItem.id} 
                className="hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer"
                onClick={() => navigate(`/class/${classItem.id}`)}
              >
                <div className="relative h-48 w-full">
                  <img 
                    src={classItem.image} 
                    alt={classItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-education-700">{classItem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{classItem.description}</p>
                  
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