console.log("Hello");

// Global Variables //
var scoreCount = 0;
var timer = 75;

// querySelectors with Console Logs to Confirm if retreivals are workings //
// Storing the Start Button into Button1 //
var startButton = document.querySelector ("button");
console.log(button1);

var headerOne = document.querySelector ("h1");
console.log(headerOne);

var userBox = document.querySelector (".userBox");

var description = document.querySelector(".description");
console.log(description);

var answerBox = document.querySelector(".answerBox");
console.log(answerBox);

var count = document.querySelector(".count");

var timerHTML = document.querySelector(".timer");

// Creating Button Children //
var button1 = document.createElement ("button");
var button2 = document.createElement ("button");
var button3 = document.createElement ("button");
var button4 = document.createElement ("button");
var show = document.createElement ("p");

// Functions //

// Setting Funcitonaliy between all buttons within the AnswerBox //

// Question 3 Function //
function questionThree (event){
    var element = event.target;
    console.log(element);

    if (element.matches("button")){

        if (element.value == "true"){
            //scoreCount++;
            //count.textContent = "Answered Correct: " + scoreCount;
        } else {
            //timer = timer - 10;
            //timerHTML.textContent = "Timer: " + timer;
        }
        
    // Adding New Question & Answer Text //
    headerOne.textContent = "What state is Mount Rushmore in?";
    button1.textContent = "California";
    button2.textContent = "Minnesota";
    button3.textContent = "South Dakota";
    button4.textContent = "North Dakota";

    // True False Answers //
    button1.value = "false";
    button2.value = "false";
    button3.value = "false";
    button4.value = "true";
    }

    event.stopPropagation()
    answerBox.addEventListener("click", function (event){
        questionFour (event);
    })
    
}

// Question 2 & Set Up for Allow Box Selection inside Div Area//
function questionTwo (event){
    var element = event.target;
    console.log(element);



    if (element.matches("button")){

        userBox.appendChild (show);
        show.setAttribute ("style", "font-size: 16px; color: gray; font-style: italic;")
       
        if (element.value == "true"){
            scoreCount++;
            count.textContent = "Answered Correct: " + scoreCount;
            show.textContent = "Correct!";
        } else {
            timer = timer - 10;
            timerHTML.textContent = "Timer: " + timer;
            show.textContent = "Wrong!";
        } 
        
    // Adding New Question & Answer Text //
    headerOne.textContent = "Are Tomato's Fruits or Vegetables?";
    button1.textContent = "Fruits";
    button2.textContent = "Vegetables";
    button3.textContent = "Shut Up";
    button4.textContent = "All of the Above";

    // True False Answers //
    button1.value = "true";
    button2.value = "false";
    button3.value = "false";
    button4.value = "false";

    event.stopPropagation()
    answerBox.addEventListener("click", function (event){
        questionThree (event);
    })
    }  
}

// Initial Function to open up the first question //
function startQuiz (){

    // Changing Initial HTML Elements to Quiz Format //
    headerOne.textContent = "Who is the greatest Coder to ever Walk the Earth?";
    description.style.display = "none";
    startButton.style.display = "none";
    count.textContent = "Answered Correct: " + scoreCount;
    timerHTML.textContent = "Clock: " + timer;
    answerBox.setAttribute ("style", "align-items: flex-start; border-bottom: solid 1px gray;"); 
    
    
    // Appending New Buttons //
    answerBox.appendChild (button1);
    answerBox.appendChild (button2);
    answerBox.appendChild (button3);
    answerBox.appendChild (button4);

    // Adding Text to New Appended Buttons //
    button1.textContent = "Steve Jobs";
    button2.textContent = "Mark Zuckerberg";
    button3.textContent = "Elon Musk";
    button4.textContent = "Jeff Bezos";

    // True False Answers //
    button1.value = "false";
    button2.value = "true";
    button3.value = "false";
    button4.value = "false";

    

    console.log (button1);
    console.log (button2);

    event.stopPropagation()
    answerBox.addEventListener("click", function (event){
        questionTwo (event);
    })
    
}

startButton.addEventListener ("click", function () {
    startQuiz ();
});
   