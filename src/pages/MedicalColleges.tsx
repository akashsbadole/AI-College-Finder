import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { MedCollege } from "../types";
import { Button } from "../components/ui/button";
import { Search, X } from "lucide-react";
import React from "react";
import { Helmet } from "react-helmet-async";

function MedicalMedColleges() {
  const [Medcolleges, setMedColleges] = useState<MedCollege[]>([]);
  const [displayedMedColleges, setDisplayedMedColleges] = useState<
    MedCollege[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCollege, setSelectedCollege] = useState<MedCollege | null>(
    null
  );
  const [error, setError] = useState<string>("");
  const [page, setPage] = useState(1);
  const MedcollegesPerPage = 10;

  useEffect(() => {
    setIsLoading(true);
    fetch("/NEET-College.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Medcolleges data");
        }
        return response.json();
      })
      .then((data) => {
        // console.log("Raw data:", data); // Debug log to see full response
        if (!data || !Array.isArray(data)) {
          throw new Error("Invalid data format");
        }
        setMedColleges(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Medcolleges:", error);
        setError("Failed to load Medcolleges data: " + error.message);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = (Medcolleges || []).filter((Medcolleges) => {
      if (!Medcolleges) return false;
      const query = searchQuery.toLowerCase().trim();
      return (
        Medcolleges["College"]?.toLowerCase().includes(query) ||
        Medcolleges.Address?.toLowerCase().includes(query) ||
        Medcolleges.State?.toLowerCase().includes(query) ||
        Medcolleges.Name?.toLowerCase().includes(query)
      );
    });

    setDisplayedMedColleges(filtered.slice(0, page * MedcollegesPerPage));
  }, [Medcolleges, searchQuery, page]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already reactive through filteredMedColleges,
    // but we'll prevent form submission
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <Helmet>
        <title>Top Medical Colleges in India | AI College Finder</title>
        <meta name="description" content="Discover the best medical colleges in India including AIIMS, government medical colleges, and private medical institutions. Get comprehensive information about courses, rankings, and admission procedures." />
        <meta name="keywords" content="medical colleges, AIIMS, medical admission, top medical colleges, MBBS, medical courses" />
        <meta property="og:title" content="Top Medical Colleges in India | AI College Finder" />
        <meta property="og:description" content="Discover the best medical colleges in India including AIIMS, government medical colleges, and private medical institutions." />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Header */}
      <Header />
      <div className="min-h-screen bg-gray-50 p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Top Engineering MedColleges in India
        </h1>

        <div className="max-w-3xl mx-auto mb-8">
          <form
            onSubmit={handleSearch}
            className="flex bg-white rounded-lg shadow-lg p-2"
          >
            <input
              type="text"
              placeholder="Search Medcolleges by name or location..."
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
          <div className="text-center py-8">Loading Medcolleges...</div>
        ) : error ? (
          <div className="max-w-3xl mx-auto mb-8 text-red-500 text-center">
            {error}
          </div>
        ) : displayedMedColleges.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No Medcolleges found matching your search.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {displayedMedColleges.map((college) => (
              <div
                key={college.Id}
                className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition"
                onClick={() => setSelectedCollege(college)}
              >
                <h2 className="text-xl font-semibold mb-2">
                  {college["College"]}
                </h2>
                <p className="text-gray-600">
                  {" "}
                  <strong>Code:</strong> {college["Code"]}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>📍Address:</strong> {college.Address},{" "}
                  <strong>State:</strong> {college.State}
                </p>
                <p className="text-gray-600">
                  {" "}
                  <strong>Website:</strong> {college.Website}
                </p>
                <p className="text-gray-600">
                  {" "}
                  <strong>University:</strong> {college.University}
                </p>
                <p className="text-gray-600">
                  {" "}
                  <strong>SessionStart:</strong> {college["SessionStart"]}
                </p>
                <p className="text-gray-600">
                  {" "}
                  <strong> Admission Fee:</strong> {college["AdmissionFee"]}
                </p>
                <p className="text-gray-600">
                  <strong>💰Annual Fees:</strong> ₹
                  {college["AnnualFee"]?.toLocaleString()}/year
                </p>
              </div>
            ))}
          </div>
        )}

        {displayedMedColleges.length === 0 ? (
          <div className="flex justify-center mt-8">
            <p className="text-gray-500">No More medical colleges found</p>
          </div>
        ) : (
          <>
            {displayedMedColleges.length < Medcolleges.length && (
              <div className="flex justify-center mt-8">
                <Button onClick={handleLoadMore} className="px-6">
                  Load More
                </Button>
              </div>
            )}
          </>
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
                {selectedCollege["College"]}
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h3 className="font-semibold">Code</h3>
                  <p>{selectedCollege["Code"]}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Name</h3>
                  <p>{selectedCollege["Name"]}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p>{selectedCollege["Address"]}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Annual Fees</h3>
                  <p>₹{selectedCollege["AnnualFee"]?.toLocaleString()}</p>
                </div>
              </div>
              {/* <div className="mb-4">
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
              </div> */}
              {/* <div className="mb-4">
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
              </div> */}
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

export default MedicalMedColleges;
