console.log("CONNECTED");

let numSquares = 6;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let easyBtn = document.querySelector("#easy");
let hardBtn = document.querySelector("#hard");


const reset = document.querySelector("#reset");
reset.addEventListener("click", resetColors);

let colors = generateRandomColors(numSquares);

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
        }
})

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
let pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

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

// main function that starts the game
function playGame() {

    //let colors = generateRandomColors(6);
    //let pickedColor = pickColor();

    for (i = 0; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function() {
            console.log('Square got clicked!');
            if (this.style.backgroundColor === pickedColor) {
                messageDisplay.textContent = "Correct";
                changeColors(pickedColor);
                h1.style.backgroundColor = pickedColor;
                reset.textContent = "Play again!";
            } else {
                this.style.backgroundColor = "steelblue";
                messageDisplay.textContent = "Try again!";
            }
        });
    }
}

// function to reset colors
function resetColors() {
    h1.style.backgroundColor = "steelblue";
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    reset.textContent = "New Colors";
    playGame();
}

playGame();
