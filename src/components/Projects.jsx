import React, { useState } from "react";
import p1 from "../assets/thumbnail/project-1.jpg"
import p2 from "../assets/thumbnail/project-2.jpg"
import p3 from "../assets/thumbnail/project-3.jpg"
import p4 from "../assets/thumbnail/project-4.jpg"
import p5 from "../assets/thumbnail/project-5.jpg"
import p6 from "../assets/thumbnail/project-6.jpg"
 

// Sample project data
const projectss = [
    {
        id: 1,
        title: "The Dream Comes to Life",
        image: p1, // Replace with your project image URL
        description:
            "Strategies and tips for crafting engaging and effective emails that drive results.",
        demoLink: "https://shorturl.at/5w750", // Replace with your project demo link
    },
    {
        id: 2,
        title: "Boost with Blush",
        image: p2,
        description:
            "Create dope emails easily and fast! Install the Blush plugin to customize all the illustrations.",
        demoLink: "https://shorturl.at/ogqql",
    },
    {
        id: 3,
        title: "Design & Development Course",
        image: p3,
        description:
            "Learn to develop hand-coded, responsive, dark mode compatible emails. Register now!",
        demoLink: "https://shorturl.at/QL9fU",
    },
    {
        id: 4,
        title: "Welcome to LWS",
        image: p4,
        description:
            "Handcrafted sushi with a creative flair, offering an experience beyond traditional takeout.",
        demoLink: "https://shorturl.at/avtF7",
    },
    {
        id: 5,
        title: "Make Content About It! Portfolio Project",
        image: p5,
        description:
            "Crafting professional-grade email templates for esteemed clients, delivering high-quality services.",
        demoLink: "https://shorturl.at/Mt3Ji",
    },
    {
        id: 6,
        title: "Dreaming of Sushi",
        image: p6,
        description:
            "Book faster using the Jiro Sushi app and enjoy traditional sushi with ease.",
        demoLink: "https://shorturl.at/fDnS9",
    },
];

const projects = [
    {
        id: 1,
        titleEn: "The Dream Comes to Life",
        titleBn: "স্বপ্ন জীবন্ত হয়",
        image: p1, // Replace with your project image URL
        descriptionEn:
            "Strategies and tips for crafting engaging and effective emails that drive results.",
        descriptionBn: "ফলপ্রসূ ইমেল তৈরির কৌশল এবং টিপস যা সঠিক ফলাফল দেয়।",
        demoLink: "https://shorturl.at/5w750", // Replace with your project demo link
    },
    {
        id: 2,
        titleEn: "Boost with Blush",
        titleBn: "ব্লাশ দিয়ে বুস্ট করুন",
        image: p2,
        descriptionEn:
            "Create dope emails easily and fast! Install the Blush plugin to customize all the illustrations.",
        descriptionBn:
            "সহজেই দ্রুত দুর্দান্ত ইমেল তৈরি করুন! ব্লাশ প্লাগইন ইনস্টল করে সব ইলাস্ট্রেশন কাস্টমাইজ করুন।",
        demoLink: "https://shorturl.at/ogqql",
    },
    {
        id: 3,
        titleEn: "Design & Development Course",
        titleBn: "ডিজাইন ও ডেভেলপমেন্ট কোর্স",
        image: p3,
        descriptionEn:
            "Learn to develop hand-coded, responsive, dark mode compatible emails. Register now!",
        descriptionBn:
            "হ্যান্ড-কোডেড, রেসপন্সিভ, ডার্ক মোড সমর্থিত ইমেল তৈরি করা শিখুন। এখনই নিবন্ধন করুন!",
        demoLink: "https://shorturl.at/QL9fU",
    },
    {
        id: 4,
        titleEn: "Welcome to LWS",
        titleBn: "এলডব্লিউএস-এ স্বাগতম",
        image: p4,
        descriptionEn:
            "Handcrafted sushi with a creative flair, offering an experience beyond traditional takeout.",
        descriptionBn:
            "সৃজনশীলতায় পূর্ণ হাতে তৈরি সুশি, যা সাধারণ টেকআউটের বাইরে এক ভিন্ন অভিজ্ঞতা দেয়।",
        demoLink: "https://shorturl.at/avtF7",
    },
    {
        id: 5,
        titleEn: "Make Content About It! Portfolio Project",
        titleBn: "এ সম্পর্কে কনটেন্ট তৈরি করুন! পোর্টফোলিও প্রজেক্ট",
        image: p5,
        descriptionEn:
            "Crafting professional-grade email templates for esteemed clients, delivering high-quality services.",
        descriptionBn:
            "প্রতিষ্ঠিত ক্লায়েন্টদের জন্য পেশাদার মানের ইমেল টেমপ্লেট তৈরি করে উচ্চমানের সেবা প্রদান।",
        demoLink: "https://shorturl.at/Mt3Ji",
    },
    {
        id: 6,
        titleEn: "Dreaming of Sushi",
        titleBn: "সুশির স্বপ্ন",
        image: p6,
        descriptionEn:
            "Book faster using the Jiro Sushi app and enjoy traditional sushi with ease.",
        descriptionBn:
            "জিরো সুশি অ্যাপ ব্যবহার করে দ্রুত বুক করুন এবং সহজেই ঐতিহ্যবাহী সুশির স্বাদ উপভোগ করুন।",
        demoLink: "https://shorturl.at/fDnS9",
    },
];

const ProjectSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isToggled, setIsToggled] = useState(false);

 const handleToggle = () => {
     setIsToggled(!isToggled);
    };
    
    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <section
            id="project"
            className="p-6 py-20 text-white bg-gradient-to-r to-gray-950 from-gray-900"
        >
            <div className="px-4 mx-auto ">
                <h2 className="mb-12 text-3xl font-bold text-center md:text-5xl">
                    {isToggled ? "যে সব " : " All"}
                    <a
                        href={
                            "https://outsourcing-institute-bd-by-shaheb.blogspot.com/2024/09/email-template-for-blasting.html"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 rounded "
                    >
                        {isToggled ? " প্রজেক্ট " : " Projects"}
                    </a>
                    {isToggled ? " সম্পন্ন করা হবে " : " To Be Done"}{" "}
                    <span className="items-center justify-center inline-block">
                        <button
                            className={`w-16 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out transition-colors ${
                                isToggled ? "bg-green-500" : "bg-gray-400"
                            }`}
                            onClick={handleToggle}
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
                <div className="container grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="relative overflow-hidden transition-transform transform rounded-lg shadow-lg hover:scale-105"
                            onClick={() => openModal(project)}
                        >
                            <img
                                src={project.image}
                                alt={
                                    isToggled
                                        ? project.titleBn
                                        : project.titleEn
                                }
                                className="object-cover w-full h-96"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">
                                    {isToggled
                                        ? project.titleBn
                                        : project.titleEn}
                                </h3>
                                <p className="mt-2">
                                    {isToggled
                                        ? project.descriptionBn
                                        : project.descriptionEn}
                                </p>
                            </div>
                            <button
                                className="px-4 py-2 text-white bg-gray-800 rounded hover:bg-gray-700"
                                onClick={closeModal}
                            >
                                {isToggled ? "আরও জানুন" : "Learn More"}{" "}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
                    <div className="w-11/12 p-6 bg-white rounded-lg text-darkblueish md:w-1/3">
                        <h2 className="mb-4 text-2xl font-bold">
                            {isToggled
                                ? selectedProject.titleBn
                                : selectedProject.titleEn}
                        </h2>
                        <p className="mb-4">
                            {" "}
                            {isToggled
                                ? selectedProject.descriptionBn
                                : selectedProject.descriptionEn}
                        </p>
                        <a
                            href={selectedProject.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 mr-4 text-white rounded bg-darkblueish hover:bg-gray-900"
                        >
                            {isToggled
                                ? "আমাদের এক্সক্লুসিভ কোর্স প্রজেক্ট দেখুন"
                                : "View Our Exclusive Course Project"}{" "}
                        </a>
                        <button
                            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                            onClick={closeModal}
                        >
                            {isToggled ? "বন্ধ করুন" : "Close It"}{" "}
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProjectSection;
