import React, { useState, useEffect } from 'react';

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    // Exit early if time is up
    if (timeRemaining <= 0) {
      setTimeRemaining(10);
      onAnswered(false);
      return;
    }

    // Set up the timer
    const timerId = setTimeout(() => {
      setTimeRemaining(timeRemaining => timeRemaining - 1);
    }, 1000);

    // Clean up the timer
    return () => clearTimeout(timerId);
  }, [timeRemaining, onAnswered]); // Important dependencies

  // Render the question
  return (
    <>
      <h1>Question</h1>
      <h3>{question.prompt}</h3>
      {question.answers.map((answer, index) => (
        <button key={index} onClick={() => {
          setTimeRemaining(10);
          onAnswered(answer.correct);
        }}>
          {answer.text}
        </button>
      ))}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;