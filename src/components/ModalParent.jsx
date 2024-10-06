import React, { Children, useEffect, useState } from "react";
import QuizApp from "./Quiz";
import PricingSection from "./Pricing";
import Modal from "./Modal";

const ModalParent = ({
    children,
    isOpen,
    formData,
    handleInputChange,
    handleSubmit,
    closeModal,
}) => {
    const [skipQuiz, setSkipQuiz] = useState(() => {
        const storedValue = localStorage.getItem("skipQuiz");
        return storedValue === "true"; // Convert string to boolean
    });

    const handleQuizSkip = () => {
        const newSkipQuiz = !skipQuiz;
        localStorage.setItem("skipQuiz", newSkipQuiz); // Store boolean as string
        setSkipQuiz(newSkipQuiz);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                closeModal();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [closeModal]);

    if (!isOpen) return null; // Don't render modal if not open

    return (
        <div className="relative inset-0 z-50 flex items-center justify-center w-auto px-4 bg-gray-400 bg-opacity-50 md:fixed">
            <div className="fixed inset-0 opacity-50"></div>
            <div className="relative z-10 w-full p-8 rounded-lg shadow-lg md:w-1/2 bg-gradient-to-r from-gray-800 to-gray-900">
                <button
                    className="absolute flex items-center justify-center w-4 h-4 text-gray-100 bg-red-500 rounded-full top-2 right-2 md:top-2 md:right-2 hover:text-white hover:bg-red-800"
                    onClick={closeModal}
                >
                    &times;
                </button>
                <span className="flex items-center justify-center pb-2">
                    {skipQuiz ? (
                        <span className="font-bold text-green-500">
                           Test your Skill to Pass the Quiz:
                          
                        </span>
                    ) : (
                        <span className="font-bold text-gray-300">
                            Enroll Now
                        </span>
                    )}{" "}
                    &nbsp;
                    <button
                        className={`w-16 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out transition-colors ${
                            skipQuiz ? "bg-green-500" : "bg-gray-400"
                        }`}
                        onClick={handleQuizSkip}
                    >
                        <div
                            className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
                                skipQuiz ? "translate-x-8" : "translate-x-0"
                            }`}
                        ></div>
                    </button>
                </span>
                {/* Render Pricing or Quiz based on skipQuiz */}
                {skipQuiz ? (
                    <div>
                        <Modal
                            formData={formData}
                            handleInputChange={handleInputChange}
                            handleSubmit={handleSubmit}
                            closeModal={closeModal}
                        />
                    </div>
                ) : (
                    <div>
                        <QuizApp />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ModalParent;
