import React, { useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";

const ScrollDownButton = () => {
    const [isVisible, setIsVisible] = useState(true);

    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        });
        setIsVisible(false); // Hide after scrolling
    };

    // Check scroll position to toggle visibility
    const handleScroll = () => {
        if (window.scrollY > 200) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        isVisible && (
            <div className="fixed z-50 transform -translate-x-1/2 bottom-16 left-1/2">
                <button
                    onClick={scrollToContent}
                    className="p-4 transition-colors duration-300 bg-white border rounded-full shadow-lg hover:bg-green-400 "
                >
                    <FaArrowDown className="text-2xl text-black animate-bounce-2" />
                </button>
            </div>
        )
    );
};

export default ScrollDownButton;
