import React, { useState } from "react";

const CourseFeatures = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  const featuresBn = [
    {
      title: "বিস্তৃত পাঠ্যক্রম",
      description:
        "২ মাসের পরিকল্পিত শিক্ষা, যেখানে আপনি ফিগমা, ফটোশপ, HTML, এবং CSS শিখবেন, যা দিয়ে রেসপনসিভ ইমেইল টেমপ্লেট তৈরি করতে পারবেন।",
      icon: "📚",
    },
    {
      title: "প্র্যাকটিক্যাল প্রকল্প",
      description:
        "৫টি বাস্তব প্রজেক্ট সম্পন্ন করে দক্ষতা অর্জন করুন এবং একটি পোর্টফোলিও তৈরি করুন যা আপনার বিশেষজ্ঞতাকে উপস্থাপন করবে।",
      icon: "🛠️",
    },
    {
      title: "লাইভ ক্লাস ও সমর্থন",
      description:
        "ইন্টারেক্টিভ লাইভ ক্লাস, রিয়েল-টাইম সমস্যার সমাধান এবং শিক্ষার সম্পূর্ণ জার্নিতে নিবেদিত সহায়তা।",
      icon: "🎓",
    },
    {
      title: "ইমেইল মার্কেটিং কৌশল",
      description:
        "ইমেইল মার্কেটিংয়ের খুঁটিনাটি, ট্র্যাকিং, অ্যানালিটিক্স এবং কার্যকর ক্লায়েন্ট কমিউনিকেশন শিখুন।",
      icon: "📈",
    },
    {
      title: "অ্যাক্সেসিবিলিটি ও সামঞ্জস্যতা",
      description:
        "আপনার টেমপ্লেটগুলি যেন সব প্রধান ইমেইল ক্লায়েন্টের সঙ্গে সামঞ্জস্যপূর্ণ এবং অ্যাক্সেসিবল হয়, তার সাথে ডার্ক মোড সাপোর্ট নিশ্চিত করুন।",
      icon: "🔒",
    },
    {
      title: "বিশেষ টুলস ও রিসোর্স",
      description:
        "ইমেইল টেমপ্লেট তৈরির জন্য কাস্টম প্লাগইন এবং দ্রুত ডেভেলপমেন্ট ও মান যাচাইয়ের টুলস ব্যবহার করুন।",
      icon: "🛡️",
    },
    {
      title: "টার্গেট অডিয়েন্স",
      description:
        "উদ্যোক্তা, ফ্রিল্যান্সার, ডিজিটাল মার্কেটার, ডিজাইনার, এবং ই-কমার্স মালিকদের জন্য উপযুক্ত যারা ইমেইল দক্ষতা বাড়াতে চান।",
      icon: "🎯",
    },
    {
      title: "রিয়েল-টাইম সমস্যা সমাধান",
      description:
        "লাইভ সেশনে আউটলুক এবং জিমেইলের মতো প্রধান ইমেইল ক্লায়েন্টে জটিল সমস্যা সমাধান করার কৌশল শিখুন।",
      icon: "⚙️",
    },
    {
      title: "ক্লায়েন্ট সংযোগের দক্ষতা",
      description:
        "ইমেইলের মাধ্যমে কার্যকর যোগাযোগ এবং মার্কেটিং কৌশলের মাধ্যমে ক্লায়েন্টের সঙ্গে সংযোগ স্থাপন করার দক্ষতা অর্জন করুন।",
      icon: "💬",
    },
  ];

  const featuresIn = [
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
      <section className="p-6 text-white bg-gradient-to-r from-gray-950 to-gray-900">
          <h1 className="mb-10 text-4xl font-bold text-center text-white">
              Course{" "}
              <span className="text-blue-500">
                  {" "}
                  <a
                      href={"https://shorturl.at/A5NUi"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 rounded "
                  >
                      Features
                  </a>
              </span>{" "}
              in
              {isToggled ? " Bangla" : " English"}{" "}
              <span className="items-center justify-center inline-block">
                  <button
                      className={`w-16 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out transition-colors ${
                          isToggled ? "bg-green-500" : "bg-gray-400"
                      }`}
                      onClick={handleToggle}
                  >
                      <div
                          className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
                              isToggled ? "translate-x-8" : "translate-x-0"
                          }`}
                      ></div>
                  </button>
              </span>
          </h1>
          <div className="container grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3">
              {isToggled &&
                  featuresBn.map((feature, index) => (
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
              {!isToggled &&
                  featuresIn.map((feature, index) => (
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
