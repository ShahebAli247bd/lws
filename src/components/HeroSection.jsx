import React, { useState } from "react";
import emailjs from "emailjs-com";
import Modal from "./ModalParent";
import Enrollment from "./Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalParent from "./ModalParent";
import ScrollDownButton from "./ScrollDownButton";

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
        couponCode: "",
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
                    couponCode: formData.couponCode,
                },
                "9RfB8L3zVRRfMB18w" // Your Public Key
            )
            .then((result) => {
                toast.success("Registration successful!", {
                    position: "top-right", // Updated to string format
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
                    couponCode: "",
                });
            })
            .catch((error) => {
                console.error("Failed to send email:", error);
                toast.error("Failed to send email.", {
                    position: "top-right", // Updated to string format
                });
            });
        
        setTimeout(() => {
            window.location.href = "/";
        }, 6000);
    };

    return (
        <section
            id="home"
            className="relative flex flex-col-reverse items-center justify-between px-4 pt-40 pb-12 mx-auto overflow-hidden md:h-screen md:flex-row bg-gradient-to-r from-gray-900 to-gray-950"
        >
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
                            src="https://www.youtube.com/embed/mVs_Uq9Cw6E" // Replace with your video URL
                            frameBorder="0"
                            allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Video"
                        ></iframe>
                    </div>
                </div>

                <div className="text-white md:w-1/3">
                    <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                        Mastering Email Template Design & Development
                    </h1>
                    <p className="mb-6 text-lg">
                        Learn to create professional, responsive, and dark mode
                        compatible email templates using Figma, Photoshop, HTML,
                        and CSS.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="w-auto px-6 py-3 mt-6 text-white transition bg-green-500 rounded-full hover:bg-green-600"
                    >
                        Enroll Now
                    </button>
                </div>
            </div>

            {/* Modal */}
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

            {/* Toast Container */}

            <ToastContainer />
            <ScrollDownButton />
        </section>
    );
};

export default HeroSection;
