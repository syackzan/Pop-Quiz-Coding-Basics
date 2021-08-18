console.log("Hello");

// Global Variables //
var scoreCount = 0;
var timer = 150;
var timerInterval;

// querySelectors with Console Logs to Confirm if retreivals are workings //
// Storing the Start Button into Button1 //
var startButton = document.querySelector ("#startButton");
var headerOne = document.querySelector ("h1");
var userBox = document.querySelector (".userBox");
var description = document.querySelector(".description");
var answerBox = document.querySelector(".answerBox");
var count = document.querySelector(".count");
var timerHTML = document.querySelector(".timer");

// Creating Button Children //
var buttonBox1 = document.createElement ("section");
var buttonBox2 = document.createElement ("section");
var buttonBox3 = document.createElement ("section");
var buttonBox4 = document.createElement ("section");
var buttonBox5 = document.createElement ("section");
var enterInitialsBox = document.createElement ("section")
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

var allScores = [];
var HS = [];

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
    console.log(HS);
    
    allScores = HS;
    

    for (var i = 0; i < allScores.length; i++) {
        var oneScore = allScores[i];
    
        var li = document.createElement("li");
        li.textContent = "Initials: " + oneScore.initials + " Time: " + oneScore.score;

        ol.appendChild(li);
      }
}

// Updating Score //
function updatingScore (){

    var completeList = JSON.parse(localStorage.getItem("userInfo"));
    var addToCompleteList = []
    
    if (completeList != null){
        addToCompleteList = completeList;
    }
    
    if (input != null){

        var userInfo = {
            initials: input.value,
            score: timer
        }
    console.log(userInfo);
    addToCompleteList.push(userInfo);

    localStorage.setItem("userInfo", JSON.stringify(addToCompleteList));
    }
    
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
    ol.setAttribute ("style", "list-style-position: inside; margin-left: -30px");
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
    userBox.appendChild(enterInitialsBox);
    enterInitialsBox.setAttribute ("style", "display: flex; flex-direction: row; justify-content: flex-start; padding: 10px; border-bottom: solid 1px gray");
    enterInitialsBox.style.justifyContent = "flex-start";
    enterInitialsBox.style.flexDirection = "row";
    description.style.display = "visible";
    description.textContent = "Your Final score is " + timer;

    enterInitialsBox.appendChild (enterIn);
    enterIn.textContent = "Enter Your Initials:";

    enterInitialsBox.appendChild (input);
    input.setAttribute("type", "text");
    input.setAttribute ("name", "FullName");
    input.setAttribute ("placeholder", "Initials");
    input.setAttribute ("style", "margin: 0px 10px");

    enterInitialsBox.appendChild (submitB);
    submitB.setAttribute ("type", "submit");
    submitB.setAttribute ("value", "Submit");
    submitB.setAttribute ("style", "margin: 0px 10px; font-size: 24px; background-color: purple; color: white");
}

// View High Scores Menu //
function viewHighScores (){
    
    // Removing Buttons From HTML //
    highScoreForm ();
    updatingScore ();
    
    event.stopPropagation()
    resetB.addEventListener("click", function (){
    location.reload();
    });

    clearScoreB.addEventListener("click", function (){
        localStorage.clear();
        description.textContent = "";
        return;
    })
}

// End saveScore Menu //
function storeScore (event){
    var element = event.target;

    if (element.matches("button")){

        clearInterval(timerInterval);
        // Removing Buttons From HTML //
        headerOne.textContent = "All Done!";
        button1.style.display = "none";
        button2.style.display = "none";
        button3.style.display = "none";
        button4.style.display = "none";
        
        changeForm();
        
        //var userNameInput = returnElementInput.value;
        //console.log(userNameInput);

        submitB.addEventListener("click", function (){
            viewHighScores ();
            })
    }
}

// Question 5 Function //
function questionFive (event){
    var element = event.target;
    console.log(element);

    if (element.matches("button")){

        //Erasing Buttons & Appending New Set
        buttonBox4.innerHTML = "";
        userBox.appendChild(buttonBox5);
        buttonBox5.setAttribute ("style", "display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start; border-bottom: solid 1px gray;");
        appButtons5();
            
        timerCheck(element);  

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

        buttonBox5.addEventListener("click", function (event){
            storeScore (event);
        })
    } 
}


// Question 4 Function //
function questionFour (event){
    var element = event.target;
    console.log(element);

    if (element.matches("button")){

        //Erasing Buttons & Appending New Set
        buttonBox3.innerHTML = "";
        userBox.appendChild(buttonBox4);
        buttonBox4.setAttribute ("style", "display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start; border-bottom: solid 1px gray;");
        appButtons4();
            
        timerCheck(element);    

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

        buttonBox4.addEventListener("click", function (event){
            questionFive (event);
        });
    } 
}

// Question 3 Function //
function questionThree (event){
    var element = event.target;
    console.log(element);

    if (element.matches("button")){

        //Erasing Buttons & Appending New Set
        buttonBox2.innerHTML = "";
        userBox.appendChild(buttonBox3);
        buttonBox3.setAttribute ("style", "display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start; border-bottom: solid 1px gray;");
        appButtons3();
            
        timerCheck(element);

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

        buttonBox3.addEventListener("click", function (event){
            questionFour (event);
        }); 
    } 
}

// Question 2 & Set Up for Allow Box Selection inside Div Area//
function questionTwo (event){
    var element = event.target;
    console.log(element);

    if (element.matches("button")){

        userBox.appendChild (reveal);
        reveal.setAttribute ("style", "font-size: 16px; color: gray; font-style: italic; border-bottom: solid 2px gray; padding-bottom: 10px;")
        
        buttonBox1.innerHTML = "";
        userBox.appendChild(buttonBox2);
        buttonBox2.setAttribute ("style", "display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start; border-bottom: solid 1px gray;");
        appButtons2(); 

        timerCheck(element);

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

        
        buttonBox2.addEventListener("click", function (event){
        questionThree (event);
    });
    }      
}

// Initial Function to open up the first question //
function startQuiz (){
    
    
    // Changing Initial HTML Elements to Quiz Format //
    headerOne.textContent = "Who is the greatest business man to ever Walk the Earth?";
    description.textContent = " ";
    description.setAttribute ("style", "margin: 0px; border: none");
    startButton.style.display = "none";
    count.textContent = "Answered Correct: " + scoreCount;
    timerHTML.textContent = "Timer: " + timer;
    answerBox.style.display = "none";
    userBox.appendChild(buttonBox1);
    buttonBox1.setAttribute ("style", "display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start; border-bottom: solid 1px gray;"); 
    
    
    // Appending New Buttons //
    appButtons1();

    // Adding Text to New Appended Buttons //
    button1.textContent = "Steve Jobs";
    button2.textContent = "Mark Zuckerberg";
    button3.textContent = "Elon Musk";
    button4.textContent = "Jeff Bezos";

    // True False Answers //
    button1.value = "false";
    button2.value = "false";
    button3.value = "false";
    button4.value = "true";
    
    buttonBox1.addEventListener("click", function (event){
        questionTwo (event);
    })
    
}

//Start Button//
startButton.addEventListener ("click", function(){
    startQuiz ();
    timerCountdown();
  });
   

// Function to Add to Count or Takeaway from Time if answer is right or wrong //
function timerCheck(element){
    if (element.value == "true"){
        scoreCount++;
        count.textContent = "Answered Correct: " + scoreCount;
        reveal.textContent = "You answered the last question Correct!";
    } else {
        
        if (timer >= 10){
            timer = timer - 10;
            timerHTML.textContent = "Timer: " + timer;
            reveal.textContent = "You answered the last question Wrong!";
        } else {
            timer = 0;
            timerHTML.textContent = "Timer: " + timer;

        }
    }
}

// All Append Buttons to new Button Boxes after each subsequent Question //
function appButtons1(){
buttonBox1.appendChild (button1);
buttonBox1.appendChild (button2);
buttonBox1.appendChild (button3);
buttonBox1.appendChild (button4);
}

function appButtons2(){
    buttonBox2.innerHTML = "";
    buttonBox2.appendChild (button1);
    buttonBox2.appendChild (button2);
    buttonBox2.appendChild (button3);
    buttonBox2.appendChild (button4);
}

function appButtons3(){
    buttonBox3.innerHTML = "";
    buttonBox3.appendChild (button1);
    buttonBox3.appendChild (button2);
    buttonBox3.appendChild (button3);
    buttonBox3.appendChild (button4);
}

function appButtons4(){
    buttonBox4.innerHTML = "";
    buttonBox4.appendChild (button1);
    buttonBox4.appendChild (button2);
    buttonBox4.appendChild (button3);
    buttonBox4.appendChild (button4);
}

function appButtons5(){
    buttonBox5.innerHTML = "";
    buttonBox5.appendChild (button1);
    buttonBox5.appendChild (button2);
    buttonBox5.appendChild (button3);
    buttonBox5.appendChild (button4);
}