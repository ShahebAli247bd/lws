import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import sendEmail from "./EmailJS";
import logo from "./../assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Dummy submission (you can use an API like EmailJS or a backend here)
    if (email) {
      await sendEmail(email);
        setEmail("");
         
    } else {
         toast.error("Please enter a valid email.", {
             position: "top-right", // Updated to string format
         });
     
    }
  };

  return (
      <footer className="p-10 text-white bg-gradient-to-r to-gray-950 from-gray-900">
          <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-4">
              {/* Column 1 - Logo */}
              <div className="flex flex-col">
                  <div className="flex gap-4">
                      <img
                          src={logo}
                          width={20}
                          height="auto"
                          className="w-auto h-16"
                      />
                      <h1 className="text-2xl font-bold">
                          Learn with shaheb (LWS)
                      </h1>
                  </div>
                  <p className="mt-4">
                      Master in Web & Email Template Design & Development,
                      9Years+ experience at Multinational Company.
                  </p>
              </div>

              {/* Column 2 - Quick Links */}
              <div className="flex flex-col">
                  <h2 className="mb-4 text-lg font-semibold">Quick Links</h2>
                  <ul>
                      <li className="mb-2 hover:text-lightblue">
                          <a
                              href="https://www.facebook.com/profile.php?id=61566628011805"
                              target="_blank"
                          >
                              Facebook
                          </a>
                      </li>
                      <li className="mb-2 hover:text-lightblue">
                          <a
                              href="https://www.youtube.com/@learnwithshaheb"
                              target="_blank"
                          >
                              Youtube
                          </a>
                      </li>
                      <li className="mb-2 hover:text-lightblue">
                          <a
                              href="https://outsourcing-institute-bd-by-shaheb.blogspot.com/"
                              target="_blank"
                          >
                              Blog
                          </a>
                      </li>
                      <li className="hover:text-lightblue">
                          <a href="https://shorturl.at/N9rIU" target="_blank">
                              Admission Details
                          </a>
                      </li>
                  </ul>
              </div>

              {/* Column 3 - Support */}
              <div className="flex flex-col">
                  <h2 className="mb-4 text-lg font-semibold">Support</h2>
                  <ul>
                      <li className="mb-2 hover:text-lightblue">
                          <a href="#faq">FAQs</a>
                      </li>
                      <li className="mb-2 hover:text-lightblue">
                          <a href="https://shorturl.at/Ef9Ev" target="_blank">
                              Course Curriculum
                          </a>
                      </li>
                      <li className="mb-2 hover:text-lightblue">
                          <a href="#testimonial">Testimonials</a>
                      </li>
                      <li className="hover:text-lightblue">
                          <a href="https://shorturl.at/4Mdyz" target="_blank">
                              Privacy Policy
                          </a>
                      </li>
                  </ul>
              </div>

              {/* Column 4 - Subscription Form */}
              <div className="flex flex-col">
                  <h2 className="mb-4 text-lg font-semibold">Stay Updated</h2>
                  <form onSubmit={handleSubmit} className="hidden md:flex lg:hidden">
                      <input
                          type="email"
                          value={email}
                          onChange={handleEmailChange}
                          placeholder="Your email address"
                          className="w-full px-4 py-2 text-gray-900 rounded-l-md focus:outline-none"
                      />
                      <button
                          type="submit"
                          className="flex items-center justify-center px-4 py-2 bg-blue-600 bg-primary rounded-r-md hover:bg-primary-dark"
                      >
                          <FaPaperPlane className="text-white" />
                      </button>
                  </form>
                     
                  <div className="flex klaviyo-form-UYwssf md:hidden lg:flex"></div>
              </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center text-gray-400">
              &copy; 2024 Learn with Shaheb. All Rights Reserved.
          </div>
          {/* Toast Container */}
          <ToastContainer />
      </footer>
  );
};

export default Footer;
