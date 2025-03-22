import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import { School, Search, MapPin, Star, Award, Users } from "lucide-react";

function SchoolSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>School Search | AI College Finder</title>
        <meta name="description" content="Find the best schools with our AI-powered school search tool. Compare schools, facilities, and academic performance." />
        <meta name="keywords" content="school search, school finder, CBSE schools, school comparison, academic performance" />
        <meta property="og:title" content="School Search | AI College Finder" />
        <meta property="og:description" content="Find the best schools with our AI-powered school search tool." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">School Search</h1>
            <p className="text-xl text-gray-600">
              Find the perfect school for your child's education
            </p>
          </div>

          {/* Search Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search schools by name or location..."
                  className="w-full pl-10 p-2 border rounded-md"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <select className="p-2 border rounded-md">
                <option>All Boards</option>
                <option>CBSE</option>
                <option>ICSE</option>
                <option>State Board</option>
                <option>International</option>
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

          {/* Featured Schools */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* School Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <School className="h-6 w-6 text-blue-600 mr-2" />
                    <h3 className="text-xl font-semibold">DPS RK Puram</h3>
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
                    <Award className="h-4 w-4 mr-2" />
                    <span>CBSE Board</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>5000+ Students</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>

            {/* School Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <School className="h-6 w-6 text-blue-600 mr-2" />
                    <h3 className="text-xl font-semibold">DAV Public School</h3>
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
                    <Award className="h-4 w-4 mr-2" />
                    <span>CBSE Board</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>4000+ Students</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>

            {/* School Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <School className="h-6 w-6 text-blue-600 mr-2" />
                    <h3 className="text-xl font-semibold">Modern School</h3>
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
                    <Award className="h-4 w-4 mr-2" />
                    <span>CBSE Board</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>3500+ Students</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* School Rankings Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Top Ranked Schools</h2>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-blue-600 mr-4">1</span>
                    <div>
                      <h3 className="font-semibold">DPS RK Puram</h3>
                      <p className="text-sm text-gray-600">New Delhi</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span>4.9</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-blue-600 mr-4">2</span>
                    <div>
                      <h3 className="font-semibold">DAV Public School</h3>
                      <p className="text-sm text-gray-600">New Delhi</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span>4.8</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-blue-600 mr-4">3</span>
                    <div>
                      <h3 className="font-semibold">Modern School</h3>
                      <p className="text-sm text-gray-600">New Delhi</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span>4.7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SchoolSearch; 