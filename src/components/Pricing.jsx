import React, { useState } from "react";
import emailjs from "emailjs-com";
import Modal from "./Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PricingSection = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    const courses = [
        {
            id: 1,
            title: {
                en: "Live Class",
                bn: "লাইভ ক্লাস",
            },
            priceBefore: {
                en: "4000/-",
                bn: "৪০০০/-",
            },
            priceNow: {
                en: "500/-",
                bn: "500/-",
            },
            features: {
                en: [
                    "2-month comprehensive course",
                    "5 projects: From design to HTML & CSS conversion",
                    "Live classes",
                    "Real-time problem solving",
                    "Hands-on training on email marketing platforms",
                    "Dark Mode & Accessibility fixes",
                    "Personal portfolio template creation",
                    "Recorded videos (❌)",
                    "VS Code Plugin & Chrome Extension provided (❌)",
                    "LinkedIn client hunting training (❌)",
                    "Exclusive certificate for successful candidates! (❌)",
                ],
                bn: [
                    "২ মাসের কম্প্রিহেনসিভ কোর্স",
                    "৫টি প্রোজেক্ট: ডিজাইন থেকে HTML & CSS-এ রূপান্তর",
                    "লাইভ ক্লাস",
                    "রিয়েল-টাইম সমস্যা সমাধান",
                    "ইমেইল মার্কেটিং প্ল্যাটফর্মে হ্যান্ডস-অন ট্রেনিং",
                    "Dark Mode & Accessibility ফিক্সিং",
                    "ব্যক্তিগত পোর্টফোলিও টেমপ্লেট তৈরি",
                    "রেকর্ডেড ভিডিও (❌)",
                    "VS Code Plugin & Chrome Extension প্রদান (❌)",
                    "LinkedIn থেকে ক্লায়েন্ট হান্টিং শিখানো হবে (❌)",
                    "এক্সক্লুসিভ সার্টিফিকেট সফলদের জন্য! (❌)",
                ],
            },
            buttonText: {
                en: "Enroll Now",
                bn: "এখন নিবন্ধন করুন",
            },
            buttonClass: "bg-blue-500 hover:bg-blue-600",
        },
        {
            id: 2,
            title: {
                en: "Comprehensive Course",
                bn: "কম্প্রিহেনসিভ কোর্স",
            },
            priceBefore: {
                en: "4000/-",
                bn: "৪০০০/-",
            },
            priceNow: {
                en: "1000/-",
                bn: "১০০০/-",
            },
            features: {
                en: [
                    "2-month comprehensive course",
                    "5 projects: From design to HTML & CSS conversion",
                    "Live classes",
                    "Real-time problem solving",
                    "Hands-on training on email marketing platforms",
                    "Dark Mode & Accessibility fixes",
                    "Personal portfolio template creation",
                    "Recorded videos",
                    "VS Code Plugin & Chrome Extension provided",
                    "LinkedIn client hunting training",
                    "Exclusive certificate for successful candidates!",
                ],
                bn: [
                    "২ মাসের কম্প্রিহেনসিভ কোর্স",
                    "৫টি প্রোজেক্ট: ডিজাইন থেকে HTML & CSS-এ রূপান্তর",
                    "লাইভ ক্লাস",
                    "রিয়েল-টাইম সমস্যা সমাধান",
                    "ইমেইল মার্কেটিং প্ল্যাটফর্মে হ্যান্ডস-অন ট্রেনিং",
                    "Dark Mode & Accessibility ফিক্সিং",
                    "ব্যক্তিগত পোর্টফোলিও টেমপ্লেট তৈরি",
                    "রেকর্ডেড ভিডিও",
                    "VS Code Plugin & Chrome Extension প্রদান",
                    "LinkedIn থেকে ক্লায়েন্ট হান্টিং শিখানো হবে",
                    "এক্সক্লুসিভ সার্টিফিকেট সফলদের জন্য!",
                ],
            },
            buttonText: {
                en: "Enroll Now",
                bn: "এখন নিবন্ধন করুন",
            },
            buttonClass: "bg-green-500 hover:bg-green-600",
        },
    ];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        location: "",
        education: "",
        courseType: "",
        courseFee: "",
        transactionNumber: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_l0gmcbs", // Your Service ID
                "template_hqb9ivo", // Your Template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    mobile: formData.mobile,
                    location: formData.location,
                    education: formData.education,
                    courseType: formData.courseType,
                    courseFee: formData.courseFee,
                    transactionNumber: formData.transactionNumber,
                },
                "9RfB8L3zVRRfMB18w" // Your Public Key
            )
            .then((result) => {
                toast.success("Registration successful!", {
                    position: "top-right",
                });
                setIsModalOpen(false); // Close modal
                setFormData({
                    name: "",
                    email: "",
                    mobile: "",
                    location: "",
                    education: "",
                    courseType: "",
                    courseFee: "",
                    transactionNumber: "",
                });
            })
            .catch((error) => {
                console.error("Failed to send email:", error);
                toast.error("Failed to send email.", {
                    position: "top-right",
                });
            });
    };

    const [language, setLanguage] = useState("en"); // 'en' for English, 'bn' for Bangla

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "en" ? "bn" : "en"));
    };

    return (
        <section
            id="pricing"
            className="py-20 text-white bg-gradient-to-r from-gray-950 to-gray-900"
        >
            <div className="container px-4 mx-auto">
                <h2 className="mb-12 text-3xl font-bold text-center md:text-5xl">
                    {language === "bn"
                        ? "মূল্য পরিকল্পনা"
                        : "Pricing Plans"}{" "}
                    <span className="items-center justify-center inline-block">
                        <button
                            className={`w-16 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out transition-colors ${
                                isToggled ? "bg-green-500" : "bg-gray-400"
                            }`}
                            onClick={toggleLanguage}
                        >
                            <div
                                className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
                                    isToggled
                                        ? "translate-x-8"
                                        : "translate-x-0"
                                }`}
                            ></div>
                        </button>
                    </span>
                </h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="relative p-6 rounded-lg shadow-lg bg-gradient-to-r from-gray-900 to-gray-900"
                        >
                            <h1 className="mb-4 text-2xl font-bold text-center">
                                {course.title[language]}
                            </h1>
                            <h2 className="mb-4 text-3xl font-bold text-center">
                                <span className="mb-4 text-sm font-bold text-center">
                                    এই কোর্সের মূল্য আনুমানিক{" "}
                                    <span className="text-red-500 line-through">
                                        {course.priceBefore[language]}
                                    </span>{" "}
                                    টাকা হলেও, এখন
                                    <span className="text-2xl text-green-500">
                                        {" "}
                                        {course.priceNow[language]}{" "}
                                    </span>{" "}
                                    মাত্র
                                </span>
                            </h2>
                            <ul className="space-y-4">
                                {course.features[language].map(
                                    (feature, index) => (
                                        <li
                                            key={index}
                                            className={`flex items-center ${
                                                feature.includes("(❌)")
                                                    ? "line-through"
                                                    : ""
                                            }`}
                                        >
                                            <span className="mr-2 text-green-500">
                                                {feature.includes("(❌)")
                                                    ? "❌"
                                                    : "✅"}
                                            </span>
                                            <span>
                                                {feature.replace(" (❌)", "")}
                                            </span>
                                        </li>
                                    )
                                )}
                            </ul>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className={`px-6 py-3 rounded-full mt-6 text-white transition ${course.buttonClass} rounded`}
                            >
                                {course.buttonText[language]}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && (
                <Modal
                    formData={formData}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                    closeModal={() => setIsModalOpen(false)}
                />
            )}

            <ToastContainer />
        </section>
    );
};

export default PricingSection;
