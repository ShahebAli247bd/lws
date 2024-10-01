// ProjectCard Component
const ProjectCard = ({ openModal }) => {
    return (
        <div className="relative group">
            <img
                src="https://via.placeholder.com/400"
                alt="Project 1"
                className="rounded-lg shadow-lg group-hover:shadow-2xl transform group-hover:scale-105 transition duration-300"
                onClick={openModal}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <button className="px-4 py-2 bg-primary text-white rounded-lg">
                    View Project
                </button>
            </div>
        </div>
    );
};
export default ProjectCard;