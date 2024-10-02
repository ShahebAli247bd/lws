import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [language, setLanguage] = useState("en"); // 'en' for English, 'bn' for Bangla

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    const faqData = [
        {
            question: {
                en: "How to complete the admission process?",
                bn: "ভর্তি প্রক্রিয়া কীভাবে সম্পন্ন করতে হবে?",
            },
            answer: {
                en: "To complete the admission process, you first need to fill out the free registration form. After that, your application will be verified, and a confirmation message will be sent.",
                bn: "ভর্তি প্রক্রিয়া সম্পন্ন করতে প্রথমে বিনামূল্যে রেজিস্ট্রেশন ফরম পূরণ করতে হবে। এরপর আপনার আবেদন যাচাই করে ভর্তি নিশ্চিতকরণ বার্তা পাঠানো হবে।",
            },
        },
        {
            question: {
                en: "What will be the content of the course?",
                bn: "কোর্সের বিষয়বস্তু কি কি থাকবে?",
            },
            answer: {
                en: "This course will include strategies for outsourcing, freelancing, working on Fiverr and Upwork, skill development, and ways to earn.",
                bn: "এই কোর্সে আউটসোর্সিং, ফ্রিল্যান্সিং, ফাইভার ও আপওয়ার্কে কাজ করার কৌশল, স্কিল ডেভেলপমেন্ট এবং আয়ের উপায় অন্তর্ভুক্ত থাকবে।",
            },
        },
        {
            question: {
                en: "What will the class schedule look like?",
                bn: "ক্লাসের সময়সূচি কেমন হবে?",
            },
            answer: {
                en: "Classes will be held online every Saturday and Sunday. The course will start at 9 PM and end at 10:30 PM.",
                bn: "ক্লাসগুলো প্রতি শনিবার ও রবিবার অনলাইনে অনুষ্ঠিত হবে। নির্ধারিত সময়ের সাপেক্ষে কোর্স শুরু হবে রাত ৯টা থেকে ১০:৩০টা পর্যন্ত।",
            },
        },
        {
            question: {
                en: "Tell us about the course mentor.",
                bn: "কোর্স মেন্টর সম্পর্কে কিছু বলুন।",
            },
            answer: {
                en: "The course mentor is an experienced freelancer who has been working on Fiverr, Upwork, and other platforms for over 10 years. He is skilled in outsourcing and will provide the necessary guidance to students.",
                bn: "কোর্সের মেন্টর একজন অভিজ্ঞ ফ্রিল্যান্সার যিনি বিগত ১০ বছরেরও বেশি সময় ধরে ফাইভার, আপওয়ার্ক এবং অন্যান্য প্ল্যাটফর্মে কাজ করছেন। তিনি আউটসোর্সিংয়ে দক্ষ এবং শিক্ষার্থীদের প্রয়োজনীয় দিকনির্দেশনা প্রদান করবেন।",
            },
        },
        {
            question: {
                en: "What is the course fee?",
                bn: "কোর্স ফি কত?",
            },
            answer: {
                en: "This course is completely free. However, a certificate will be provided for those who successfully complete the course.",
                bn: "এই কোর্সটি সম্পূর্ণ বিনামূল্যে। তবে যারা কোর্স সফলভাবে শেষ করবেন, তাদের জন্য সনদ প্রদান করা হবে।",
            },
        },
        {
            question: {
                en: "Are there job opportunities after the course?",
                bn: "কোর্স শেষে কি চাকরির সুযোগ রয়েছে?",
            },
            answer: {
                en: "After the course, you will be able to freelance based on your skills. In some cases, there may be opportunities to work directly with outsourcing companies.",
                bn: "কোর্স শেষে আপনি আপনার দক্ষতার ভিত্তিতে ফ্রিল্যান্সিং করতে পারবেন। এছাড়া, কিছু ক্ষেত্রে আউটসোর্সিং প্রতিষ্ঠানের সাথে সরাসরি কাজ করার সুযোগ থাকতে পারে।",
            },
        },
    ];

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "en" ? "bn" : "en"));
    };

    return (
        <div
            id="faq"
            className="w-full pt-12 pb-12 mx-auto shadow-lg bg-gradient-to-r to-gray-950 from-gray-900"
        >
            <div className="container px-4 mx-auto">
                <h2 className="mb-6 text-3xl font-bold text-center text-blue-400 md:text-5xl">
                    {language === "en"
                        ? "Frequently Asked Questions (FAQ)"
                        : "সাধারণ জিজ্ঞাসা"}{" "}
                    <span className="items-center justify-center inline-block">
                        <button
                            className={`w-16 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out transition-colors ${
                                language == "en"
                                    ? "bg-gray-400"
                                    : "bg-green-500 "
                            }`}
                            onClick={toggleLanguage}
                        >
                            <div
                                className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
                                    language == "en"
                                        ? "translate-x-0"
                                        : "translate-x-8"
                                }`}
                            ></div>
                        </button>
                    </span>
                </h2>
                {faqData.map((faq, index) => (
                    <div key={index} className="mb-4 border-b border-gray-700">
                        <button
                            className="w-full text-lg font-medium text-left text-white focus:outline-none"
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="flex items-center justify-between py-4 transition-all duration-300 ease-in-out">
                                <span>{faq.question[language]}</span>
                                <span>
                                    {activeIndex === index ? (
                                        <svg
                                            className="w-6 h-6 transition-transform duration-200 transform rotate-180"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="w-6 h-6 transition-transform duration-200"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 15l7-7 7 7"
                                            />
                                        </svg>
                                    )}
                                </span>
                            </div>
                        </button>
                        <Transition
                            show={activeIndex === index}
                            enter="transition-opacity duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            as="div" // Using 'div' instead of Fragment to fix the error
                        >
                            {activeIndex === index && (
                                <div className="p-4 text-gray-300 bg-gray-800 rounded-lg">
                                    {faq.answer[language]}
                                </div>
                            )}
                        </Transition>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
