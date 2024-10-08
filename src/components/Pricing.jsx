import React, { useState } from "react";
import emailjs from "emailjs-com";
import Modal from "./Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalParent from "./ModalParent";
import { courses } from '../data/Course'


import {gapi} from 'gapi-script';



const Pricing = () => {
    const [isToggled, setIsToggled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        location: "",
        education: "",
        courseType: "",
        courseFee: "",
        transactionNumber: "",
        couponCode: "",
    });

    /**
     * Google Spread Sheet Saved Enroll Data
     */
    // Access environment variables
const GOOGLE_SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID;
const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const SHEET_RANGE = import.meta.env.VITE_SHEET_RANGE;
    
    const saveDataToGoogleSheets = async () => {
        if (typeof gapi === "undefined") {
            toast.error("Google API not loaded.");
            return;
        }

        try {
            await gapi.load("client:auth2", async () => {
                await gapi.auth2.init({
                    apiKey: GOOGLE_API_KEY,
                    clientId: GOOGLE_CLIENT_ID,
                    scope: "https://www.googleapis.com/auth/spreadsheets",
                    discoveryDocs: [
                        "https://sheets.googleapis.com/$discovery/rest?version=v4",
                    ],
                });

                // const authInstance = gapi.auth2.getAuthInstance();
                // await authInstance.signIn();

                const values = [
                    [
                        formData.name,
                        formData.email,
                        formData.mobile,
                        formData.location,
                        formData.education,
                        formData.courseType,
                        formData.courseFee,
                        formData.transactionNumber,
                        formData.couponCode,
                    ],
                ];

                const request = {
                    spreadsheetId: GOOGLE_SHEET_ID,
                    range: SHEET_RANGE, // Dynamic column range
                    valueInputOption: "RAW",
                    insertDataOption: "INSERT_ROWS", // Appends to next row
                    resource: { values },
                };

                const response =
                    await gapi.client.sheets.spreadsheets.values.append(
                        request
                    );
                if (response.status === 200) {
                    toast.success(
                        "Congratulation, Your information saved successfully!"
                    );
                }
            });
        } catch (err) {
            console.error("Error saving data:", err);
            toast.error(`Error saving data: ${err.message}`);
        }
    };
    /**
     * Google Spread Sheet Saved Enroll Data END
     */

    /**
     * HandleSubmit form
     * @param {formObject} e
     */
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        try {
            // Send email using emailjs (assuming this works synchronously)
            await emailjs.send(
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
                    couponCode: formData.couponCode,
                },
                "9RfB8L3zVRRfMB18w" // Your Public Key
            );
            toast.success("Registration successful!", {
                position: "top-right",
            });

            // Save data to Google Sheets
            await saveDataToGoogleSheets();

            // Clear the form data and close the modal
            setIsModalOpen(false);
            setFormData({
                name: "",
                email: "",
                mobile: "",
                location: "",
                education: "",
                courseType: "",
                courseFee: "",
                transactionNumber: "",
                couponCode: "",
            });

            // Optionally redirect after a delay
               setTimeout(() => {
                   window.location.href = "/";
               }, 6000);
        } catch (error) {
            console.error("Failed to submit form:", error);
            toast.error("Failed to submit form.", {
                position: "top-right",
            });
        }
    };

    const [language, setLanguage] = useState("en"); // 'en' for English, 'bn' for Bangla

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "en" ? "bn" : "en"));
    };

    return (
        <section
            id="pricing"
            className="py-20 text-gray-300 bg-gradient-to-r from-gray-950 to-gray-900"
        >
            <div className="container px-4 mx-auto">
                <h2 className="mb-12 text-3xl font-bold text-center md:text-5xl">
                    {language === "bn" ? "মূল্য পরিকল্পনা" : "Pricing Plans"}{" "}
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

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 flex justify-center item-center">
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
                                    এই কোর্সের মূল্য{" "}
                                    <span className="text-red-500 line-through">
                                        {course.priceBefore[language]}
                                    </span>{" "}
                                    টাকা হলেও, ফার্স্ট ব্যাচ উপলক্ষে বিশেষ ছাড়ে
                                    এখন
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
                <ModalParent
                    isOpen={isModalOpen}
                    formData={formData}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                    closeModal={() => setIsModalOpen(false)}
                >
                    <Modal
                        formData={formData}
                        handleInputChange={handleInputChange}
                        handleSubmit={handleSubmit}
                        closeModal={() => setIsModalOpen(false)}
                    />
                </ModalParent>
            )}

            <ToastContainer />
        </section>
    );
};

export default Pricing;
