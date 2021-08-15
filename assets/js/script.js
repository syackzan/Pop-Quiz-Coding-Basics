console.log("Hello");

// querySelectors with Console Logs to Confirm if retreivals are workings //

// Storing the Start Button into Button1 //
var button1 = document.querySelector ("button");
console.log(button1);

var headerOne = document.querySelector ("h1");
console.log(headerOne);

var description = document.querySelector(".description");
console.log(description);

var answerBox = document.querySelector(".answerBox");
console.log(answerBox);

// Creating Button Children //

var button2 = document.createElement ("button");
var button3 = document.createElement ("button");
var button4 = document.createElement ("button");

// Initial Function to open up the first question //
function startQuiz (){

    // Changing Initial HTML Elements to Quiz Format //
    headerOne.textContent = "Who is the greatest Coder to ever Walk the Earth?";
    description.style.display = "none";
    answerBox.setAttribute ("style", "align-items: flex-start"); 
    
    // Appending New Buttons //
    answerBox.appendChild (button2);
    answerBox.appendChild (button3);
    answerBox.appendChild (button4);

    // Adding Text to New Appended Buttons //
    button1.textContent = "Steve Jobs";
    button2.textContent = "Mark Zuckerberg";
    button3.textContent = "Elon Musk";
    button4.textContent = "Jeff Bezos"
}

button1.addEventListener ("click", function () {
    startQuiz ();
});
   