function checkAnswer(){
    // Define the correct answer
    const checkAnswer = "4";

    // Get the user's selected answer
    const userAnswer = document.querySelector('input[="quiz"]:checked');


    // Get the feedback element
    const feedback = document.getElementById('feedback');
 
    
    // Check if an answer was seclected
    
    if (!userAnswer) {
        feedback.textContent = "Please select an answer.";
        return;
    }
    function userAnswer() {
    var userAnswer = document.getElementById("outputval").value;

    if (answer ===userAnswer) {
        alert ("Correct- Well done!"); // correct feeedback
    }else {
        alert("That's incorrect.Try again!"); // incorrect feedback
    }
    }


// Addan eventlistener to the submit button (as per the check requirements)
const submitbutton = document.getElementById('submit-answer');
submitbutton.addEventListener("click", checkAnswer);
