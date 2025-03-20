import React from "react";
import { useLocation } from "react-router-dom";
import {
  Star,
  MapPin,
  Book,
  Building2,
  IndianRupee,
  Award,
} from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";

const CollegeDetails = () => {
  const location = useLocation();
  const college = location.state?.college;

  if (!college) {
    return <div>No college data available</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* College Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white p-8">
            <h1 className="text-3xl font-bold mb-2">{college.collegeName}</h1>
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                {college.rating}
              </span>
              <span className="flex items-center">
                <MapPin className="h-5 w-5 mr-1" />
                {college.city}, {college.state}
              </span>
            </div>
          </div>

          {/* College Details */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">
                    Key Information
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Building2 className="h-5 w-5 text-indigo-600" />
                      <div>
                        <p className="text-sm text-gray-600">Established</p>
                        <p className="font-medium">{college.establishedYear}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="h-5 w-5 text-indigo-600" />
                      <div>
                        <p className="text-sm text-gray-600">Type</p>
                        <p className="font-medium">{college.collegeType}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Book className="h-5 w-5 text-indigo-600" />
                      <div>
                        <p className="text-sm text-gray-600">University</p>
                        <p className="font-medium">{college.university}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <IndianRupee className="h-5 w-5 text-indigo-600" />
                      <div>
                        <p className="text-sm text-gray-600">Average Fees</p>
                        <p className="font-medium">{college.averageFees}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">About</h2>
                  <p className="text-gray-600">{college.details}</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">
                    Courses Offered
                  </h2>
                  <div className="grid grid-cols-2 gap-2">
                    {college.courses.map((course: string, index: number) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg">
                        {course}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">Facilities</h2>
                  <div className="grid grid-cols-2 gap-2">
                    {college.facilities.map(
                      (facility: string, index: number) => (
                        <div key={index} className="bg-gray-50 p-3 rounded-lg">
                          {facility}
                        </div>
                      )
                    )}
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
};

export default CollegeDetails;
