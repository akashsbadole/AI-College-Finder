import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { GoogleGenerativeAI } from '@google/generative-ai';

interface SchoolInfo {
  name: string;
  location: string;
  rating: string;
  facilities: string[];
  details: string;
  contact: string;
  establishment: number;
  website: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: number;
}

function BestCBSESchools() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [schools, setSchools] = useState<SchoolInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

  const searchSchools = async () => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError("");

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      
      const prompt = `Provide information about CBSE affiliated schools in India matching the search "${searchQuery}". 
      Return ONLY a valid JSON array without any markdown formatting, code blocks, or additional text.
      Each object should have this exact structure:
      {
        "name": string,
        "location": string,
        "rating": string,
        "facilities": string[],
        "details": string,
        "contact": string,
        "establishment": number,
        "website": string,
        "address": string,
        "city": string,
        "state": string,
        "country": string,
        "pincode": number
      }`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      let text = response.text();
      
      text = text.replace(/```json\n?/g, '')
               .replace(/```\n?/g, '')
               .replace(/^\s+|\s+$/g, '');
      
      const schoolsData: SchoolInfo[] = JSON.parse(text);
      setSchools(schoolsData);
    } catch (err) {
      setError("Failed to fetch school information. Please try again.");
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSchoolClick = (schoolName: string) => {
    navigate(`/school/${encodeURIComponent(schoolName)}`);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Find CBSE Schools in India</h1>
        
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter school name or location..."
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyPress={(e) => e.key === 'Enter' && searchSchools()}
            />
            <button
              onClick={searchSchools}
              disabled={loading}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-300"
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </div>

        {error && (
          <div className="text-red-500 text-center mb-4">{error}</div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schools.map((school, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleSchoolClick(school.name)}
            >
              <h2 className="text-xl font-semibold mb-2 text-blue-600 hover:text-blue-800">{school.name}</h2>
              <p className="text-gray-600 mb-2">{school.location}</p>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">★</span>
                <span className="ml-1">{school.rating}</span>
              </div>
              <div className="mb-2">
                <h3 className="font-medium mb-1">Facilities:</h3>
                <ul className="list-disc list-inside">
                  {school.facilities.slice(0, 3).map((facility, idx) => (
                    <li key={idx} className="text-gray-600">{facility}</li>
                  ))}
                  {school.facilities.length > 3 && (
                    <li className="text-gray-500">...and more</li>
                  )}
                </ul>
              </div>
              <p className="text-gray-600 mb-2 line-clamp-2">{school.details}</p>
              <p className="text-gray-600">Contact: {school.contact}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BestCBSESchools;
