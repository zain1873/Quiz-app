import React from 'react';
import './quiz.css';

function QuizList({ question, options, handleClick, currentAnswer, handleNextQuestion, isOptionSelected }) {
  return (
    <div className='quiz-container'>
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleClick(option)} // Use handleClick from props
            className={currentAnswer === option ? 'selected' : ''}
          >
            {option}
          </li>
        ))}
      </ul>
      <button 
        className='app_btn' 
        onClick={handleNextQuestion} 
        disabled={!isOptionSelected} // Disable button if no option is selected
      >
        Next Question
      </button>
    </div>
  );
}

export default QuizList;
