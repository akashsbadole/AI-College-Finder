import React, { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from "react-helmet-async";
import { Building2, Search, MapPin, Star, GraduationCap, IndianRupee } from "lucide-react";

function CollegeSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>College Search | AI College Finder</title>
        <meta name="description" content="Find the perfect college with our AI-powered college search tool. Compare colleges, courses, and admission requirements." />
        <meta name="keywords" content="college search, college finder, college comparison, admission requirements, courses" />
        <meta property="og:title" content="College Search | AI College Finder" />
        <meta property="og:description" content="Find the perfect college with our AI-powered college search tool." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">College Search</h1>
            <p className="text-xl text-gray-600">
              Find your perfect college with AI-powered recommendations
            </p>
          </div>

          {/* Search Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search colleges by name, location, or course..."
                  className="w-full pl-10 p-2 border rounded-md"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <select className="p-2 border rounded-md">
                <option>All Courses</option>
                <option>Engineering</option>
                <option>Medical</option>
                <option>Arts</option>
                <option>Commerce</option>
              </select>
              <select className="p-2 border rounded-md">
                <option>All Locations</option>
                <option>Delhi</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
                <option>Chennai</option>
              </select>
            </div>
          </div>

          {/* Featured Colleges */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* College Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Building2 className="h-6 w-6 text-blue-600 mr-2" />
                    <h3 className="text-xl font-semibold">IIT Delhi</h3>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span className="text-sm text-gray-600">4.9</span>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>New Delhi, India</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    <span>Engineering, Technology</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <IndianRupee className="h-4 w-4 mr-2" />
                    <span>₹2.5L - ₹3.5L per year</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>

            {/* College Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Building2 className="h-6 w-6 text-blue-600 mr-2" />
                    <h3 className="text-xl font-semibold">AIIMS Delhi</h3>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span className="text-sm text-gray-600">4.8</span>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>New Delhi, India</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    <span>Medical, Healthcare</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <IndianRupee className="h-4 w-4 mr-2" />
                    <span>₹1.5L - ₹2.5L per year</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>

            {/* College Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Building2 className="h-6 w-6 text-blue-600 mr-2" />
                    <h3 className="text-xl font-semibold">SRCC Delhi</h3>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span className="text-sm text-gray-600">4.7</span>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>New Delhi, India</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    <span>Commerce, Arts</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <IndianRupee className="h-4 w-4 mr-2" />
                    <span>₹50K - ₹1L per year</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* AI Recommendations Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">AI-Powered Recommendations</h2>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-600 mb-4">
                Our AI analyzes your academic profile, interests, and preferences to recommend the best colleges for you.
              </p>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                Get Personalized Recommendations
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CollegeSearch; 