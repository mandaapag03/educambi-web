import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="w-full py-4 px-6 bg-white/80 backdrop-blur-sm fixed top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-education-700 to-education-500 bg-clip-text text-transparent">
          EduHub
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#" className="text-gray-600 hover:text-gray-900">Subjects</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Resources</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
          <Button variant="default" className="bg-education-500 hover:bg-education-700">
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
};