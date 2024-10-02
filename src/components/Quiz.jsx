import React, { useState, useEffect } from "react";
import html2canvas from "html2canvas"; // For capturing the screenshot as JPG
import { Chart } from "react-google-charts"; // For chart functionality

const QuizApp = () => {
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const [step, setStep] = useState(1);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [results, setResults] = useState(null);
    const [userScore, setUserScore] = useState(0);
    const [ipBlocked, setIpBlocked] = useState(false); // IP blocking state
     
    const questions = [
        // HTML Questions
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "Hyperlinks and Text Markup Language",
                "High-Level Text Markup Language",
                "None of the above",
            ],
            answer: "Hyper Text Markup Language",
        },
        {
            question: "Which tag is used to create a hyperlink in HTML?",
            options: ["<link>", "<a>", "<href>", "<url>"],
            answer: "<a>",
        },
        {
            question:
                "What is the correct HTML element for inserting a line break?",
            options: ["<br>", "<lb>", "<break>", "<newline>"],
            answer: "<br>",
        },
        {
            question:
                "Which attribute is used to specify the URL of the page the link goes to?",
            options: ["url", "src", "href", "link"],
            answer: "href",
        },
        {
            question: "What is the purpose of the <head> tag in HTML?",
            options: [
                "To contain the main content of the document",
                "To provide metadata about the document",
                "To create a header section on the page",
                "To link external stylesheets",
            ],
            answer: "To provide metadata about the document",
        },

        // CSS Questions
        {
            question: "What does CSS stand for?",
            options: [
                "Cascading Style Sheets",
                "Computer Style Sheets",
                "Creative Style Sheets",
                "Colorful Style Sheets",
            ],
            answer: "Cascading Style Sheets",
        },
        {
            question:
                "Which property is used to change the background color in CSS?",
            options: ["color", "bgcolor", "background-color", "background"],
            answer: "background-color",
        },
        {
            question: "How do you apply a CSS class to an HTML element?",
            options: [
                "<element class='classname'>",
                "<element style='classname'>",
                "<element id='classname'>",
                "<element type='classname'>",
            ],
            answer: "<element class='classname'>",
        },
        {
            question: "Which CSS property controls the text size?",
            options: ["font-size", "text-size", "font-style", "text-style"],
            answer: "font-size",
        },
        {
            question:
                "What is the correct CSS syntax to change the font of an element?",
            options: [
                "font-family: Arial;",
                "font: Arial;",
                "text-font: Arial;",
                "font-style: Arial;",
            ],
            answer: "font-family: Arial;",
        },

        // Basic Computer Knowledge Questions
        {
            question: "What is the main function of the CPU?",
            options: [
                "To store data",
                "To perform calculations and process instructions",
                "To connect to the internet",
                "To display graphics",
            ],
            answer: "To perform calculations and process instructions",
        },
        {
            question: "Which of the following is an operating system?",
            options: ["Microsoft Word", "Windows", "Chrome", "Excel"],
            answer: "Windows",
        },
        {
            question: "What does RAM stand for?",
            options: [
                "Read Access Memory",
                "Random Access Memory",
                "Ready Access Memory",
                "Rapid Access Memory",
            ],
            answer: "Random Access Memory",
        },
        {
            question: "Which device is used to input data into a computer?",
            options: ["Monitor", "Printer", "Keyboard", "Speaker"],
            answer: "Keyboard",
        },
        {
            question: "What is phishing?",
            options: [
                "A technique to catch fish",
                "A method of attempting to acquire sensitive information by masquerading as a trustworthy entity",
                "A type of software",
                "A way to enhance security",
            ],
            answer: "A method of attempting to acquire sensitive information by masquerading as a trustworthy entity",
        },
        {
            question: "Which of the following is a programming language?",
            options: ["HTML", "CSS", "JavaScript", "All of the above"],
            answer: "JavaScript",
        },
        {
            question: "What does URL stand for?",
            options: [
                "Uniform Resource Locator",
                "Universal Resource Locator",
                "Uniform Resource Link",
                "Universal Resource Link",
            ],
            answer: "Uniform Resource Locator",
        },
        {
            question: "Which of the following is not a computer network?",
            options: ["LAN", "WAN", "MAN & PAN", "All"],
            answer: "All",
        },
        {
            question: "What is the purpose of antivirus software?",
            options: [
                "To speed up the computer",
                "To prevent malware infections",
                "To enhance graphics",
                "To manage memory",
            ],
            answer: "To prevent malware infections",
        },
        {
            question: "Which of the following is a web browser?",
            options: [
                "Google Chrome",
                "Microsoft Word",
                "Photoshop",
                "PowerPoint",
            ],
            answer: "Google Chrome",
        },
    ];

   
    
    useEffect(() => {
        const previousResult = localStorage.getItem("quizResult");
        const userIP = localStorage.getItem("userIP");

        // IP blocking check
        fetch("https://api.ipify.org/?format=json")
            .then((response) => response.json())
            .then((data) => {
                // console.log("User IP:", data.ip);
                if (userIP === data.ip) {
                    setIpBlocked(true);
                }
            })
            .catch((error) => console.error("Error fetching IP:", error));

        if (previousResult) {
            setResults(JSON.parse(previousResult));
            setStep(3);
        }
    }, []);

    /**
     * Handle Input Change
     */
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setUserInfo({ ...userInfo, [id]: value });
    };
    /**
     * Start Quiz
     */
    const startQuiz = () => {
        if (userInfo.name && userInfo.email && userInfo.phone) {
            setStep(2);
        } else {
            alert("Please fill out all fields.");
        }
    };

    /**
     * Next Question
     */
    const nextQuestion = () => {
        if (selectedAnswer === null) {
            alert("Please select an answer.");
            return;
        }

        if (selectedAnswer === questions[currentQuestion].answer) {
            setUserScore(userScore + 1);
        }

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null); // Reset answer selection
        } else {
            submitQuiz();
        }
    };

    const previousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setSelectedAnswer(null); // Reset answer selection
        }
    };
    /**
     * Submit Quiz
     */
    const submitQuiz = () => {
        const scorePercentage = (userScore / questions.length) * 100;

        const resultData = {
            score: scorePercentage,
            userInfo,
        };

        setResults(resultData);
        setStep(3);

        // Store result and block IP
        localStorage.setItem("quizResult", JSON.stringify(resultData));
        fetch("https://api.ipify.org/?format=json")
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("userIP", data.ip); // Save user's IP to block re-attempts
            });
    };
    /**
     * Download Result as a jpg
     */
    const downloadResultAsJPG = () => {
        const element = document.getElementById("quiz-section");

        html2canvas(element, {
            useCORS: true, // Enable cross-origin resource sharing if needed
            width: element.offsetWidth, // Ensure the canvas captures the full width
            height: element.offsetHeight, // Capture the full height
        }).then((canvas) => {
            const link = document.createElement("a");
            link.href = canvas.toDataURL("image/jpeg", 1.0); // Set the quality to 1.0 (max)
            link.download = "quiz_result.jpg";
            link.click();
        });
    };
    /**
     * Send mail with Result
     */
    const sendMailWithResult = () => {
        const mailBody = `Hi LearnWithShaheb,\n\nHere are my quiz results:\n\nScore: ${results.score}%\n\nPersonal Info: \n\nName: ${results.userInfo.name}\n\nEmail: ${results.userInfo.email}\n\nPhone: ${results.userInfo.phone}\n\nThanks for arranging such a great quiz! \n\n Thanks & Regards, \n${userInfo.name}`;

        // Create the mailto link
        const mailtoLink = `mailto:${
            results.userInfo.email
        }?subject=Quiz Results of ${results.userInfo.name} | ${
            results.userInfo.email
        }&body=${encodeURIComponent(mailBody)}`;

        // Attempt to open the mailto link
        window.location.href = mailtoLink;

        // If the mailto doesn't work (like Outlook not set up), provide a Gmail alternative
        setTimeout(() => {
            // Create a Gmail link
            const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${
                results.userInfo.email
            }&su=Quiz Results of ${results.userInfo.name} | ${
                results.userInfo.email
            }&body=${encodeURIComponent(mailBody)}`;

            if (
                confirm(
                    "If your default email client doesn't open, would you like to use Gmail?"
                )
            ) {
                window.open(gmailLink, "_blank");
            }
        }, 2000);
    };
 

    return (
        <div id="quiz" className="flex flex-col items-center justify-center pt-12 pb-12 text-white quiz-container bg-gradient-to-r from-gray-950 to-gray-900">
            <h2 className="mb-12 text-3xl font-bold text-center md:text-5xl">
                Perticipate{" "}
                <a
                    href={
                        "#quiz"
                    }
                    
                    rel="noopener noreferrer"
                    className="text-blue-500 rounded "
                >
                    the Quiz
                </a>
            </h2>
            {step === 1 && (
                <div className="w-full max-w-md p-6 text-gray-800 bg-white rounded-lg shadow-lg">
                    <h2 className="mb-4 text-2xl font-bold text-center text-blue-900">
                        Enter Your Information
                    </h2>
                    <label
                        htmlFor="name"
                        className="block mb-1 text-sm font-medium"
                    >
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={userInfo.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />

                    <label
                        htmlFor="email"
                        className="block mb-1 text-sm font-medium"
                    >
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={userInfo.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />

                    <label
                        htmlFor="phone"
                        className="block mb-1 text-sm font-medium"
                    >
                        Phone:
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        value={userInfo.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />

                    <button
                        onClick={startQuiz}
                        className="w-full px-4 py-2 font-bold text-white transition-transform duration-200 transform bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105"
                    >
                        Start Quiz
                    </button>
                </div>
            )}

            {step === 2 && (
                <div className="w-full max-w-2xl p-6 mt-8 text-gray-800 bg-white rounded-lg shadow-lg">
                    <h2 className="mb-2 text-xl font-semibold text-blue-900">
                        Question {currentQuestion + 1}
                    </h2>
                    <p className="mb-4 text-lg font-bold text-gray-900">
                        {questions[currentQuestion].question}
                    </p>
                    <ul className="space-y-4">
                        {questions[currentQuestion].options.map(
                            (option, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() =>
                                            setSelectedAnswer(option)
                                        }
                                        className={`w-full text-left px-4 py-2 rounded-lg ${
                                            selectedAnswer === option
                                                ? "bg-blue-600 text-white"
                                                : "bg-gray-100 hover:bg-gray-200"
                                        } transition-colors`}
                                    >
                                        {option}
                                    </button>
                                </li>
                            )
                        )}
                    </ul>
                    <div className="flex justify-between mt-6">
                        <button
                            onClick={previousQuestion}
                            className="px-4 py-2 font-bold text-white transition-transform duration-200 transform bg-gray-600 rounded-lg shadow-md hover:bg-gray-700 hover:scale-105"
                            disabled={currentQuestion === 0} // Disable if on the first question
                        >
                            Previous
                        </button>
                        <button
                            onClick={nextQuestion}
                            className="px-4 py-2 font-bold text-white transition-transform duration-200 transform bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105"
                        >
                            {currentQuestion === questions.length - 1
                                ? "Submit"
                                : "Next"}
                        </button>
                    </div>
                </div>
            )}

            {step === 3 && results && (
                <div
                    id="quiz-section"
                    className="w-full max-w-2xl p-6 mt-8 text-gray-800 bg-white rounded-lg shadow-lg"
                >
                    <div className="flex items-center justify-center">
                        <div className="w-full max-w-md text-center rounded-lg shadow-lg ">
                            <h2 className="mb-4 text-3xl font-bold text-green-600">
                                {results?.score >= 50
                                    ? "Congratulations!"
                                    : "O Sorry, My Bad!"}
                            </h2>
                            <p className="mb-4 text-lg">
                                {results?.score >= 50
                                    ? `You Passed! Your scored  ${results?.score} % in the quiz. Great job! Your are Eligible, Enroll now`
                                    : `Unfortunately You didnot pass the Quiz, You got ${results?.score} % in the quiz. Try again from another Browser!`}
                            </p>
                        </div>
                    </div>
                    <h2 className="mb-4 text-2xl font-bold text-blue-900">
                        Quiz Results
                    </h2>
                    <div id="result-section">
                        <p className="mb-2 text-lg font-bold">
                            Name: {results?.userInfo.name}
                        </p>
                        <p className="mb-2 text-lg font-bold">
                            Email: {results?.userInfo.email}
                        </p>
                        <p className="mb-2 text-lg font-bold">
                            Phone: {results?.userInfo.phone}
                        </p>
                        <p className="mb-2 text-lg font-bold">
                            Score: {results?.score}%
                        </p>
                    </div>

                    <Chart
                        chartType="PieChart"
                        data={[
                            ["Result", "Percentage"],
                            ["Correct", results?.score],
                            ["Incorrect", 100 - results?.score],
                        ]}
                        options={{
                            title: "Quiz Results",
                            pieHole: 0.4,
                        }}
                        width="100%"
                        height="300px"
                    />
                </div>
            )}
            {step == 3 && results && (
                <div className="flex gap-4 p-2 m-2">
                    {" "}
                    <button
                        onClick={downloadResultAsJPG}
                        className="px-4 py-2 mt-4 font-bold text-white transition-transform duration-200 transform bg-green-600 rounded-lg shadow-md hover:bg-green-700 hover:scale-105"
                    >
                        Download as JPG
                    </button>
                    <button
                        onClick={sendMailWithResult}
                        className="px-4 py-2 mt-4 font-bold text-white transition-transform duration-200 transform bg-yellow-600 rounded-lg shadow-md hover:bg-yellow-700 hover:scale-105"
                    >
                        Email Results
                    </button>
                </div>
            )}
        </div>
    );
};

export default QuizApp;
