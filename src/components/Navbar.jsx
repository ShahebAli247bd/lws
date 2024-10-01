import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { FaMoon, FaSun } from "react-icons/fa"; // Icons for Dark/Light mode
import logo from "../assets/logo.png";
 

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark");
    };

    // Handle mobile menu toggle
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        // Add 'dark' class to the body when dark mode is enabled
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <header className="fixed z-10 w-full shadow-md bg-gradient-to-r to-gray-950 from-gray-900 bg-opacity-30 dark:bg-white">
            <div className="container flex items-center justify-between p-4 mx-auto">
                {/* Logo */}
                <div className="text-2xl font-bold text-white dark:text-white">
                    <img
                        src={logo} // Replace with your logo image URL
                        alt="Logo"
                        className="inline-block h-20"
                    />
                </div>

                {/* Desktop Menu */}
                <nav className="hidden space-x-8 md:flex">
                    <ScrollLink
                        to="about"
                        smooth={true}
                        duration={500}
                        className="text-white cursor-pointer dark:text-white hover:text-lightblue"
                    >
                        About
                    </ScrollLink>
                    <ScrollLink
                        to="projects"
                        smooth={true}
                        duration={500}
                        className="text-white cursor-pointer dark:text-white hover:text-lightblue"
                    >
                        Projects
                    </ScrollLink>
                    <ScrollLink
                        to="features"
                        smooth={true}
                        duration={500}
                        className="text-white cursor-pointer dark:text-white hover:text-lightblue"
                    >
                        Features
                    </ScrollLink>
                    <ScrollLink
                        to="#pricing"
                        smooth={true}
                        duration={500}
                        className="text-white cursor-pointer dark:text-white hover:text-lightblue"
                    >
                        Pricing
                    </ScrollLink>

                    {/* Dark/Light mode toggle */}
                    <button
                        onClick={toggleDarkMode}
                        className="text-white dark:text-white"
                    >
                        {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white dark:text-white"
                    >
                        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="absolute left-0 w-full text-white shadow-md bg-gradient-to-r from-gray-950 to-gray-900 md:hidden dark:bg-gray-900 top-16">
                    <nav className="flex flex-col items-center p-4 space-y-4">
                        <ScrollLink
                            to="about"
                            smooth={true}
                            duration={500}
                            className="text-white cursor-pointer dark:text-white hover:text-lightblue"
                            onClick={toggleMenu}
                        >
                            About
                        </ScrollLink>
                        <ScrollLink
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="text-white cursor-pointer dark:text-white hover:text-lightblue"
                            onClick={toggleMenu}
                        >
                            Projects
                        </ScrollLink>
                        <ScrollLink
                            to="features"
                            smooth={true}
                            duration={500}
                            className="text-white cursor-pointer dark:text-white hover:text-lightblue"
                            onClick={toggleMenu}
                        >
                            Features
                        </ScrollLink>
                        <ScrollLink
                            to="pricing"
                            smooth={true}
                            duration={500}
                            className="text-white cursor-pointer dark:text-white hover:text-lightblue"
                            onClick={toggleMenu}
                        >
                            Pricing
                        </ScrollLink>
                        {/* Dark/Light mode toggle in mobile */}
                        <button
                            onClick={toggleDarkMode}
                            className="mt-4 text-white dark:text-white"
                        >
                            {darkMode ? (
                                <FaSun size={24} />
                            ) : (
                                <FaMoon size={24} />
                            )}
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
