// Add an event listener to the form submit event
document.querySelector('form').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get all question elements
    const questions = document.querySelectorAll('.question');

    // Initialize variables for tracking correct answers and total questions
    let correctAnswers = 0;
    const totalQuestions = questions.length;

    // Loop through each question
    questions.forEach(function(question) {
        // Get the selected radio input within the question
        const selectedAnswer = question.querySelector('input[type="radio"]:checked');

        // Get the correct answer from the hidden input
        const correctAnswer = question.querySelector('.correct-answer').value;

        // If there is a selected answer and it matches the correct answer, increment the count of correct answers
        if (selectedAnswer && selectedAnswer.value === correctAnswer) {
            correctAnswers++;
        }
    });

    // Calculate the percentage of correct answers
    const percentage = (correctAnswers / totalQuestions) * 100;

    // Display the results
    displayResults(percentage);
});

// Function to display the results
function displayResults(percentage) {
    // Display the percentage of correct answers
    alert(`You scored ${percentage.toFixed(2)}% in the test.`);
}
