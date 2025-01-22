import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-education-700">
            EduHub
          </Link>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link to="/catalog">
              <Button variant="outline">Browse Courses</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};