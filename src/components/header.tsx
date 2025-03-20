import { GraduationCap } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

function header() {
  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">
                <Link to="/">भारत EduAI</Link>
              </h1>
            </div>
            <nav className="flex space-x-4">
              <Button variant="ghost">Sign In</Button>
              <Button>Get Started</Button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default header;
