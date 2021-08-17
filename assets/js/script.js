console.log("Hello");

// Global Variables //
var scoreCount = 0;
var timer = 150;
var timerInterval;

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
var resetB = document.createElement ("button");
var clearScoreB = document.createElement ("button");
var inputingScore = document.createElement ("li");
var ol = document.createElement ("ol");

var allScores = []

// Functions //

// Setting Funcitonaliy between all buttons within the AnswerBox //

// Timer Countdown //
function timerCountdown (){
    timerInterval = setInterval (function () {
        
        if (timer > 0){
        timer--
        timerHTML.textContent = "Timer: " + timer;
        }
    
        if (timer <= 0){
            clearInterval (timerInterval);
            alert("Fail");
        }

        if (timer.value === "true"){
            clearInterval(timerInterval);
        }
    }, 1000);
}

function renderHighS () {
    var HS = JSON.parse(localStorage.getItem("userInfo"));

    if (HS !== null){
        allScores = HS;
    }

    for (var i = 0; i < allScores.length; i++) {
        var oneScore = allScores[i];
    
        var li = document.createElement("li");
        li.textContent = "Initials: " + oneScore.initials + " Time: " + oneScore.timer;

        ol.appendChild(li);
      }

    var storedInitials = allScores.initials;
    var storedScores = allScores.score;
    
    description.appendChild (ol);
    ol.appendChild (inputingScore);
    ol.setAttribute ("style", "list-style-position: inside; margin-left: -30px");
    inputingScore.textContent = "Initials: " + storedInitials + " Time: " + storedScores;
}

// Updating Score //
function updatingScore (input){

    var userInfo = {
        initials: input.value,
        score: timer
    }
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    renderHighS ();
}

// Changin to High Score View //
function highScoreForm (){
    headerOne.textContent = "High Scores";
    enterIn.textContent = ""
    startButton.style.display = "none"
    input.style.display = "none";
    submitB.style.display = "none";
    reveal.style.display = "none";
    description.textContent = "";
    description.appendChild (ol);
    description.style.flexDirection = "column";
    answerBox.appendChild(resetB);
    answerBox.appendChild(clearScoreB);
    answerBox.setAttribute ("style", "flex-direction: row; justify-content: center; border-bottom: solid 1px gray")
    resetB.textContent = "Play Again!";
    clearScoreB.textContent = "Reset Scores";
    description.style.justifyContent = "center";

}

// Changing to Save Score Form //
function changeForm (){
    answerBox.setAttribute ("style", "flex-direction: row; justify-content: flex-start; border-bottom: solid 1px gray");
    answerBox.style.justifyContent = "flex-start";
    answerBox.style.flexDirection = "row";
    description.style.display = "visible";
    description.textContent = "Your Final score is " + timer;

    answerBox.appendChild (enterIn);
    enterIn.textContent = "Enter Your Initials:";

    answerBox.appendChild (input);
    input.setAttribute("type", "text");
    input.setAttribute ("name", "FullName");
    input.setAttribute ("placeholder", "Initials");
    input.setAttribute ("style", "margin: 0px 10px");

    answerBox.appendChild (submitB);
    submitB.setAttribute ("type", "submit");
    submitB.setAttribute ("value", "Submit");
    submitB.setAttribute ("style", "margin: 0px 10px; font-size: 24px; background-color: purple; color: white");

    console.log (input.value); 
}

// View High Scores Menu //
function viewHighScores (input){
    
    //Load Stored High Scores.
    renderHighS ();
    
    // Removing Buttons From HTML //
    highScoreForm ();
    updatingScore (input);
    
    event.stopPropagation()
    resetB.addEventListener("click", function (){
    location.reload();
    });

    clearScoreB.addEventListener("click", function (){
        localStorage.clear();
        stopPropagation();
        return;
    })
}

// End saveScore Menu //
function storeScore (event){
    var element = event.target;
    console.log(element);

    if (element.matches("button")){

        clearInterval(timerInterval);
        // Removing Buttons From HTML //
        headerOne.textContent = "All Done!";
        button1.style.display = "none";
        button2.style.display = "none";
        button3.style.display = "none";
        button4.style.display = "none";
        
        changeForm ();
    }

    event.stopPropagation()
    submitB.addEventListener("click", function (){
    viewHighScores (input);
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
            
            if (timer >= 10){
                timer = timer - 10;
                timerHTML.textContent = "Timer: " + timer;
                reveal.textContent = "Wrong!";
            } else {
                timer = 0;
                timerHTML.textContent = "Timer: " + timer;

            }
            
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
    description.textContent = " ";
    description.setAttribute ("style", "margin: 0px; border: none");
    startButton.style.display = "none";
    count.textContent = "Answered Correct: " + scoreCount;
    timerHTML.textContent = "Timer: " + timer;
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
    timerCountdown();
});
   