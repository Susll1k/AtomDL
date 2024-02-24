// Add an event listener to the form submit event


const btn = document.querySelector('.button')
const test = document.querySelector('.form')


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
function displayResults(percentage) {
    // Display the percentage of correct answers
    const container = document.createElement('div')
    // alert(`You scored ${percentage.toFixed(2)}% in the test.`);


    if(percentage.toFixed(2) == 100.00){

        btn.classList.add('none')

        const inputNew = document.createElement('input')
        inputNew.classList.add('newtext')
        inputNew.type = 'text'
        inputNew.value = `You scored ${percentage.toFixed(2)}% in the test.`
        inputNew.readOnly = true

        const img = document.createElement('button')
        img.classList.add('img2')



        
        container.append(inputNew)
        container.append(img)
        container.classList.add('block2')
        test.append(container)

        img.onclick = function(){
            window.location.href='courses.html';
        }
    }

    else{

        btn.classList.add('none')

        const inputNew = document.createElement('input')
        inputNew.classList.add('newtext2')
        inputNew.type = 'text'
        inputNew.value = `You scored ${percentage.toFixed(2)}% in the test.`
        inputNew.readOnly = true

        const img = document.createElement('button')
        img.classList.add('img1')
        


        
        container.append(inputNew)
        container.append(img)
        container.classList.add('block')
        test.append(container)

        img.onclick = function(){
            location.reload();
        }
    }


    



}






