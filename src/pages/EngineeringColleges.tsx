import React, { useState, useEffect, useMemo } from "react";
import { Search, X } from "lucide-react";
import { Button } from "../components/ui/button";
import Header from "../components/header";
import Footer from "../components/footer";

interface College {
  Id: number;
  "College Name": string;
  "Genders Accepted": string;
  "Campus Size": string;
  "Total Student Enrollments": number;
  "Total Faculty": number;
  "Established Year": number;
  Rating: number;
  University: string;
  Courses: string;
  Facilities: string;
  City: string;
  State: string;
  Country: string;
  "College Type": string;
  "Average Fees": number;
}

interface CollegesResponse {
  colleges: College[];
}

export default function EngineeringColleges() {
  const [colleges, setColleges] = useState<College[]>([]);
  const [displayedColleges, setDisplayedColleges] = useState<College[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  const [error, setError] = useState<string>("");
  const [page, setPage] = useState(1);
  const collegesPerPage = 10;

  useEffect(() => {
    setIsLoading(true);
    fetch("/EngineeringCollegesInIndia.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch colleges data");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Raw data:", data); // Debug log to see full response
        if (!data || !Array.isArray(data)) {
          throw new Error("Invalid data format");
        }
        setColleges(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching colleges:", error);
        setError("Failed to load colleges data: " + error.message);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = (colleges || []).filter((college) => {
      if (!college) return false;
      const query = searchQuery.toLowerCase().trim();
      return (
        college["College Name"]?.toLowerCase().includes(query) ||
        college.City?.toLowerCase().includes(query) ||
        college.State?.toLowerCase().includes(query) ||
        college.Courses?.toLowerCase().includes(query)
      );
    });

    setDisplayedColleges(filtered.slice(0, page * collegesPerPage));
  }, [colleges, searchQuery, page]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already reactive through filteredColleges,
    // but we'll prevent form submission
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      {/* Header */}
      <Header />
      <div className="min-h-screen bg-gray-50 p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Top Engineering Colleges in India
        </h1>

        <div className="max-w-3xl mx-auto mb-8">
          <form
            onSubmit={handleSearch}
            className="flex bg-white rounded-lg shadow-lg p-2"
          >
            <input
              type="text"
              placeholder="Search colleges by name or location..."
              className="flex-1 px-4 py-2 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" className="flex items-center space-x-2">
              <Search className="h-5 w-5" />
              <span>Search</span>
            </Button>
          </form>
        </div>

        {isLoading ? (
          <div className="text-center py-8">Loading colleges...</div>
        ) : error ? (
          <div className="max-w-3xl mx-auto mb-8 text-red-500 text-center">
            {error}
          </div>
        ) : displayedColleges.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No colleges found matching your search.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {displayedColleges.map((college) => (
              <div
                key={college.Id}
                className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition"
                onClick={() => setSelectedCollege(college)}
              >
                <h2 className="text-xl font-semibold mb-2">
                  {college["College Name"]}
                </h2>
                <p className="text-gray-600 mb-2">
                  📍 {college.City}, {college.State}
                </p>
                <p className="text-gray-600">⭐ Rating: {college.Rating}</p>
                <p className="text-gray-600">
                  💰 Fees: ₹{college["Average Fees"].toLocaleString()}/year
                </p>
              </div>
            ))}
          </div>
        )}

        {displayedColleges.length < colleges.length && (
          <div className="flex justify-center mt-8">
            <Button onClick={handleLoadMore} className="px-6">
              Load More
            </Button>
          </div>
        )}

        {selectedCollege && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full p-6 max-h-[90vh] overflow-y-auto relative">
              <button
                onClick={() => setSelectedCollege(null)}
                className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>

              <h2 className="text-2xl font-bold mb-4 pr-12">
                {selectedCollege["College Name"]}
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h3 className="font-semibold">Established</h3>
                  <p>{selectedCollege["Established Year"]}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Type</h3>
                  <p>{selectedCollege["College Type"]}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Campus Size</h3>
                  <p>{selectedCollege["Campus Size"]}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Annual Fees</h3>
                  <p>₹{selectedCollege["Average Fees"].toLocaleString()}</p>
                </div>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Courses Offered</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCollege.Courses.split(", ").map((course) => (
                    <span
                      key={course}
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Facilities</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCollege.Facilities.split(", ").map((facility) => (
                    <span
                      key={facility}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                    >
                      {facility}
                    </span>
                  ))}
                </div>
              </div>
              <Button
                className="w-full"
                onClick={() => setSelectedCollege(null)}
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
