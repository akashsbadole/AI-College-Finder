import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import { Brain, GraduationCap, Briefcase, TrendingUp, Target } from "lucide-react";

function CareerAnalysis() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Career Analysis | AI College Finder</title>
        <meta name="description" content="Get personalized career analysis and recommendations based on your interests, skills, and academic performance." />
        <meta name="keywords" content="career analysis, career guidance, career planning, job prospects, skill assessment" />
        <meta property="og:title" content="Career Analysis | AI College Finder" />
        <meta property="og:description" content="Get personalized career analysis and recommendations based on your interests, skills, and academic performance." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Career Analysis</h1>
            <p className="text-xl text-gray-600">
              Discover your perfect career path with AI-powered insights
            </p>
          </div>

          {/* Career Assessment Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Career Assessment</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Academic Stream
                </label>
                <select className="w-full p-2 border rounded-md">
                  <option>Science</option>
                  <option>Commerce</option>
                  <option>Arts</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subjects of Interest
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science", "Economics"].map((subject) => (
                    <label key={subject} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>{subject}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Skills & Abilities
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {["Problem Solving", "Communication", "Leadership", "Creativity", "Analytical", "Technical"].map((skill) => (
                    <label key={skill} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>{skill}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Career Interests
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {["Research", "Business", "Technology", "Healthcare", "Education", "Arts"].map((interest) => (
                    <label key={interest} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Analyze Career Path
              </button>
            </form>
          </div>

          {/* Career Insights Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Brain className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">AI-Powered Insights</h3>
              </div>
              <p className="text-gray-600">
                Our AI analyzes your profile to provide personalized career recommendations based on your interests, skills, and market trends.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">Educational Pathways</h3>
              </div>
              <p className="text-gray-600">
                Discover the best educational paths and institutions that align with your career goals.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Briefcase className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">Job Prospects</h3>
              </div>
              <p className="text-gray-600">
                Get insights into job opportunities, salary ranges, and growth potential in your chosen field.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">Market Trends</h3>
              </div>
              <p className="text-gray-600">
                Stay updated with the latest industry trends and future growth opportunities in your field of interest.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CareerAnalysis; 