import { Header } from "@/components/Header";
import { SubjectCard } from "@/components/SubjectCard";
import { Button } from "@/components/ui/button";
import { Calculator, BookOpen, Flask, Globe, PenTool, Binary } from "lucide-react";

const Index = () => {
  const subjects = [
    {
      title: "Mathematics",
      description: "Master algebra, geometry, and calculus with interactive lessons",
      Icon: Calculator,
    },
    {
      title: "Literature",
      description: "Explore classic and contemporary works with expert analysis",
      Icon: BookOpen,
    },
    {
      title: "Science",
      description: "Dive into physics, chemistry, and biology through experiments",
      Icon: Flask,
    },
    {
      title: "History",
      description: "Journey through time with engaging historical narratives",
      Icon: Globe,
    },
    {
      title: "Arts",
      description: "Develop creativity through various artistic mediums",
      Icon: PenTool,
    },
    {
      title: "Computer Science",
      description: "Learn programming and digital literacy skills",
      Icon: Binary,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-r from-education-700 to-education-500 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">
              Your Journey to Academic Excellence Starts Here
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Access comprehensive high school courses, interactive materials, and expert guidance all in one place.
            </p>
            <Button size="lg" variant="secondary" className="text-education-700">
              Start Learning Now
            </Button>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Our Subjects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject) => (
              <SubjectCard key={subject.title} {...subject} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-education-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Expert Teachers</h3>
              <p className="text-gray-600">Learn from experienced educators passionate about their subjects</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Interactive Learning</h3>
              <p className="text-gray-600">Engage with dynamic content and practical exercises</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Flexible Schedule</h3>
              <p className="text-gray-600">Study at your own pace with 24/7 access to materials</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4">EduHub</h3>
            <p className="text-sm">Empowering students to achieve their academic goals</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Courses</a></li>
              <li><a href="#" className="hover:text-white">Resources</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;