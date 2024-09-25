import React, { useState } from 'react';
import './quiz.css';
import QuizList from './QuizList';

function Quiz() {
  const questions = [
    {
      question: "What is React?",
      options: ['React is Library', 'React is Framework', 'Css Framework', 'Testing tool'],
      answer: 'React is Library',
    },
    {
      question: "What is the value of π (pi) approximately?",
      options: ['3.142', '2.718', '1.618', '4.669'],
      answer: '3.142',
    },
    {
      question: "What is 5 + 7?",
      options: ['10', '11', '12', '13'],
      answer: '12',
    },
    {
      question: "What is the area of a rectangle with a length of 5 and a width of 3?",
      options: ['15', '10', '8', '20'],
      answer: '15',
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [isQuizComplete, setIsQuizComplete] = useState(false); // Track if quiz is complete

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setCurrentAnswer(null);
      setIsOptionSelected(false);
    } else {
      setIsQuizComplete(true); // Set quiz as complete after the last question
    }
  };

  const handleClick = (option) => {
    setCurrentAnswer(option);
    setIsOptionSelected(true);
  };

  return (
    <div>
      {/* Check if quiz is complete */}
      {isQuizComplete ? (
        <div className='quiz-complete'>
          <h2>Thank you for completing the quiz!</h2>
          <p>We hope you enjoyed it. You answered {questions.length} questions!</p>
        </div>
      ) : (
        <QuizList 
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          handleClick={handleClick}
          currentAnswer={currentAnswer}
          handleNextQuestion={handleNextQuestion}
          isOptionSelected={isOptionSelected}
        />
      )}
    </div>
  );
}

export default Quiz;
