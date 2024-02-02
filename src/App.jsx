import React, { useState, useEffect } from "react";
import questions from "./question";
import "./index.css";

function shuffle(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questionText, setQuestionText] = useState("");
  const [choices, setChoices] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showRestartButton, setShowRestartButton] = useState(false);

  const startQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowNextButton(false);
    showQuestion(0);
  };

  const showQuestion = (index) => {
    resetState();
    let currentQuestion = questions[index];
    let questionNumber = index + 1;
    setQuestionText(`${questionNumber}. ${currentQuestion.question}`);
    const shuffledChoices = shuffle(currentQuestion.choices);
    setChoices(shuffledChoices);
    setCorrectAnswer(currentQuestion.choices.findIndex((choice) => choice.answer === true));
  };  

  const resetState = () => {
    setChoices([]);
    setCorrectAnswer(null);
    setSelectedAnswer(null);
  };

  const selectChoice = (isCorrect, index) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    setSelectedAnswer(index);
    setShowNextButton(true);
  };

  const handleNextButton = () => {
    setShowNextButton(false);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

    if (currentQuestionIndex < questions.length - 1) {
      showQuestion(currentQuestionIndex + 1);
    } else {
      // If it's the last question, show the score
      showScore();
    }
  };

  const handleRestartButton = () => {
    window.location.reload();
  }

  const showScore = () => {
    resetState();
    setQuestionText(`You scored ${score} out of ${questions.length}!`);
    setShowRestartButton(true);
  };

  useEffect(() => {
    startQuiz();
  }, []);

  return (
    <div className="bg-white w-[90%] max-w-[600px] mt-[100px] mx-auto mb-[0] rounded-[10px] p-[30px] text-center md:text-left">
      <h1 className="text-[25px] text-[#001e4d] font-semibold pb-[30px] border-b border-[#333]">
        Simple Quiz
      </h1>
      <div className="py-[20px] px-0">
        <h2 id="question" className="text-[18px] text-[#001e4d] font-semibold">
          {questionText}
        </h2>
        <div id="answer-buttons">
          {choices.map((choice, index) => (
            <button
              key={index}
              className={`bg-white text-[#222] font-medium w-full border border-[#222] p-[10px] my-[10px] mx-auto rounded-[4px] cursor-pointer transition-all duration-300 enabled:hover:bg-[#222] enabled:hover:text-white disabled:cursor-no-drop md:text-left  ${selectedAnswer === index ? (choice.answer ? "correct" : "incorrect") : ""}`}
              onClick={() => selectChoice(choice.answer, index)}
              aria-label={choice.text}
              disabled={selectedAnswer !== null}
            >
              {choice.text}
            </button>
          ))}
        </div>
        { showNextButton && ( 
          <button id="next-button" className="bg-[#001e4d] text-white font-medium w-[200px] text-center border-0 p-[15px] mx-auto mt-[20px] rounded-[7px] cursor-pointer flex items-center justify-center" onClick={handleNextButton}>
            Next
          </button>
        )}
        { showRestartButton && ( 
          <button id="next-button" className="bg-[#001e4d] text-white font-medium w-[200px] border-0 p-[15px] mx-auto mt-[20px] rounded-[7px] cursor-pointer flex items-center justify-center" onClick={handleRestartButton}>
            Restart
          </button>
        )}
      </div>
    </div>
  );
}