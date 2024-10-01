import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialsList = [
    {
        id: 1,
        name: "John Doe",
        designation: "Web Developer",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        testimonial:
            "This course helped me enhance my skills in email template design and development!",
        recommendation: "Highly recommend this course!",
    },
    {
        id: 2,
        name: "Jane Smith",
        designation: "Graphic Designer",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        testimonial:
            "I learned so much about responsive design and email marketing strategies.",
        recommendation: "This is a must-take course for aspiring designers!",
    },
    {
        id: 3,
        name: "Alice Johnson",
        designation: "Marketing Specialist",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        testimonial:
            "The live classes and hands-on training were invaluable. I feel more confident now!",
        recommendation: "Best investment for my career!",
    },
];

const TestimonialSection = () => {
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
             <ul style={{ margin: "0px" }} className="text-white"> {dots} </ul>
         </div>
     ),
 };

    return (
        <section className="flex items-center justify-center py-16 bg-gradient-to-r to-gray-950 from-gray-900">
            <div className="container mx-auto text-center">
                <h2 className="mb-8 text-4xl font-bold text-white">
                    What Our Students Say
                </h2>
                <Slider {...settings}>
                    {testimonialsList.map((testimonial) => (
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
