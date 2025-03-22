import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { GoogleGenerativeAI } from "@google/generative-ai";

interface EntranceExams {
  examName: string;
  testingAuthority: string;
  examMode: string;
  frequency: string;
  duration: string;
  sections: string[];
  languagesExam: string[];
  questionFormat: string;
  numberOfQuestions: number;
  syllabus: string;
  totalMarks: number;
  markingScheme: string;
  purpose: string;
  eligibility: string;
  applicationMode: string;
  website: string;
  contactDetails: {
    phone: string;
    email: string;
  };
}

function EntranceExams() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [entranceExams, setentranceExams] = useState<EntranceExams[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

  const searchentranceExams = async () => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError("");

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      const prompt = `Provide information about Entrance Exams in India matching the search "${searchQuery}". 
      Return ONLY a valid JSON array without any markdown formatting, code blocks, or additional text.
      Each object should have this exact structure:
      {
        examName: string;
        testingAuthority: string;
        examMode: string;
        frequency: string;
        duration: string;
        sections: string[];
        languagesExam: string[];
        questionFormat: string;
        numberOfQuestions: number;
        syllabus: string;
        totalMarks: number;
        markingScheme: string;
        purpose: string;
        eligibility: string;
        applicationMode: string;
        website: string;
        contactDetails: {
          phone: string;
          email: string;
        };
      }`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      let text = response.text();

      text = text
        .replace(/```json\n?/g, "")
        .replace(/```\n?/g, "")
        .replace(/^\s+|\s+$/g, "");

      const entranceExamsData: EntranceExams[] = JSON.parse(text);
      setentranceExams(entranceExamsData);
    } catch (err) {
      setError("Failed to fetch entrance information. Please try again.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleentranceClick = (entranceName: string) => {
    navigate(`/entrance/${encodeURIComponent(entranceName)}`);
  };
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Find Entrance Exams in India
        </h1>

        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter entrance name or location..."
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyPress={(e) => e.key === "Enter" && searchentranceExams()}
            />
            <button
              onClick={searchentranceExams}
              disabled={loading}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-300"
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </div>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {entranceExams.map((entrance, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleentranceClick(entrance.examName)}
            >
              <h2 className="text-xl font-semibold mb-2 text-blue-600 hover:text-blue-800">
                {entrance.examName}
              </h2>
              <p className="text-gray-600 mb-2">
                <strong>Testing Authority:</strong> {entrance.testingAuthority}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Exam mode:</strong> {entrance.examMode}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Frequency:</strong> {entrance.frequency}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Duration:</strong> {entrance.duration}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Sections:</strong> {entrance.sections}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Languages Exam:</strong> {entrance.languagesExam}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Question Format:</strong> {entrance.questionFormat}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Number of Questions:</strong>{" "}
                {entrance.numberOfQuestions}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Syllabus:</strong> {entrance.syllabus}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Total Marks:</strong> {entrance.totalMarks}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Marking Scheme:</strong> {entrance.markingScheme}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Purpose:</strong> {entrance.purpose}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Eligibility:</strong> {entrance.eligibility}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Application mode:</strong> {entrance.applicationMode}
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> {entrance.contactDetails["phone"]}
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> {entrance.contactDetails["email"]}
              </p>
              <p className="text-gray-600">
                <strong>Website:</strong>
                {entrance.website}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EntranceExams;
