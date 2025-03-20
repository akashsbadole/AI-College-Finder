import React, { useState } from "react";
import {
  Search,
  GraduationCap,
  School,
  BookOpen,
  MapPin,
  IndianRupee,
  Users,
  MessageSquareMore,
  Building2,
  Award,
  BookCheck,
  BrainCircuit,
  Star,
  Trophy,
  Building,
  Globe2,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button } from "./components/ui/button";
import { getCollegeRecommendations } from "./lib/gemini";
import EngineeringColleges from "./pages/EngineeringColleges";
import Header from "./components/header";
import Footer from "./components/footer";
import BestCBSESchools from "./pages/BestCBSESchools";
import EntranceExams from "./pages/EntranceExams";
import MedicalColleges from "./pages/MedicalColleges";
import HeroSection from "./components/HeroSection";

function App() {
  const [activeTab, setActiveTab] = useState("search");
  const [collegeSuggestions, setCollegeSuggestions] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const featuredInstitutes = [
    {
      name: "IIT Delhi",
      type: "Engineering",
      ranking: "#1 in Engineering",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=500",
    },
    {
      name: "AIIMS Delhi",
      type: "Medical",
      ranking: "#1 in Medical",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=500",
    },
    {
      name: "IIM Ahmedabad",
      type: "Management",
      ranking: "#1 in Management",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=500",
    },
    {
      name: "Delhi Public School",
      type: "CBSE School",
      ranking: "Top Rated School",
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=500",
    },
  ];

  const studentReviews = [
    {
      name: "PraJwal Singh",
      institute: "IIT Bombay",
      review: "The AI recommendations were spot on! Got into my dream college.",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
    },
    {
      name: "Rahul Kumar",
      institute: "AIIMS Delhi",
      review:
        "The exam preparation guides helped me crack NEET in my first attempt.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
    },
    {
      name: "Anjali Patel",
      institute: "IIM Bangalore",
      review: "Excellent resource for CAT preparation and college selection.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100",
    },
  ];

  const handleCollegeInputChange = async (event: {
    target: { value: any };
  }) => {
    const query = event.target.value;
    setSearchQuery(query);

    try {
      if (query.length > 2) {
        setIsLoading(true);
        const suggestions = await getCollegeRecommendations({
          examType: "",
          score: 0,
          location: "",
          budget: 0,
          stream: query,
        });
        setCollegeSuggestions(suggestions);
      } else {
        setCollegeSuggestions([]);
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setCollegeSuggestions(["Error fetching college suggestions"]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchClick = async () => {
    console.log("Search Click:", searchQuery); // Debug log
    if (searchQuery.length > 2) {
      const suggestions = await getCollegeRecommendations({
        examType: "",
        score: 0,
        location: "",
        budget: 0,
        stream: searchQuery,
      });
      console.log("Suggestions from search click:", suggestions); // Debug log
      setCollegeSuggestions(Array.isArray(suggestions) ? suggestions : []);
    } else {
      setCollegeSuggestions([]);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/engineering-colleges" element={<EngineeringColleges />} />
        <Route path="/best-CBSE-schools" element={<BestCBSESchools />} />
        <Route path="/entrance-exams" element={<EntranceExams />} />
        <Route path="/medical-colleges" element={<MedicalColleges />} />
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-50">
              {/* Header */}
              <Header />

              {/* Hero Section */}
              <div className="bg-gradient-to-r from-indigo-600 to-blue-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                  <HeroSection />

                  {/* Search Bar */}
                  <div className="mt-8 relative">
                    <div className="max-w-3xl mx-auto">
                      <div className="flex bg-white rounded-lg shadow-lg p-2">
                        <input
                          type="text"
                          placeholder="Search IITs, NITs, Medical Colleges, Schools..."
                          className="flex-1 px-4 py-2 outline-none"
                          value={searchQuery}
                          onChange={handleCollegeInputChange}
                        />
                        <Button
                          className="flex items-center space-x-2"
                          onClick={handleSearchClick}
                        >
                          <Search className="h-5 w-5" />
                          <span>Search</span>
                        </Button>
                      </div>

                      {/* Suggestions Popup */}
                      {collegeSuggestions.length > 0 && (
                        <div className="absolute z-50 w-3/5 mt-2 bg-white rounded-lg shadow-xl border border-gray-200">
                          <ul className="max-h-[80vh] overflow-auto">
                            {isLoading ? (
                              <li className="px-4 py-3 text-gray-500">
                                Loading college details...
                              </li>
                            ) : (
                              collegeSuggestions.map((college, index) => (
                                <li
                                  key={index}
                                  className="p-4 hover:bg-gray-50 border-b last:border-b-0"
                                >
                                  <div className="grid gap-2">
                                    <h3 className="font-semibold text-lg text-indigo-600">
                                      {college.collegeName}
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                      <div>
                                        <p>
                                          <span className="font-medium">
                                            Established:
                                          </span>{" "}
                                          {college.establishedYear}
                                        </p>
                                        <p>
                                          <span className="font-medium">
                                            Rating:
                                          </span>{" "}
                                          {college.rating} ⭐
                                        </p>
                                        <p>
                                          <span className="font-medium">
                                            University:
                                          </span>{" "}
                                          {college.university}
                                        </p>
                                        <p>
                                          <span className="font-medium">
                                            Type:
                                          </span>{" "}
                                          {college.collegeType}
                                        </p>
                                      </div>
                                      <div>
                                        <p>
                                          <span className="font-medium">
                                            Location:
                                          </span>{" "}
                                          {college.city}, {college.state}
                                        </p>
                                        <p>
                                          <span className="font-medium">
                                            Average Fees:
                                          </span>{" "}
                                          {college.averageFees}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="mt-2">
                                      <p>
                                        <span className="font-medium">
                                          Courses:
                                        </span>
                                      </p>
                                      <div className="flex flex-wrap gap-1 mt-1">
                                        {college.courses.map(
                                          (course: string, i: number) => (
                                            <span
                                              key={i}
                                              className="bg-gray-100 px-2 py-1 rounded text-sm"
                                            >
                                              {course}
                                            </span>
                                          )
                                        )}
                                      </div>
                                    </div>
                                    <div className="mt-2">
                                      <p>
                                        <span className="font-medium">
                                          Facilities:
                                        </span>
                                      </p>
                                      <div className="flex flex-wrap gap-1 mt-1">
                                        {college.facilities.map(
                                          (facility: string, i: number) => (
                                            <span
                                              key={i}
                                              className="bg-gray-100 px-2 py-1 rounded text-sm"
                                            >
                                              {facility}
                                            </span>
                                          )
                                        )}
                                      </div>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-600">
                                      {college.details}
                                    </p>
                                  </div>
                                </li>
                              ))
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Link to="/engineering-colleges">
                      <QuickLink
                        icon={<Building2 />}
                        text="Top Engineering Colleges"
                      />
                    </Link>
                    <Link to="/medical-colleges">
                      <QuickLink icon={<BookCheck />} text="Medical Colleges" />
                    </Link>
                    <Link to="/best-CBSE-schools">
                      <QuickLink icon={<School />} text="Best CBSE Schools" />
                    </Link>
                    <Link to="/entrance-exams">
                      <QuickLink icon={<Award />} text="Entrance Exams" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Featured Institutes */}
              <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">
                      Featured Institutes
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                      Discover India's top-rated educational institutions
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredInstitutes.map((institute, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <img
                          src={institute.image}
                          alt={institute.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {institute.name}
                          </h3>
                          <p className="text-gray-600">{institute.type}</p>
                          <div className="mt-2 flex items-center">
                            <Trophy className="h-4 w-4 text-yellow-500 mr-1" />
                            <span className="text-sm text-gray-500">
                              {institute.ranking}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Discover Your Path to Success
                </h2>
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
                    icon={
                      <MessageSquareMore className="h-8 w-8 text-indigo-600" />
                    }
                    title="Expert Counselling"
                    description="Get guidance from experienced counsellors for stream and college selection"
                  />
                </div>
              </div>

              {/* Student Reviews */}
              <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">
                      Student Success Stories
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                      Hear from students who achieved their dreams
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {studentReviews.map((review, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg shadow-md p-6"
                      >
                        <div className="flex items-center mb-4">
                          <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-12 h-12 rounded-full mr-4"
                          />
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {review.name}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {review.institute}
                            </p>
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
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
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

function QuickLink({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="w-full h-auto py-4 flex flex-col items-center space-y-2 hover:bg-indigo-50 cursor-pointer">
      <span className="text-indigo-600">{icon}</span>
      <span className="text-sm text-gray-700">{text}</span>
    </div>
  );
}

function StatCard({ number, text }: { number: string; text: string }) {
  return (
    <div className="p-4">
      <div className="text-3xl font-bold text-indigo-600">{number}</div>
      <div className="text-sm text-gray-600 mt-1">{text}</div>
    </div>
  );
}

export default App;
