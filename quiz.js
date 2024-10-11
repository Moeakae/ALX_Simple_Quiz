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
    
    

    if (userAnswer.value ===correctAnswer) {
        feedback.textContent = "Correct- Well done!"; // correct feeedback
    }else {
        feedback.textContent = "That's incorrect.Try again!"; // incorrect feedback
    }

    if (correctAnswer ==4) {
        feedback.textContent = "this is correct!";
    }
    else {
        feedback.textContent = "this is incorrect!";
    }
    return 4
    }
    


    // Add an eventlistener to the submit button (as per the check requirements)
    const submitbutton = document.querySelector("#submit-answer");
    submitbutton.addEventListener("click", checkAnswer)
