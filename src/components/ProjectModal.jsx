import React from "react";

const ProjectModal = ({ closeModal }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md mx-auto">
                <h2 className="text-2xl font-bold mb-4">Project Details</h2>
                <p>
                    This is where the project description and details will go.
                </p>
                <a
                    href="#"
                    className="block mt-4 text-primary dark:text-secondary underline"
                >
                    Visit Site
                </a>
                <button
                    onClick={closeModal}
                    className="mt-4 px-6 py-2 bg-primary text-white rounded-lg"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default ProjectModal;
