import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from "react-helmet-async";
import { Calendar, Clock, BookOpen, Target, Award, Users } from "lucide-react";

function EntranceExams() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Entrance Exams | AI College Finder</title>
        <meta name="description" content="Information about various entrance exams, preparation tips, and important dates." />
        <meta name="keywords" content="entrance exams, exam preparation, exam dates, study tips" />
        <meta property="og:title" content="Entrance Exams | AI College Finder" />
        <meta property="og:description" content="Information about various entrance exams and preparation tips." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Entrance Exams</h1>
            <p className="text-xl text-gray-600">
              Comprehensive information about various entrance examinations
            </p>
          </div>

          {/* Upcoming Exams Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">JEE Main 2024</h3>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600">Next Exam Date: April 15, 2024</p>
                  <p className="text-gray-600">Registration Deadline: March 20, 2024</p>
                  <p className="text-gray-600">Duration: 3 hours</p>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">NEET 2024</h3>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600">Next Exam Date: May 5, 2024</p>
                  <p className="text-gray-600">Registration Deadline: April 10, 2024</p>
                  <p className="text-gray-600">Duration: 3 hours</p>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">GATE 2024</h3>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600">Next Exam Date: February 10, 2024</p>
                  <p className="text-gray-600">Registration Deadline: January 15, 2024</p>
                  <p className="text-gray-600">Duration: 3 hours</p>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Exam Preparation Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Exam Preparation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Study Materials</h3>
                <p className="text-gray-600 text-sm">
                  Access comprehensive study materials and practice papers
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Time Management</h3>
                <p className="text-gray-600 text-sm">
                  Learn effective time management strategies
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Mock Tests</h3>
                <p className="text-gray-600 text-sm">
                  Practice with simulated exam papers
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-center font-semibold mb-2">Performance Analysis</h3>
                <p className="text-gray-600 text-sm">
                  Track your progress and identify areas for improvement
                </p>
              </div>
            </div>
          </div>

          {/* Success Stories Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-100 rounded-full p-2">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Rahul Kumar</h3>
                  <p className="text-gray-600">
                    "Secured AIR 1 in JEE Main 2023. The study materials and mock tests were extremely helpful in my preparation."
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-100 rounded-full p-2">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Priya Sharma</h3>
                  <p className="text-gray-600">
                    "Cleared NEET with excellent marks. The time management tips and practice papers were invaluable."
                  </p>
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

export default EntranceExams; 