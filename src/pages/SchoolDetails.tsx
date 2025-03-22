import { useParams, useNavigate, useLocation } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { GoogleGenerativeAI } from '@google/generative-ai';
import { useState, useEffect } from "react";
import React from "react";
import { Helmet } from "react-helmet-async";

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

function SchoolDetails() {
  const { schoolName } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [school, setSchool] = useState<SchoolInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSchoolDetails = async () => {
      if (!schoolName) return;

      try {
        const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        
        const prompt = `Provide detailed information about the CBSE school "${schoolName}" in India.
        Return ONLY a valid JSON object without any markdown formatting, code blocks, or additional text.
        The object should have this exact structure:
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
        
        const schoolData: SchoolInfo = JSON.parse(text);
        setSchool(schoolData);
      } catch (err) {
        setError("Failed to fetch school details. Please try again.");
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSchoolDetails();
  }, [schoolName]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Loading school details...</div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !school) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-red-500">{error || "School not found"}</div>
          <button
            onClick={() => navigate('/cbse-schools')}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to Schools List
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{school?.name || 'School Details'} | AI College Finder</title>
        <meta name="description" content={`Detailed information about ${school?.name}. Find admission details, facilities, academic performance, rankings, and more.`} />
        <meta name="keywords" content={`${school?.name}, school details, CBSE school, admission, facilities, rankings`} />
        <meta property="og:title" content={`${school?.name || 'School Details'} | AI College Finder`} />
        <meta property="og:description" content={`Detailed information about ${school?.name}. Find admission details, facilities, academic performance, and rankings.`} />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/cbse-schools')}
          className="mb-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          ← Back to Schools List
        </button>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-6">{school.name}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">School Information</h2>
              <div className="space-y-4">
                <p><span className="font-medium">Location:</span> {school.location}</p>
                <p><span className="font-medium">Address:</span> {school.address}</p>
                <p><span className="font-medium">City:</span> {school.city}</p>
                <p><span className="font-medium">State:</span> {school.state}</p>
                <p><span className="font-medium">Pincode:</span> {school.pincode}</p>
                <p><span className="font-medium">Established:</span> {school.establishment}</p>
                <div className="flex items-center">
                  <span className="font-medium">Rating:</span>
                  <span className="text-yellow-500 ml-2">★</span>
                  <span className="ml-1">{school.rating}</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <p><span className="font-medium">Phone:</span> {school.contact}</p>
                <p>
                  <span className="font-medium">Website:</span>
                  <a href={school.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-2">
                    Visit Website
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">About the School</h2>
            <p className="text-gray-700">{school.details}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Facilities</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {school.facilities.map((facility, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  {facility}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SchoolDetails; 