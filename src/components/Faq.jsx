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
             en: "To complete the admission process, if you're looking for a significant scholarship, you'll need to pass the quiz and submit your email. Once that's done, fill out the registration form and submit it. We will verify your application, and you’ll receive a confirmation message soon.",
             bn: "ভর্তি প্রক্রিয়া সম্পন্ন করতে হলে, আপনি যদি উল্লেখযোগ্য বৃত্তি পেতে চান তাহলে আপনাকে কুইজে পাস করে ইমেইল পাঠাতে হবে ইমেল বাটনে ক্লিক করে। এরপর রেজিস্ট্রেশন ফরম পূরণ করে জমা দিতে হবে। আমরা আপনার আবেদন যাচাই করব এবং শীঘ্রই আপনাকে নিশ্চিতকরণ বার্তা পাঠানো হবে।",
         },
     },
     {
         question: {
             en: "What will be the content of the course?",
             bn: "কোর্সের বিষয়বস্তু কি কি থাকবে?",
         },
         answer: {
             en: "To learn more, check out our detailed blog post https://shorturl.at/zeLXy here. You’ll find everything you need to know about the course!",
             bn: "আরও জানতে, আমাদের বিস্তারিত ব্লগ পোস্ট https://shorturl.at/zeLXy এখানে দেখুন। আপনি কোর্স সম্পর্কে সবকিছু জানতে পারবেন!",
         },
     },
     {
         question: {
             en: "What will the class schedule look like?",
             bn: "ক্লাসের সময়সূচি কেমন হবে?",
         },
         answer: {
             en: "Classes will be held online every Saturday and Sunday, starting at 9 PM and ending at 10:30 PM. Depending on the content, some sessions may go slightly over time, but we’ll make sure you get all the knowledge you need!",
             bn: "ক্লাসগুলো প্রতি শনিবার ও রবিবার অনলাইনে অনুষ্ঠিত হবে, রাত ৯টা থেকে শুরু হয়ে ১০:৩০টা পর্যন্ত চলবে। বিষয়বস্তুর ওপর নির্ভর করে কিছু সেশন সময়ের চেয়ে কিছুটা বেশি সময় নিতে পারে, তবে আমরা নিশ্চিত করব আপনি প্রয়োজনীয় সব জ্ঞান পাবেন!",
         },
     },
     {
         question: {
             en: "Tell us about the course mentor.",
             bn: "কোর্স মেন্টর সম্পর্কে কিছু বলুন।",
         },
         answer: {
             en: "Our mentor is a highly experienced professional, having worked for over a decade in global brands such as DELL, MICROSOFT, WUNDERMAN, WUNDERMANTHOMPSON, GSK and on freelancing platforms like Fiverr. With expertise in industry standards and outsourcing, you’ll be learning from the best.",
             bn: "আমাদের মেন্টর একজন অত্যন্ত অভিজ্ঞ পেশাজীবী, যিনি DELL, MICROSOFT, WUNDERMAN, WUNDERMAN THOMPSON, GSK-এর মতো আন্তর্জাতিক ব্র্যান্ডে দশকেরও বেশি সময় কাজ করেছেন এবং ফ্রিল্যান্সিং প্ল্যাটফর্ম যেমন Fiverr-এ কাজ করেছেন। শিল্পের মান এবং আউটসোর্সিংয়ে তার বিশেষজ্ঞতা রয়েছে।",
         },
     },
     {
         question: {
             en: "What is the course fee?",
             bn: "কোর্স ফি কত?",
         },
         answer: {
             en: "Unlock your future with our course! Get the live course for just 500 BDT or the complete mentorship package (including software and a certificate) for only 1,000 BDT—an unbeatable opportunity for your career growth! Invest now and gain unique skills you won't find anywhere else—guaranteed!",
             bn: "এই কোর্সের মূল্য ৪০০০ টাকা, তবে আমরা দুটি বিকল্প দিচ্ছি। লাইভ কোর্সের জন্য বিশেষ ছাড় দিয়ে এটি মাত্র ৫০০ টাকা। এবং সম্পূর্ণ মেন্টরশিপ সহায়তা, EDM ডেভেলপমেন্ট সফটওয়্যার এবং কৃতিত্বের সনদপত্র সহ সম্পূর্ণ প্যাকেজের জন্য বিশেষ অফারে এটি মাত্র ১০০০ টাকা। আপনার ক্যারিয়ার বৃদ্ধির জন্য অবিশ্বাস্য একটি অফার! ৫০০/- বা ১০০০/- টাকা খুব বেশি টাকা না, কিন্তু আপনি এ কোর্স থেকে যা শিখবেন তা অন্য কোথাও পাবেন না। গ্যারান্টি।",
         },
     },
     {
         question: {
             en: "Are there job opportunities after the course?",
             bn: "কোর্স শেষে কি চাকরির সুযোগ রয়েছে?",
         },
         answer: {
             en: "After completing the course, you'll be ready to freelance based on your new skills. In some cases, there may be opportunities to work directly with outsourcing companies or remotely as an email template developer, designer, or expert in Figma and Photoshop. We’ll provide all the guidance you need.",
             bn: "কোর্স সম্পন্ন করার পর, আপনি আপনার নতুন দক্ষতার ভিত্তিতে ফ্রিল্যান্সিং করতে প্রস্তুত হবেন। কিছু ক্ষেত্রে, আউটসোর্সিং কোম্পানি বা রিমোট কোম্পানির সাথে সরাসরি কাজ করার সুযোগও থাকতে পারে, যেমন ইমেইল টেমপ্লেট ডেভেলপার, ডিজাইনার, বা ফিগমা এবং ফটোশপ বিশেষজ্ঞ হিসাবে। আমরা আপনাকে প্রয়োজনীয় সমস্ত নির্দেশনা প্রদান করব।",
         },
     },
 ];



    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "en" ? "bn" : "en"));
    };

    return (
        <div
            id="faq"
            className="w-full pt-12 pb-12 mx-auto shadow-lg bg-gradient-to-r from-gray-950 to-gray-900"
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
