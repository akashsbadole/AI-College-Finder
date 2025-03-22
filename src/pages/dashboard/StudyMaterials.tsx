import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from "react-helmet-async";
import { Search, Book, FileText, Clock, Star, Download } from "lucide-react";

function StudyMaterials() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Study Materials | AI College Finder</title>
        <meta name="description" content="Access comprehensive study materials, notes, and practice papers for various subjects." />
        <meta name="keywords" content="study materials, notes, practice papers, educational resources" />
        <meta property="og:title" content="Study Materials | AI College Finder" />
        <meta property="og:description" content="Access comprehensive study materials and resources." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Study Materials</h1>
            <p className="text-xl text-gray-600">
              Access comprehensive study resources for your preparation
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search study materials..."
                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <select className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Subjects</option>
                  <option>Mathematics</option>
                  <option>Physics</option>
                  <option>Chemistry</option>
                  <option>Biology</option>
                  <option>Computer Science</option>
                </select>
                <select className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Types</option>
                  <option>Notes</option>
                  <option>Practice Papers</option>
                  <option>Study Guides</option>
                  <option>Video Lectures</option>
                </select>
              </div>
            </div>
          </div>

          {/* Featured Materials Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Book className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">Physics Notes</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Comprehensive notes covering mechanics, thermodynamics, and electromagnetism.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span className="text-gray-600">4.8</span>
                  </div>
                  <button className="flex items-center text-blue-600 hover:text-blue-700">
                    <Download className="h-5 w-5 mr-1" />
                    Download
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FileText className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">Math Practice Papers</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Previous year question papers with detailed solutions and explanations.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span className="text-gray-600">4.9</span>
                  </div>
                  <button className="flex items-center text-blue-600 hover:text-blue-700">
                    <Download className="h-5 w-5 mr-1" />
                    Download
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Book className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">Chemistry Study Guide</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Complete study guide for organic and inorganic chemistry with practice problems.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span className="text-gray-600">4.7</span>
                  </div>
                  <button className="flex items-center text-blue-600 hover:text-blue-700">
                    <Download className="h-5 w-5 mr-1" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="font-medium">Downloaded Physics Notes</p>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-700">View</button>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="font-medium">Viewed Math Practice Papers</p>
                    <p className="text-sm text-gray-500">5 hours ago</p>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-700">View</button>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="font-medium">Downloaded Chemistry Guide</p>
                    <p className="text-sm text-gray-500">1 day ago</p>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-700">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StudyMaterials; 