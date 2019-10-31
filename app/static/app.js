console.log("CONNECTED");

let numSquares = 6;
let colors = [];
let pickedColor;

let resetBtn = document.querySelector("#reset");
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
// let h1 = document.querySelector("h1");
let modeButtons = document.querySelectorAll(".mode");

resetBtn.addEventListener("click", reset);

init();

function init() {
    setUpModeButtons();
    playGame();
    reset();

}

// FIRST LEVEL FUNCTIONS

// function to add event listeners to difficulty mode buttons
function setUpModeButtons() {
    for (i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");        
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        })
    };
}


// main function that plays the game
function playGame() {
    for (i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            console.log('Square got clicked!');
            if (this.style.backgroundColor === pickedColor) {
                messageDisplay.textContent = "Correct";
                changeColors(pickedColor);
                // h1.style.backgroundColor = pickedColor;
                resetBtn.textContent = "Play again!";
            } else {
                this.style.backgroundColor = "transparent";
                messageDisplay.textContent = "Try again!";
            }
        });
    };
}

// function to reset the game
function reset() {
    // h1.style.backgroundColor = "transparent";
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetBtn.textContent = "New Colors";
    messageDisplay.textContent = "";

    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    };
}

// SECOND LEVEL FUNCTIONS

// function to generate and return one random color
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + ", " + y + ", " + z + ")";
    console.log(bgColor);
    return(bgColor);
}

// function to generate an array of random colors with num of colors as an argument
function generateRandomColors(numberOfColors) {
    let colorArray = [];
    for (i = 0; i < numberOfColors; i++) {
        colorArray.push(random_bg_color());
    };
    return colorArray;
}

//function to select a random color from the array to be a picked color
function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// function to change the color of all squares to a picked color if winning
function changeColors(color) {
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    };
}