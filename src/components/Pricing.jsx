import React, { useState } from "react";
import emailjs from "emailjs-com";

const PricingSection = () => {
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

        // Send email using EmailJS
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
                alert("Registration successful!");
                setIsModalOpen(false); // Close the modal
                setFormData({
                    // Reset form data
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
                alert("Failed to send email.");
            });
    };

    return (
        <section className="py-20 text-white bg-gradient-to-r from-gray-950 to-gray-900">
            <div className="container px-4 mx-auto">
                <h2 className="mb-12 text-5xl font-bold text-center">
                    Pricing Plans
                </h2>
                <div className="mb-4 text-2xl font-bold text-center">
                    এই কোর্সের মূল্য আনুমানিক{" "}
                    <span className="text-red-500 line-through">৪০০০/-</span>{" "}
                    টাকা মাত্র
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Free Live Class Card */}
                    <div className="relative p-6 rounded-lg shadow-lg bg-gradient-to-r from-gray-900 to-gray-900">
                        <h1 className="mb-4 text-2xl font-bold text-center">
                            Live Class
                        </h1>

                        <h2 className="mb-4 text-3xl font-bold text-center">
                            Price:
                            <span className="text-green-500 "> 500/-</span> only
                        </h2>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <span className="mr-2 text-green-500">✅</span>
                                <span>২ মাসের কম্প্রিহেনসিভ কোর্স</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-green-500">✅</span>
                                <span>
                                    ৫টি প্রোজেক্ট: ডিজাইন থেকে HTML & CSS-এ
                                    রূপান্তর
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-green-500">✅</span>
                                <span>লাইভ ক্লাস</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-red-500">✅</span>
                                <span>রিয়েল-টাইম সমস্যা সমাধান</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-green-500">✅</span>
                                <span>
                                    ইমেইল মার্কেটিং প্ল্যাটফর্মে হ্যান্ডস-অন
                                    ট্রেনিং
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-green-500">✅</span>
                                <span>Dark Mode & Accessibility ফিক্সিং</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-green-500">✅</span>
                                <span>ব্যক্তিগত পোর্টফোলিও টেমপ্লেট তৈরি</span>
                            </li>
                            <li className="flex items-center line-through">
                                <span className="mr-2 text-green-500">❌</span>
                                <span>রেকর্ডেড ভিডিও</span>
                            </li>
                            <li className="flex items-center line-through">
                                <span className="mr-2 text-green-500">❌</span>
                                <span>
                                    VS Code Plugin & Chrome Extension প্রদান
                                </span>
                            </li>

                            <li className="flex items-center line-through">
                                <span className="mr-2 text-green-500">❌</span>
                                <span>
                                    LinkedIn থেকে ক্লায়েন্ট হান্টিং শিখানো হবে
                                </span>
                            </li>
                            <li className="flex items-center line-through">
                                <span className="mr-2 text-green-500">❌</span>
                                <span>
                                    এক্সক্লুসিভ সার্টিফিকেট সফলদের জন্য!
                                </span>
                            </li>
                        </ul>
                        <button
                            onClick={() => setIsModalOpen(true)} // Open modal
                            className="w-full py-2 mt-6 text-white transition bg-blue-500 rounded hover:bg-blue-600"
                        >
                            Enroll Now
                        </button>
                    </div>

                    {/* Comprehensive Course Card */}
                    <div className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-gray-900 to-gray-900">
                        <h3 className="mb-4 text-2xl font-bold text-center">
                            Comprehensive Course
                        </h3>
                        <h2 className="mb-4 text-3xl font-bold text-center">
                            Price:
                            <span className="text-green-500 ">
                                {" "}
                                1000/-
                            </span>{" "}
                            only
                        </h2>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <span className="mr-2 text-green-500">✅</span>
                                <span>২ মাসের কম্প্রিহেনসিভ কোর্স</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-green-500">✅</span>
                                <span>
                                    ৫টি প্রোজেক্ট: ডিজাইন থেকে HTML & CSS-এ
                                    রূপান্তর
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-green-500">✅</span>
                                <span>লাইভ ক্লাস</span>
                            </li>

                            <li className="flex items-center">
                                <span className="mr-2 text-green-500">✅</span>
                                <span>রিয়েল-টাইম সমস্যা সমাধান</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-green-500">✅</span>
                                <span>
                                    ইমেইল মার্কেটিং প্ল্যাটফর্মে হ্যান্ডস-অন
                                    ট্রেনিং
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-green-500">✅</span>
                                <span>Dark Mode & Accessibility ফিক্সিং</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-green-500">✅</span>
                                <span>ব্যক্তিগত পোর্টফোলিও টেমপ্লেট তৈরি</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-green-500">✅</span>
                                <span>রেকর্ডেড ভিডিও</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-green-500">✅</span>
                                <span>
                                    VS Code Plugin & Chrome Extension প্রদান
                                </span>
                            </li>

                            <li className="flex items-center">
                                <span className="mr-2 text-green-500">✅</span>
                                <span>
                                    LinkedIn থেকে ক্লায়েন্ট হান্টিং শিখানো হবে
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-green-500">✅</span>
                                <span>
                                    এক্সক্লুসিভ সার্টিফিকেট সফলদের জন্য!
                                </span>
                            </li>
                        </ul>
                        <button
                            onClick={() => setIsModalOpen(true)} // Open modal
                            className="w-full py-2 mt-6 text-white transition bg-green-500 rounded hover:bg-green-600"
                        >
                            Enroll Now
                        </button>
                    </div>
                </div>
            </div>
            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 rounded drop-shadow-md">
                    <div className="w-11/12 p-6 text-white rounded bg-gradient-to-r from-gray-700 to-gray-800 md:w-1/3">
                        <h2 className="mb-4 text-xl font-bold">
                            Registration Form
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-100">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-100">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-100">
                                    Mobile Number
                                </label>
                                <input
                                    type="tel"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-100">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-100">
                                    Highest Education
                                </label>
                                <input
                                    type="text"
                                    name="education"
                                    value={formData.education}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-100">
                                    Course Type
                                </label>
                                <input
                                    type="text"
                                    name="courseType"
                                    value={formData.courseType}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-100">
                                    Course Fee
                                </label>
                                <input
                                    type="text"
                                    name="courseFee"
                                    value={formData.courseFee}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-100">
                                    Transaction Number
                                </label>
                                <input
                                    type="text"
                                    name="transactionNumber"
                                    value={formData.transactionNumber}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    className="px-4 py-2 text-red-600"
                                    onClick={() => setIsModalOpen(false)} // Close modal
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 text-white rounded bg-darkblueish"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default PricingSection;
