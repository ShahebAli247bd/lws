import React from 'react'

function About() {
  return (
     
        <section id="about" className="min-h-screen flex items-center">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-6">
                    Mastering Email Template Design & Development
                </h2>
                <p className="text-lg mb-8">
                    Learn to create responsive and dark mode-compatible
                    email templates using Figma, Photoshop, HTML & CSS.
                    This course will guide you from concept to code,
                    making you proficient in email design, testing, and
                    marketing.
                </p>
                <a
                    href="#features"
                    className="px-6 py-3 bg-primary text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition duration-300"
                >
                    Learn More
                </a>
            </div>
        </section>
  )
}

export default About