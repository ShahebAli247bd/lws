// FeatureCard Component
const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
            <i className={`${icon} text-4xl mb-4`}></i>
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default FeatureCard;