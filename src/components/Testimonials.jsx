import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialsData = {
    en: [
        {
            id: 1,
            name: "Adnan Mridha",
            designation: "Web & Graphic Designer",
            image: "https://shorturl.at/jm3kH",
            testimonial:
                "This course helped me enhance my skills in email template design and development!",
            recommendation: "Highly recommend this course!",
        },
        {
            id: 2,
            name: "Helal Uddin",
            designation: "Graphic Designer",
            image: "https://shorturl.at/xArwo",
            testimonial:
                "I learned so much about responsive design and email marketing strategies.",
            recommendation:
                "This is a must-take course for aspiring designers!",
        },
        {
            id: 3,
            name: "Al-Amin",
            designation: "Web Developer",
            image: "https://shorturl.at/o8m36",
            testimonial:
                "The live classes and hands-on training were invaluable. I feel more confident now!",
            recommendation: "Best investment for my career!",
        },
    ],
    bn: [
        {
            id: 1,
            name: "আদনান মৃধা",
            designation: "ওয়েব এন্ড গ্রাফিক ডিজাইনার",
            image: "https://shorturl.at/jm3kH",
            testimonial:
                "এই কোর্সটি আমাকে ইমেইল টেমপ্লেট ডিজাইন এবং ডেভেলপমেন্টের দক্ষতা বাড়াতে সহায়তা করেছে!",
            recommendation: "এই কোর্সটি অবশ্যই সুপারিশ করছি!",
        },
        {
            id: 2,
            name: "হেলাল উদ্দিন",
            designation: "গ্রাফিক ডিজাইনার",
            image: "https://shorturl.at/xArwo",
            testimonial:
                "আমি রেসপনসিভ ডিজাইন এবং ইমেইল মার্কেটিং কৌশল সম্পর্কে অনেক কিছু শিখেছি।",
            recommendation: "আকাঙ্ক্ষী ডিজাইনারদের জন্য অবশ্যই একটি কোর্স!",
        },
        {
            id: 3,
            name: "আল-আমীন",
            designation: "ওয়েব ডেভলপার",
            image: "https://shorturl.at/o8m36",
            testimonial:
                "লাইভ ক্লাস এবং হাতে-কলমে প্রশিক্ষণ অমূল্য ছিল। আমি এখন আরও আত্মবিশ্বাসী!",
            recommendation: "আমার ক্যারিয়ারের জন্য সেরা বিনিয়োগ!",
        },
    ],
};

const TestimonialSection = () => {
    const [language, setLanguage] = useState("en");

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "bn" : "en");
    };

    const settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        appendDots: (dots) => (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <ul style={{ margin: "0px" }} className="text-white">
                    {dots}
                </ul>
            </div>
        ),
    };

    return (
        <section
            id="testimonial"
            className="flex items-center justify-center py-16 bg-gradient-to-r to-gray-950 from-gray-900"
        >
            <div className="container mx-auto text-center">
                <h2 className="mb-8 text-3xl font-bold text-white md:text-5xl">
                    {language === "en"
                        ? "What Our Students Say"
                        : "আমাদের শিক্ষার্থীরা যা বলেন"}{" "}
                    <span className="items-center justify-center inline-block">
                        <button
                            className={`w-16 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out transition-colors ${
                                language == "en"
                                    ? "bg-gray-400"
                                    : "bg-green-500"
                            }`}
                            onClick={toggleLanguage}
                        >
                            <div
                                className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
                                    language == "en"
                                        ? "translate-x-0"
                                        : "translate-x-8"
                                }`}
                            ></div>
                        </button>
                    </span>
                </h2>

                <Slider {...settings}>
                    {testimonialsData[language].map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="flex flex-col items-center p-4 text-white"
                        >
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-24 h-24 mx-auto mb-4 border-2 rounded-full border-darkblueish"
                            />
                            <h3 className="text-xl font-semibold">
                                {testimonial.name}
                            </h3>
                            <p className="mb-2 text-gray-300">
                                {testimonial.designation}
                            </p>
                            <p className="mb-2 italic text-center">
                                "{testimonial.testimonial}"
                            </p>
                            <p className="font-semibold text-green-600">
                                — {testimonial.recommendation}
                            </p>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default TestimonialSection;
