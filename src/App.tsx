import React, { useState } from 'react';
import { Search, GraduationCap, School, BookOpen, MapPin, IndianRupee, Users, MessageSquareMore, Building2, Award, BookCheck, BrainCircuit, Star, Trophy, Building, Globe2, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from './components/ui/button';

function App() {
  const [activeTab, setActiveTab] = useState('search');

  const featuredInstitutes = [
    {
      name: "IIT Delhi",
      type: "Engineering",
      ranking: "#1 in Engineering",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=500"
    },
    {
      name: "AIIMS Delhi",
      type: "Medical",
      ranking: "#1 in Medical",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=500"
    },
    {
      name: "IIM Ahmedabad",
      type: "Management",
      ranking: "#1 in Management",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=500"
    },
    {
      name: "Delhi Public School",
      type: "CBSE School",
      ranking: "Top Rated School",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=500"
    }
  ];

  const studentReviews = [
    {
      name: "Priya Sharma",
      institute: "IIT Bombay",
      review: "The AI recommendations were spot on! Got into my dream college.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
    },
    {
      name: "Rahul Kumar",
      institute: "AIIMS Delhi",
      review: "The exam preparation guides helped me crack NEET in my first attempt.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
    },
    {
      name: "Anjali Patel",
      institute: "IIM Bangalore",
      review: "Excellent resource for CAT preparation and college selection.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">भारत EduAI</h1>
            </div>
            <nav className="flex space-x-4">
              <Button variant="ghost">Sign In</Button>
              <Button>Get Started</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
              Discover Top Indian Colleges & Schools
            </h2>
            <p className="mt-4 text-xl text-indigo-100">
              AI-powered recommendations for JEE, NEET, CUET, and more
            </p>
          </div>

          {/* Search Bar */}
          <div className="mt-8">
            <div className="max-w-3xl mx-auto">
              <div className="flex bg-white rounded-lg shadow-lg p-2">
                <input
                  type="text"
                  placeholder="Search IITs, NITs, Medical Colleges, Schools..."
                  className="flex-1 px-4 py-2 outline-none"
                />
                <Button className="flex items-center space-x-2">
                  <Search className="h-5 w-5" />
                  <span>Search</span>
                </Button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <Button variant="secondary" size="sm">IIT</Button>
                <Button variant="secondary" size="sm">NIT</Button>
                <Button variant="secondary" size="sm">AIIMS</Button>
                <Button variant="secondary" size="sm">CBSE Schools</Button>
                <Button variant="secondary" size="sm">State Boards</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <QuickLink icon={<Building2 />} text="Top Engineering Colleges" />
            <QuickLink icon={<BookCheck />} text="Medical Colleges" />
            <QuickLink icon={<School />} text="Best CBSE Schools" />
            <QuickLink icon={<Award />} text="Entrance Exams" />
          </div>
        </div>
      </div>

      {/* Featured Institutes */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Institutes</h2>
            <p className="mt-4 text-lg text-gray-600">Discover India's top-rated educational institutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredInstitutes.map((institute, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src={institute.image} alt={institute.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{institute.name}</h3>
                  <p className="text-gray-600">{institute.type}</p>
                  <div className="mt-2 flex items-center">
                    <Trophy className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm text-gray-500">{institute.ranking}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Discover Your Path to Success</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<BrainCircuit className="h-8 w-8 text-indigo-600" />}
            title="AI-Powered JEE/NEET Predictions"
            description="Get your chances of admission in top colleges based on your scores and past trends"
          />
          <FeatureCard
            icon={<BookOpen className="h-8 w-8 text-indigo-600" />}
            title="Exam Preparation Guide"
            description="Personalized study plans for JEE, NEET, CUET, and other entrance exams"
          />
          <FeatureCard
            icon={<MapPin className="h-8 w-8 text-indigo-600" />}
            title="College Locator"
            description="Find top institutions in your city or state with detailed rankings"
          />
          <FeatureCard
            icon={<IndianRupee className="h-8 w-8 text-indigo-600" />}
            title="Scholarship Guide"
            description="Discover scholarships for SC/ST/OBC/EWS categories and merit-based awards"
          />
          <FeatureCard
            icon={<Users className="h-8 w-8 text-indigo-600" />}
            title="Alumni Connect"
            description="Learn from successful alumni from IITs, NITs, AIIMS, and top schools"
          />
          <FeatureCard
            icon={<MessageSquareMore className="h-8 w-8 text-indigo-600" />}
            title="Expert Counselling"
            description="Get guidance from experienced counsellors for stream and college selection"
          />
        </div>
      </div>

      {/* Student Reviews */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Student Success Stories</h2>
            <p className="mt-4 text-lg text-gray-600">Hear from students who achieved their dreams</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentReviews.map((review, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{review.name}</h3>
                    <p className="text-gray-600 text-sm">{review.institute}</p>
                  </div>
                </div>
                <p className="text-gray-700">{review.review}</p>
                <div className="mt-4 flex text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatCard number="1000+" text="Top Colleges" />
            <StatCard number="5000+" text="CBSE Schools" />
            <StatCard number="50,000+" text="Student Success Stories" />
            <StatCard number="100+" text="Entrance Exams" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-8 w-8 text-indigo-400" />
                <span className="text-2xl font-bold">भारत EduAI</span>
              </div>
              <p className="text-gray-400">Empowering students to make informed decisions about their education journey.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">College Finder</a></li>
                <li><a href="#" className="hover:text-white">School Directory</a></li>
                <li><a href="#" className="hover:text-white">Exam Calendar</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Study Materials</a></li>
                <li><a href="#" className="hover:text-white">Career Guide</a></li>
                <li><a href="#" className="hover:text-white">Counselling</a></li>
                <li><a href="#" className="hover:text-white">Scholarships</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>+91 1800-XXX-XXXX</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>support@bharateduai.com</span>
                </li>
              </ul>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} भारत EduAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-4">
        {icon}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="mt-4 text-gray-600">{description}</p>
    </div>
  );
}

function QuickLink({ icon, text }) {
  return (
    <Button
      variant="ghost"
      className="w-full h-auto py-4 flex flex-col items-center space-y-2 hover:bg-indigo-50"
    >
      <span className="text-indigo-600">{icon}</span>
      <span className="text-sm text-gray-700">{text}</span>
    </Button>
  );
}

function StatCard({ number, text }) {
  return (
    <div className="p-4">
      <div className="text-3xl font-bold text-indigo-600">{number}</div>
      <div className="text-sm text-gray-600 mt-1">{text}</div>
    </div>
  );
}

export default App;