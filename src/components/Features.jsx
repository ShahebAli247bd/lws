import React from "react";

const CourseFeatures = () => {
    const features = [
        {
            title: "Comprehensive Curriculum",
            description:
                "2 months of structured learning covering Figma, Photoshop, HTML, and CSS to create responsive email templates.",
            icon: "📚",
        },
        {
            title: "Hands-on Projects",
            description:
                "Complete 5 real-world projects to solidify your skills and build a portfolio that showcases your expertise.",
            icon: "🛠️",
        },
        {
            title: "Live Classes & Support",
            description:
                "Interactive live classes with real-time problem-solving and dedicated support throughout your learning journey.",
            icon: "🎓",
        },
        {
            title: "Email Marketing Strategies",
            description:
                "Learn the ins and outs of email marketing, including tracking, analytics, and effective client communication.",
            icon: "📈",
        },
        {
            title: "Accessibility & Compatibility",
            description:
                "Ensure your templates are accessible and compatible with all major email clients, including dark mode support.",
            icon: "🔒",
        },
        {
            title: "Exclusive Tools & Resources",
            description:
                "Gain access to custom-made plugins and tools for rapid development and quality assurance in email templates.",
            icon: "🛡️",
        },
        {
            title: "Target Audience",
            description:
                "Perfect for entrepreneurs, freelancers, digital marketers, designers, and e-commerce owners looking to enhance their email skills.",
            icon: "🎯",
        },
        {
            title: "Real-Time Problem Solving",
            description:
                "Learn how to fix sophisticated issues in major email clients like Outlook and Gmail during live sessions.",
            icon: "⚙️",
        },
        {
            title: "Client Connection Skills",
            description:
                "Develop essential skills to connect with clients through effective email communication and marketing strategies.",
            icon: "💬",
        },
    ];

    return (
        <section className="p-6 py-16 text-white bg-gradient-to-r from-gray-950 to-gray-900">
            <h2 className="mb-10 text-3xl font-bold text-center text-white">
                Course Features
            </h2>
            <div className="container grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="p-6 text-white transition transform rounded-lg shadow-lg bg-gradient-to-r to-gray-950 from-gray-900 hover:scale-105 hover:shadow-xl"
                    >
                        <div className="mb-4 text-5xl text-darkblueish">
                            {feature.icon}
                        </div>
                        <h3 className="mb-2 text-xl font-semibold">
                            {feature.title}
                        </h3>
                        <p className="text-white">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CourseFeatures;
