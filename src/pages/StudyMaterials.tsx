import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import { BookOpen, Download, Clock, Star, Bookmark, Share2 } from "lucide-react";

function StudyMaterials() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Study Materials | AI College Finder</title>
        <meta name="description" content="Access comprehensive study materials, notes, and resources for various subjects and entrance exams." />
        <meta name="keywords" content="study materials, notes, resources, exam preparation, educational content" />
        <meta property="og:title" content="Study Materials | AI College Finder" />
        <meta property="og:description" content="Access comprehensive study materials, notes, and resources for various subjects and entrance exams." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Study Materials</h1>
            <p className="text-xl text-gray-600">
              Access comprehensive study resources for your academic journey
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Search study materials..."
                className="flex-1 p-2 border rounded-md"
              />
              <select className="p-2 border rounded-md">
                <option>All Subjects</option>
                <option>Mathematics</option>
                <option>Physics</option>
                <option>Chemistry</option>
                <option>Biology</option>
              </select>
              <select className="p-2 border rounded-md">
                <option>All Types</option>
                <option>Notes</option>
                <option>Practice Papers</option>
                <option>Video Lectures</option>
                <option>Study Guides</option>
              </select>
            </div>
          </div>

          {/* Featured Materials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Material Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <BookOpen className="h-6 w-6 text-blue-600 mr-2" />
                    <h3 className="text-xl font-semibold">Physics Notes</h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <Bookmark className="h-5 w-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <Share2 className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Comprehensive notes covering mechanics, thermodynamics, and electromagnetism.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span className="text-sm text-gray-600">4.8 (120 reviews)</span>
                  </div>
                  <button className="flex items-center text-blue-600 hover:text-blue-700">
                    <Download className="h-5 w-5 mr-1" />
                    Download
                  </button>
                </div>
              </div>
            </div>

            {/* Material Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <BookOpen className="h-6 w-6 text-blue-600 mr-2" />
                    <h3 className="text-xl font-semibold">Math Practice Papers</h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <Bookmark className="h-5 w-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <Share2 className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Previous year question papers with detailed solutions for mathematics.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span className="text-sm text-gray-600">4.9 (85 reviews)</span>
                  </div>
                  <button className="flex items-center text-blue-600 hover:text-blue-700">
                    <Download className="h-5 w-5 mr-1" />
                    Download
                  </button>
                </div>
              </div>
            </div>

            {/* Material Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <BookOpen className="h-6 w-6 text-blue-600 mr-2" />
                    <h3 className="text-xl font-semibold">Chemistry Study Guide</h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <Bookmark className="h-5 w-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <Share2 className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Complete study guide covering organic, inorganic, and physical chemistry.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span className="text-sm text-gray-600">4.7 (95 reviews)</span>
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
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Recent Activity</h2>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Downloaded Physics Notes</p>
                    <p className="text-xs text-gray-400">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Viewed Math Practice Papers</p>
                    <p className="text-xs text-gray-400">5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Bookmarked Chemistry Guide</p>
                    <p className="text-xs text-gray-400">1 day ago</p>
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

export default StudyMaterials; 