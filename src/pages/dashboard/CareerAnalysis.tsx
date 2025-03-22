import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from "react-helmet-async";
import { Brain, GraduationCap, Briefcase, TrendingUp } from "lucide-react";

function CareerAnalysis() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Career Analysis | AI College Finder</title>
        <meta name="description" content="Get AI-powered career analysis and recommendations based on your interests and skills." />
        <meta name="keywords" content="career analysis, career guidance, career recommendations, skills assessment" />
        <meta property="og:title" content="Career Analysis | AI College Finder" />
        <meta property="og:description" content="Get AI-powered career analysis and recommendations." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Career Analysis</h1>
            <p className="text-xl text-gray-600">
              Discover your career path with AI-powered insights
            </p>
          </div>

          {/* Career Assessment Form */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Career Assessment</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Academic Stream
                </label>
                <select className="w-full p-2 border rounded-md">
                  <option>Science</option>
                  <option>Commerce</option>
                  <option>Arts</option>
                  <option>Engineering</option>
                  <option>Medical</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subjects of Interest
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span>Mathematics</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span>Physics</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span>Chemistry</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span>Biology</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span>Computer Science</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span>Economics</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Skills and Abilities
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span>Problem Solving</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span>Communication</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span>Leadership</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span>Creativity</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span>Analytical Thinking</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span>Team Work</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Career Interests
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span>Research</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span>Healthcare</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span>Technology</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span>Business</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span>Education</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span>Arts & Design</span>
                  </label>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                Generate Career Insights
              </button>
            </div>
          </div>

          {/* Career Insights Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Brain className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">AI-Powered Insights</h3>
              </div>
              <p className="text-gray-600">
                Based on your profile, our AI suggests careers in software development, data science, and research. These fields align well with your interests in technology and problem-solving.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">Educational Pathways</h3>
              </div>
              <p className="text-gray-600">
                Recommended courses: B.Tech in Computer Science, B.Sc in Data Science, or Integrated M.Tech programs. These will provide the foundation for your chosen career path.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Briefcase className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">Job Prospects</h3>
              </div>
              <p className="text-gray-600">
                High demand in tech industry with competitive salaries. Opportunities in both established companies and startups. Strong growth potential in emerging technologies.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">Market Trends</h3>
              </div>
              <p className="text-gray-600">
                Growing demand for AI/ML professionals. Increasing focus on data-driven decision making. Remote work opportunities expanding in tech sector.
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