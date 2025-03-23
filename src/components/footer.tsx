import {
  Facebook,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-8 w-8 text-indigo-400" />
                <span className="text-2xl font-bold">भारत EduAI</span>
              </div>
              <p className="text-gray-400">
                Empowering students to make informed decisions about their
                education journey.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/college-search" className="hover:text-white">
                    College Finder
                  </Link>
                </li>
                <li>
                  <Link to="/school-search" className="hover:text-white">
                    School Directory
                  </Link>
                </li>
                <li>
                  <Link to="/entrance-exams" className="hover:text-white">
                    Exam Calendar
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/study-materials" className="hover:text-white">
                    Study Materials
                  </Link>
                </li>
                <li>
                  <Link to="/career-analysis" className="hover:text-white">
                    Career Guide
                  </Link>
                </li>
                <li>
                  <Link to="/counseling" className="hover:text-white">
                    Counselling
                  </Link>
                </li>
                <li>
                  <Link to="/scholarships" className="hover:text-white">
                    Scholarships
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>+91 1800-XXX-XXXX</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>support@IndianEduAI.com</span>
                </li>
              </ul>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} भारत EduAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default footer;
