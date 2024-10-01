import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import sendEmail from './EmailJS'
import logo from './../assets/logo.png'

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Dummy submission (you can use an API like EmailJS or a backend here)
        if (email) {
           await sendEmail(email)
           setEmail("");
        } else {
            alert("Please enter a valid email.");
        }
    };

    return (
        <footer className="p-10 text-white bg-gradient-to-r from-gray-950 to-gray-900">
            <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-4">
                {/* Column 1 - Logo */}
                <div className="flex flex-col">
                    <img src={logo} width={80} />
                    <h1 className="text-3xl font-bold">Learn with Shaheb</h1>
                    <p className="mt-4">
                        Master Email Template Design & Development
                        <br />
                        Hands-on projects, live classes, and more!
                    </p>
                </div>

                {/* Column 2 - Quick Links */}
                <div className="flex flex-col">
                    <h2 className="mb-4 text-lg font-semibold">Quick Links</h2>
                    <ul>
                        <li className="mb-2 hover:text-lightblue">
                            <a href="#about">About Course</a>
                        </li>
                        <li className="mb-2 hover:text-lightblue">
                            <a href="#projects">Projects</a>
                        </li>
                        <li className="mb-2 hover:text-lightblue">
                            <a href="#features">Course Features</a>
                        </li>
                        <li className="hover:text-lightblue">
                            <a href="#contact">Contact Us</a>
                        </li>
                    </ul>
                </div>

                {/* Column 3 - Support */}
                <div className="flex flex-col">
                    <h2 className="mb-4 text-lg font-semibold">Support</h2>
                    <ul>
                        <li className="mb-2 hover:text-lightblue">
                            <a href="#faqs">FAQs</a>
                        </li>
                        <li className="mb-2 hover:text-lightblue">
                            <a href="#docs">Documentation</a>
                        </li>
                        <li className="mb-2 hover:text-lightblue">
                            <a href="#feedback">Feedback</a>
                        </li>
                        <li className="hover:text-lightblue">
                            <a href="#privacy">Privacy Policy</a>
                        </li>
                    </ul>
                </div>

                {/* Column 4 - Subscription Form */}
                <div className="flex flex-col">
                    <h2 className="mb-4 text-lg font-semibold">Stay Updated</h2>
                    <form onSubmit={handleSubmit} className="flex">
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Your email address"
                            className="w-full px-4 py-2 text-gray-900 rounded-l-md focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="flex items-center justify-center px-4 py-2 bg-primary rounded-r-md hover:bg-primary-dark"
                        >
                            <FaPaperPlane className="text-white" />
                        </button>
                    </form>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 text-center text-gray-400">
                &copy; 2024 Learn with Shaheb. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
