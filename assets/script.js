import timer from '/timer.js';

// Start the timer and call generateQuiz when the page loads
window.onload = function() {
  timer.start();
  generateQuiz();
};

function generateQuiz() {
  // An array of questions.
  let questions = [
    {
      question: "What method is used to add an element to the end of an array in JavaScript?",
      answers: ["push()", "add()", "concat()", "append()"],
      correctAnswer: 0 // Index of the correct answer
    },
    {
      question: "Which operator is used for strict equality comparison in JavaScript?",
      answers: ["==", "===", "=", "!="],
      correctAnswer: 1 // Index of the correct answer
    },
    {
      question: "What is the purpose of the getElementById method in JavaScript?",
      answers: ["To select an element by its class name","To select the first element that matches a specified CSS selector", "To select an element by its ID", "To select all elements that match a specified CSS selector"],
      correctAnswer: 2 // Index of the correct answer
    },
    {
      question: "Which of the following is NOT a JavaScript data type?",
      answers: ["string","boolean", "integer", "object"],
      correctAnswer: 2 // Index of the correct answer
    },
    {
      question: "Which of the following is the correct way to create a function in JavaScript??",
      answers: ["function myFunction() { }","myFunction() { }", "create myFunction() { }", "new Function() { }"],
      correctAnswer: 0 // Index of the correct answer
    },
    {
      question: "Which of the following is not a valid JavaScript variable name?",
      answers: ["myVariable", "_myVariable", "$variable", "None of the above"],
      correctAnswer: 3 // Index of the correct answer
    }
  ];
  
  // Rest of the code...

  // Function to check the selected answer
  function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
      // Increment the score if the answer is correct
      score++;
    }

    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      setQuestionAndAnswers(questions[currentQuestionIndex]);
    } else {
      // Quiz ended
      saveScore(score);
      window.location.href = '/complete.html'; // Redirect to complete.html
    }
  }

  // Rest of the code...
}

// Function to save the score in local storage
function saveScore(score) {
  localStorage.setItem('quizScore', score);
  console.log('Score saved to local storage.');
}
