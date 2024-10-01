import React, { useState } from "react";
import emailjs from "emailjs-com";

const HeroSection = () => {
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
        <section className="relative flex flex-col-reverse items-center justify-between pt-40 mx-auto overflow-hidden md:h-screen md:flex-row bg-gradient-to-r from-gray-900 to-gray-950">
            <div
                className="absolute inset-0 bg-center bg-cover opacity-40"
                style={{
                    backgroundImage:
                        "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNprdUiEteLCqaqlodiVMUt2V0ihrKNUNn013dYUh3_K0Wdi5_M2O46tW2Jili6hpRUcp3b4yaTnX0QytP_sZWTeBtDDyds47Zvp2fI7DukRTJa9wvUSDl6k3JCE6tC19MbiqrBgDvQv2XmRKMpd2sGlvW_xDbIoFbfijgvOcOX2CDdp_RjSSA7-PN8OI/w640-h640-rw/%E2%80%94Pngtree%E2%80%94%20blue%20light%20effect%20with_3732499.png')",
                }}
            ></div>

            <div className="container relative flex flex-col items-center justify-between mx-auto overflow-hidden md:flex-row">
                <div className="relative w-full mb-6 md:w-1/2 md:mb-0">
                    <div
                        className="relative w-full"
                        style={{ paddingTop: "56.25%" }}
                    >
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded"
                            src="https://www.youtube.com/embed/TouoUAHucG0" // Replace with your video URL
                            frameBorder="0"
                            allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Video"
                        ></iframe>
                    </div>
                </div>

                <div className="text-white md:w-1/3">
                    <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                        Master Email Template Design & Development
                    </h1>
                    <p className="mb-6 text-lg">
                        Learn to create professional, responsive, and dark mode
                        compatible email templates using Figma, Photoshop, HTML,
                        and CSS.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)} // Open modal
                        className="px-4 py-2 transition bg-white rounded text-darkblueish hover:shadow-lg"
                    >
                        Enroll Now
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
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

export default HeroSection;
