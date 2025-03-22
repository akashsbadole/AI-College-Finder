import { useParams } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState, useEffect } from "react";

interface EntranceExam {
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

function EntranceExamDetails() {
  const { examName } = useParams();
  const [exam, setExam] = useState<EntranceExam | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchExamDetails = async () => {
      if (!examName) return;

      try {
        const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const prompt = `Provide detailed information about the entrance exam "${examName}" in India.
        Return ONLY a valid JSON object without any markdown formatting, code blocks, or additional text.
        The object should have this exact structure:
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

        const examData: EntranceExam = JSON.parse(text);
        setExam(examData);
      } catch (err) {
        setError("Failed to fetch exam details. Please try again.");
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchExamDetails();
  }, [examName]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Loading...</div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !exam) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-red-500">{error || "Exam not found"}</div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white p-8">
            <h1 className="text-3xl font-bold mb-2">{exam.examName}</h1>
            <p className="text-lg">{exam.testingAuthority}</p>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Exam Details</h2>
                <div className="space-y-2">
                  <p><strong>Mode:</strong> {exam.examMode}</p>
                  <p><strong>Frequency:</strong> {exam.frequency}</p>
                  <p><strong>Duration:</strong> {exam.duration}</p>
                  <p><strong>Question Format:</strong> {exam.questionFormat}</p>
                  <p><strong>Number of Questions:</strong> {exam.numberOfQuestions}</p>
                  <p><strong>Total Marks:</strong> {exam.totalMarks}</p>
                  <p><strong>Marking Scheme:</strong> {exam.markingScheme}</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Important Information</h2>
                <div className="space-y-2">
                  <p><strong>Purpose:</strong> {exam.purpose}</p>
                  <p><strong>Eligibility:</strong> {exam.eligibility}</p>
                  <p><strong>Application Mode:</strong> {exam.applicationMode}</p>
                  <p><strong>Website:</strong> <a href={exam.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{exam.website}</a></p>
                </div>
              </div>

              <div className="md:col-span-2">
                <h2 className="text-xl font-semibold mb-4">Sections</h2>
                <ul className="list-disc list-inside space-y-1">
                  {exam.sections.map((section, index) => (
                    <li key={index}>{section}</li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-2">
                <h2 className="text-xl font-semibold mb-4">Languages Available</h2>
                <ul className="list-disc list-inside space-y-1">
                  {exam.languagesExam.map((language, index) => (
                    <li key={index}>{language}</li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-2">
                <h2 className="text-xl font-semibold mb-4">Syllabus</h2>
                <p>{exam.syllabus}</p>
              </div>

              <div className="md:col-span-2">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-2">
                  <p><strong>Phone:</strong> {exam.contactDetails.phone}</p>
                  <p><strong>Email:</strong> {exam.contactDetails.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EntranceExamDetails; 