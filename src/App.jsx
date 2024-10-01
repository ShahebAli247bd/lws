import React from "react";
import "./App.css"; // Import the Tailwind CSS

import Navbar from "./components/Navbar";
import Features from "./components/Features"; // Your other sections
import Projects from "./components/Projects";
import Pricing from "./components/Pricing";
import HeroSection from "./components/HeroSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
   
   
    return (
        <div className="text-black bg-white dark:bg-gray-900 dark:text-white">
            <Navbar />
            <HeroSection />
            <Features />
            <Projects />
            <Pricing />
            <Testimonials />

            <Footer />
        </div>
    );
}

// FeatureCard Component
const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="p-6 transition duration-300 transform bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-2xl hover:scale-105">
            <i className={`${icon} text-4xl mb-4`}></i>
            <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
            <p>{description}</p>
        </div>
    );
};

// ProjectCard Component
const ProjectCard = ({ openModal }) => {
    return (
        <div className="relative group">
            <img
                src="https://via.placeholder.com/400"
                alt="Project 1"
                className="transition duration-300 transform rounded-lg shadow-lg group-hover:shadow-2xl group-hover:scale-105"
                onClick={openModal}
            />
            <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                <button className="px-4 py-2 text-white rounded-lg bg-primary">
                    View Project
                </button>
            </div>
        </div>
    );
};

export default App;
