console.log("Hello");

var startButton = document.querySelector ("button");
console.log(startButton);

var headerOne = document.querySelector ("h1");
console.log(headerOne);

var description = document.querySelector(".description");
console.log(description);

var answerBox = document.querySelector(".answers");
console.log(answerBox);

function startQuiz (){
    headerOne.textContent = "Question One";
    description.style.display = "none";
    startButton.textContent = "Answer";
    answerBox.style.alignItems = ("flex-start");
       
}

startButton.addEventListener ("click", function () {
    startQuiz ();
});
   