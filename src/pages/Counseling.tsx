import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { MessageSquare, Send, Mail, Phone, MapPin } from "lucide-react";
import { Client, Databases, ID } from "appwrite";
import { getChatbotResponse } from "../lib/chatbot";
import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";

// Initialize Appwrite client
const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const databases = new Databases(client);

interface Message {
  type: "user" | "bot";
  content: string;
}

function Counseling() {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      content: "Hello! I'm your AI counselor. I can help you with:\n\n1. Academic guidance and study tips\n2. Career counseling and job prospects\n3. College selection advice\n4. Entrance exam preparation\n5. Personal development\n\nHow can I assist you today?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    // Add user message
    const userMessage: Message = {
      type: "user",
      content: inputMessage,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      // Get AI response
      const response = await getChatbotResponse(inputMessage);
      
      // Add bot message
      const botMessage: Message = {
        type: "bot",
        content: response,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      const errorMessage: Message = {
        type: "bot",
        content: "I apologize, but I'm having trouble processing your request. Please try again or use the contact form to schedule a session with a human counselor.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await databases.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        "counseling_requests",
        ID.unique(),
        contactForm
      );

      setSubmitStatus("success");
      setContactForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Student Counseling | IndianEduAI</title>
        <meta name="description" content="Get personalized guidance for your academic and career journey with our AI-powered counseling service." />
        <meta name="keywords" content="student counseling, career guidance, academic counseling, AI counseling" />
        <meta property="og:title" content="Student Counseling | IndianEduAI" />
        <meta property="og:description" content="Get personalized guidance for your academic and career journey." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Header />
      
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Student Counseling
            </h1>
            <p className="text-xl text-gray-600">
              Get personalized guidance for your academic and career journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* AI Chatbot Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  AI Counselor Chat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] overflow-y-auto mb-4 space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        message.type === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.type === "user"
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 rounded-lg p-3 text-gray-900">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message..."
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    disabled={isLoading}
                  />
                  <Button onClick={handleSendMessage} disabled={isLoading}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form Section */}
            <Card>
              <CardHeader>
                <CardTitle>Schedule a Counseling Session</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <Input
                      required
                      value={contactForm.name}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, name: e.target.value })
                      }
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      required
                      type="email"
                      value={contactForm.email}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, email: e.target.value })
                      }
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <Input
                      required
                      type="tel"
                      value={contactForm.phone}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, phone: e.target.value })
                      }
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      required
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, message: e.target.value })
                      }
                      placeholder="Tell us about your academic background and what you'd like to discuss"
                      rows={4}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </Button>
                  {submitStatus === "success" && (
                    <p className="text-green-600 text-sm">
                      Your request has been submitted successfully!
                    </p>
                  )}
                  {submitStatus === "error" && (
                    <p className="text-red-600 text-sm">
                      There was an error submitting your request. Please try again.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-3">
              <Mail className="h-6 w-6 text-indigo-600" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">counseling@bharateduai.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-6 w-6 text-indigo-600" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+91 1800-XXX-XXXX</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-indigo-600" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">
                  123 Education Street, New Delhi, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Counseling; 