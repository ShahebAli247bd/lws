import React, { useState, useEffect } from "react";
import html2canvas from "html2canvas"; // For capturing the screenshot as JPG
import { Chart } from "react-google-charts"; // For chart functionality

const QuizApp = () => {
  const [userInfo, setUserInfo] = useState({ name: "", email: "", phone: "" });
  const [step, setStep] = useState(3);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [results, setResults] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [ipBlocked, setIpBlocked] = useState(false); // IP blocking state

  const questions = [
    {
      question: "What is React?",
      options: ["Library", "Framework", "Language", "Tool"],
      answer: "Library",
    },
    {
      question: "What is JSX?",
      options: ["JavaScript", "HTML", "React", "XML"],
      answer: "XML",
    },
    // Add more questions here
  ];
  useEffect(() => {
    const previousResult = localStorage.getItem("quizResult");
    const userIP = localStorage.getItem("userIP");

    // IP blocking check
    fetch("https://api.ipify.org/?format=json")
      .then((response) => response.json())
      .then((data) => {
        if (userIP === data.ip) {
          setIpBlocked(true);
        }
      });

    if (previousResult) {
      setResults(JSON.parse(previousResult));
      setStep(3);
    }
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserInfo({ ...userInfo, [id]: value });
  };

  const startQuiz = () => {
    if (userInfo.name && userInfo.email && userInfo.phone) {
      setStep(2);
    } else {
      alert("Please fill out all fields.");
    }
  };

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

  const downloadResultAsJPG = () => {
    const element = document.getElementById("result-section");
    html2canvas(element).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/jpeg");
      link.download = "quiz_result.jpg";
      link.click();
    });
  };

  const sendMailWithResult = () => {
    const mailBody = `Hi LearnWithShaheb,\n\nHere are my quiz results:\n\nScore: ${results.score}%\n\nName: ${userInfo.name}\n\nEmail: ${userInfo.email}\n\nPhone: ${userInfo.phone}\n\nThanks for arranging such a grate quiz! \n\n Thanks & Regards, \n${userInfo.name}`;

    // Create the mailto link
    const mailtoLink = `mailto:${userInfo.email}?subject=Quiz Results of ${
      userInfo.name
    } | ${userInfo.email}&body=${encodeURIComponent(mailBody)}`;

    // Attempt to open the mailto link
    window.location.href = mailtoLink;

    // If the mailto doesn't work (like Outlook not set up), provide a Gmail alternative
    setTimeout(() => {
      // Create a Gmail link
      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${
        userInfo.email
      }&su=Quiz Results of ${userInfo.name} | ${
        userInfo.email
      }&body=${encodeURIComponent(mailBody)}`;

      // Optionally, you could provide feedback to the user here if needed.
      if (
        confirm(
          "যদি আপনার Outlook ইমেইল ক্লায়েন্ট খুলতে না পারে, তাহলে কি আপনি Gmail ব্যবহার করতে চান?"
        )
      ) {
        window.open(gmailLink, "_blank");
      }
    }, 2000); // Wait for 2 seconds before attempting to redirect to Gmail
  };
  // if (ipBlocked) {
  //   return (
  //     <div className="quiz-container flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-blue-500 text-white">
  //       <h1 className="text-3xl font-bold">You've already taken the quiz!</h1>
  //       <button
  //         onClick={() => setStep(3)} // Go to results
  //         className="mt-4 bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-200"
  //       >
  //         View Your Quiz Results
  //       </button>
  //     </div>
  //   );
  // }
  return (
    <div className="quiz-container flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-blue-500 text-white">
      {step === 1 && (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-gray-800">
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-900">
            Enter Your Information
          </h2>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={userInfo.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={userInfo.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <label htmlFor="phone" className="block text-sm font-medium mb-1">
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
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md w-full transform hover:scale-105 transition-transform duration-200"
          >
            Start Quiz
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full text-gray-800">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">
            Question {currentQuestion + 1}
          </h2>
          <p className="text-lg font-bold text-gray-900 mb-4">
            {questions[currentQuestion].question}
          </p>
          <ul className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <button
                  onClick={() => setSelectedAnswer(option)}
                  className={`w-full text-left px-4 py-2 rounded-lg ${
                    selectedAnswer === option
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  } transition-colors`}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-6">
            <button
              onClick={previousQuestion}
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-200"
              disabled={currentQuestion === 0} // Disable if on the first question
            >
              Previous
            </button>
            <button
              onClick={nextQuestion}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-200"
            >
              {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      )}

      {step === 3 && results && (
        <div
          className="mt-8 bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full text-gray-800"
          id="result-section"
        >
          <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
            Your Results
          </h2>
          <Chart
            width={"100%"}
            height={"300px"}
            chartType="PieChart"
            loader={<div>Loading Chart...</div>}
            data={[
              ["Result", "Percentage"],
              ["Correct", results.score],
              ["Incorrect", 100 - results.score],
            ]}
            options={{
              title: "Quiz Score",
              pieHole: 0.4,
              is3D: false,
              colors: ["#4caf50", "#f44336"],
            }}
          />
          <p className="text-center text-lg mt-4">
            Your score is: {results.score}%<br />
            Name: {results.userInfo.name}
            <br />
            Email: {results.userInfo.email}
            <br />
            Phone: {results.userInfo.phone}
          </p>
          <div className="flex justify-center mt-6">
            <button
              onClick={downloadResultAsJPG}
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-200"
            >
              Download Result as JPG
            </button>
            <button
              onClick={sendMailWithResult}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md ml-4 transform hover:scale-105 transition-transform duration-200"
            >
              Mail Result to Mentor
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
