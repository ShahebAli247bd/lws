import React, { useState } from "react";
import emailjs from "emailjs-com";
import Modal from "./Modal";

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
        alert("Failed to send email.");
      });
  };

  return (
    <section className="py-20 text-white bg-gradient-to-r from-gray-950 to-gray-900">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-5xl font-bold text-center">Pricing Plans</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Free Live Class Card */}
          <div className="relative p-6 rounded-lg shadow-lg bg-gradient-to-r from-gray-900 to-gray-900">
            <h1 className="mb-4 text-2xl font-bold text-center">Live Class</h1>

            <h2 className="mb-4 text-3xl font-bold text-center">
              <span className="mb-4 text-sm font-bold text-center">
                এই কোর্সের মূল্য আনুমানিক{" "}
                <span className="text-red-500 line-through">৪০০০/-</span> টাকা
                হলেও, এখন
                <span className="text-green-500 text-2xl "> 500/-</span> মাত্র
              </span>
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                <span>২ মাসের কম্প্রিহেনসিভ কোর্স</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                <span>৫টি প্রোজেক্ট: ডিজাইন থেকে HTML & CSS-এ রূপান্তর</span>
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
                <span>ইমেইল মার্কেটিং প্ল্যাটফর্মে হ্যান্ডস-অন ট্রেনিং</span>
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
                <span>VS Code Plugin & Chrome Extension প্রদান</span>
              </li>

              <li className="flex items-center line-through">
                <span className="mr-2 text-green-500">❌</span>
                <span>LinkedIn থেকে ক্লায়েন্ট হান্টিং শিখানো হবে</span>
              </li>
              <li className="flex items-center line-through">
                <span className="mr-2 text-green-500">❌</span>
                <span>এক্সক্লুসিভ সার্টিফিকেট সফলদের জন্য!</span>
              </li>
            </ul>
            <button
              onClick={() => setIsModalOpen(true)}
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
              <span className="mb-4 text-sm font-bold text-center">
                এই কোর্সের মূল্য আনুমানিক{" "}
                <span className="text-red-500 line-through">৪০০০/-</span> টাকা
                হলেও, এখন
                <span className="text-green-500 text-2xl "> 1000/-</span> মাত্র
              </span>
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                <span>২ মাসের কম্প্রিহেনসিভ কোর্স</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                <span>৫টি প্রোজেক্ট: ডিজাইন থেকে HTML & CSS-এ রূপান্তর</span>
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
                <span>ইমেইল মার্কেটিং প্ল্যাটফর্মে হ্যান্ডস-অন ট্রেনিং</span>
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
                <span>VS Code Plugin & Chrome Extension প্রদান</span>
              </li>

              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                <span>LinkedIn থেকে ক্লায়েন্ট হান্টিং শিখানো হবে</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✅</span>
                <span>এক্সক্লুসিভ সার্টিফিকেট সফলদের জন্য!</span>
              </li>
            </ul>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-2 mt-6 text-white transition bg-green-500 rounded hover:bg-green-600"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <Modal
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
};

export default PricingSection;
