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
        feedback.textContent = "Correct- Well done!"; // correct 
        feedback.style.color ="green"; // correct
    }else {
        feedback.textContent = "That's incorrect.Try again!"; // incorrect feedback
        feedback.style.color ="red"; // incorrect color
    }

    if (userAnswer ===checkAnswer) {
        feedback.textContent = "this is correct!";
        feedback.style.color = "pink"; // correct color
    }
    else {
        feedback.textContent = "Please select an anwer befor submitting!";
        feedback.style.color = "orange"; //no selection
    }
    
    }
    


    // Add an eventlistener to the submit button (as per the check requirements)
    const submitbutton = document.querySelector("#submit-answer");
    submitbutton.addEventListener("click", checkAnswer)
