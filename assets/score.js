// Function to retrieve the score from local storage
function getScoreFromLocalStorage() {
    const score = localStorage.getItem('quizScore');
    return score ? parseInt(score) : 0; // Convert score to a number or return 0 if it doesn't exist
}

// Display the score on the page
const scoreElement = document.getElementById('score');
scoreElement.textContent = getScoreFromLocalStorage();