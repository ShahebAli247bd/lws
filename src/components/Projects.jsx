import React, { useState } from "react";
import p1 from "../assets/thumbnail/project-1.jpg"
import p2 from "../assets/thumbnail/project-2.jpg"
import p3 from "../assets/thumbnail/project-3.jpg"
import p4 from "../assets/thumbnail/project-4.jpg"
import p5 from "../assets/thumbnail/project-5.jpg"
import p6 from "../assets/thumbnail/project-6.jpg"
 

// Sample project data
const projects = [
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

const ProjectSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <section className="p-6 py-20 text-white bg-gradient-to-r to-gray-950 from-gray-900">
            <div className="px-4 mx-auto ">
                <h2 className="mb-12 text-4xl font-bold text-center">All { " " } 
                    <a
                        href={
                            "https://outsourcing-institute-bd-by-shaheb.blogspot.com/2024/09/email-template-for-blasting.html"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 rounded "
                    >Projects </a> 
                    to be Done
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
                                alt={project.title}
                                className="object-cover w-full h-96"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">
                                    {project.title}
                                </h3>
                                <p className="mt-2">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
                    <div className="w-11/12 p-6 bg-white rounded-lg text-darkblueish md:w-1/3">
                        <h2 className="mb-4 text-2xl font-bold">
                            {selectedProject.title}
                        </h2>
                        <p className="mb-4">{selectedProject.description}</p>
                        <a
                            href={selectedProject.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-white rounded bg-darkblueish"
                        >
                            View Demo
                        </a>
                        <button
                            className="mt-4 text-darkblueish hover:text-blue-500"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProjectSection;
