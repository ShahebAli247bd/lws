import React from "react";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Modal = () => {
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
    <>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 rounded drop-shadow-md">
          <div className="w-11/12 p-6 text-white rounded bg-gradient-to-r from-gray-700 to-gray-800 md:w-1/3">
            <h2 className="mb-4 text-xl font-bold">Registration Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-100">Name</label>
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
                <label className="block text-gray-100">Email</label>
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
                <label className="block text-gray-100">Mobile Number</label>
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
                <label className="block text-gray-100">Location</label>
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
                <label className="block text-gray-100">Highest Education</label>
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
                <label className="block text-gray-100">Course Type</label>
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
                <label className="block text-gray-100">Course Fee</label>
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
                  className="px-4 py-2 text-white bg-red-600 rounded"
                  onClick={() => setIsModalOpen(false)} // Close modal
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white rounded bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
