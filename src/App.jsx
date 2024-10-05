import React, { useState } from "react";
import "./App.css"; // Import the Tailwind CSS

import Navbar from "./components/Navbar";
import Features from "./components/Features"; // Your other sections
import Projects from "./components/Projects";
import Pricing from "./components/Pricing";
import HeroSection from "./components/HeroSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import QuizComponent from "./components/Quiz";
import FAQ from "./components/Faq";
import FacebookPixel from './tracking/FacebookPixel';
// import PaymentForm from "./components/payment";


function App() {
  return (
      <div className="text-black bg-white dark:bg-gray-900 dark:text-white">
          <Navbar />
          <FacebookPixel />
          <HeroSection />
          <Features />
          <Projects />
          {/** <Enrollment />*/}
          <Pricing />
          {/** <PaymentForm /> */}
          <Testimonials />

          {/** <QuizComponent />*/}
          <FAQ />
          <Footer />

   
      </div>
  );
}


export default App;
