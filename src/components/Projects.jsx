import React, { useState } from "react";

// Sample project data
const projects = [
    {
        id: 1,
        title: "Project 1",
        image: "https://via.placeholder.com/300x200", // Replace with your project image URL
        description: "Description of Project 1.",
        demoLink: "https://example.com/project1", // Replace with your project demo link
    },
    {
        id: 2,
        title: "Project 2",
        image: "https://via.placeholder.com/300x200",
        description: "Description of Project 2.",
        demoLink: "https://example.com/project2",
    },
    {
        id: 3,
        title: "Project 3",
        image: "https://via.placeholder.com/300x200",
        description: "Description of Project 3.",
        demoLink: "https://example.com/project3",
    },
    {
        id: 4,
        title: "Project 4",
        image: "https://via.placeholder.com/300x200",
        description: "Description of Project 4.",
        demoLink: "https://example.com/project4",
    },
    {
        id: 5,
        title: "Project 5",
        image: "https://via.placeholder.com/300x200",
        description: "Description of Project 5.",
        demoLink: "https://example.com/project5",
    },
    {
        id: 6,
        title: "Project 6",
        image: "https://via.placeholder.com/300x200",
        description: "Description of Project 6.",
        demoLink: "https://example.com/project6",
    },
    {
        id: 7,
        title: "Project 7",
        image: "https://via.placeholder.com/300x200",
        description: "Description of Project 7.",
        demoLink: "https://example.com/project7",
    },
    {
        id: 8,
        title: "Project 8",
        image: "https://via.placeholder.com/300x200",
        description: "Description of Project 8.",
        demoLink: "https://example.com/project8",
    },
    {
        id: 9,
        title: "Project 9",
        image: "https://via.placeholder.com/300x200",
        description: "Description of Project 9.",
        demoLink: "https://example.com/project9",
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
                <h2 className="mb-12 text-4xl font-bold text-center">
                    Projects to be Done
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
