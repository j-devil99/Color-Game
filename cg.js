var colors = [];
var correctColor;
var currentMode = 6;
var colorDisplay = document.getElementById("colorDisplay");
var colorBox = document.querySelectorAll(".colorBox");
var resultDisplay = document.getElementById("resultDisplay");
var resetButton = document.getElementById("resetButton");
var h1 = document.querySelector("h1");
var modes = document.querySelectorAll(".modeButton");

// var num = 6;     

init();


function init(){
    colorGrid();
    circles();
    mode();
}

function colorGrid(){
    colors = createColors(currentMode);
    correctColor = colors[Math.floor(Math.random() * currentMode)];
    colorDisplay.textContent = correctColor;
    for (let i = 0; i < colorBox.length; i++) {
        if(colors[i]){
            colorBox[i].style.display = "block";
            colorBox[i].style.backgroundColor = colors[i];
        }
        else{
            colorBox[i].style.display = "none";
        }
    }
}

function circles(){
    for (let i = 0; i < colorBox.length; i++) {
        const element = colorBox[i];
        
        element.addEventListener("click", function(){
            var selectedColor = this.style.backgroundColor;

            if(selectedColor === correctColor){
                resultDisplay.textContent = "Correct!";      
                winColors(selectedColor);
                h1.style.backgroundColor = selectedColor;
            }
            else{
                resultDisplay.textContent = "Wrong";
                this.style.backgroundColor = "#232323";
            }
        });
    }
    
}

function winColors(color){
    for (let i = 0; i < colorBox.length; i++) {
        colorBox[i].style.backgroundColor = color;
        
    }
}

resetButton.addEventListener("click",reset);

function reset(){
    colorGrid();
    circles();
    resultDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";    
}


function createColors(num){
    var arr = [];
    for (let i = 0; i < num; i++) {
    arr.push(randomColor());
    }
    return arr;
}

function mode(){
    for (let i = 0; i < modes.length; i++) {
        modes[i].addEventListener("click", function(){
            modes[0].classList.remove("selected");
            modes[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? currentMode = 3: currentMode = 6;
        reset();
        });
        
    }
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
