console.log("CONNECTED");

let squares = document.querySelectorAll(".square");

let colorDisplay = document.getElementById("colorDisplay");

let bgColor = "0, 0, 0";



function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);
    return(bgColor);
}

for (i = 0; i<squares.length; i++) {
    //add random color to squares
    random_bg_color();
    squares[i].style.backgroundColor = bgColor;
}

let pickedColor = squares[0].style.backgroundColor;
colorDisplay.textContent = pickedColor;

for (i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener("click", function() {
        console.log('Square got clicked!');
        if (this.style.backgroundColor === pickedColor) {
            console.log("You guessed correctly!"); 
        }
    });
}

