console.log("Hello");

// Global Variables //
var scoreCount = 0;
var timer = 75;

// querySelectors with Console Logs to Confirm if retreivals are workings //
// Storing the Start Button into Button1 //
var startButton = document.querySelector ("button");
var headerOne = document.querySelector ("h1");
var userBox = document.querySelector (".userBox");
var description = document.querySelector(".description");
var answerBox = document.querySelector(".answerBox");
var count = document.querySelector(".count");
var timerHTML = document.querySelector(".timer");

// Creating Button Children //
var button1 = document.createElement ("button");
var button2 = document.createElement ("button");
var button3 = document.createElement ("button");
var button4 = document.createElement ("button");
var reveal = document.createElement ("p");
var enterIn = document.createElement("p");
var input = document.createElement ("input");
var submitB = document.createElement ("input");


// Functions //

// Setting Funcitonaliy between all buttons within the AnswerBox //

// Changing to Save Score Form //
function changeForm (){
    answerBox.setAttribute ("style", "flex-direction: row; justify-content: flex-start");
    description.textContent = "Your Final score is " + timer;

    answerBox.appendChild (enterIn);
    enterIn.textContent = "Enter Your Initials";

    answerBox.appendChild (input);
    input.setAttribute("type", "text");
    input.setAttribute ("name", "FullName");
    input.setAttribute ("placeholder", "Initials");
    input.style.display = "margin: 0 10px";

    answerBox.appendChild (submitB);
    submitB.setAttribute ("type", "submit");
    submitB.setAttribute ("value", "Submit");
    submitB.style.display = "margin: 0 10px";
}

// End saveScore Menu //
function storeScore (event){
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
        
    // Removing Buttons From HTML //
    headerOne.textContent = "All Done!";
    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    
    changeForm ();
    }

    event.stopPropagation()
    answerBox.addEventListener("click", function (event){
        //storeScore (event);
    })
    
}

// Question 5 Function //
function questionFive (event){
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
    headerOne.textContent = "Which country is home to Samurai's?";
    button1.textContent = "China";
    button2.textContent = "Japan";
    button3.textContent = "Canada";
    button4.textContent = "Korea";

    // True False Answers //
    button1.value = "false";
    button2.value = "true";
    button3.value = "false";
    button4.value = "false";
    }

    event.stopPropagation()
    answerBox.addEventListener("click", function (event){
        storeScore (event);
    })
    
}


// Question 4 Function //
function questionFour (event){
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
    headerOne.textContent = "How many Fingers do we have?";
    button1.textContent = "Five";
    button2.textContent = "Twenty";
    button3.textContent = "Ten";
    button4.textContent = "One";

    // True False Answers //
    button1.value = "false";
    button2.value = "false";
    button3.value = "true";
    button4.value = "false";
    }

    event.stopPropagation()
    answerBox.addEventListener("click", function (event){
        questionFive (event);
    })
    
}

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

        userBox.appendChild (reveal);
        reveal.setAttribute ("style", "font-size: 16px; color: gray; font-style: italic;")
       
        if (element.value == "true"){
            scoreCount++;
            count.textContent = "Answered Correct: " + scoreCount;
            reveal.textContent = "Correct!";
        } else {
            timer = timer - 10;
            timerHTML.textContent = "Timer: " + timer;
            reveal.textContent = "Wrong!";
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
   