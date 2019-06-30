var colors = [];
var colorDisplay = document.getElementById("colorDisplay");
var colorBox = document.querySelectorAll(".colorBox");
var resultDisplay = document.getElementById("resultDisplay");
var resetButton = document.getElementById("resetButton");
var h1 = document.querySelector("h1");
var correctColor;


// var num = 6;     

init();


function init(){
    colorGrid();
    circles();
}

function colorGrid(){
    colors = createColors(6);
    correctColor = colors[Math.floor(Math.random() * 6)];
    colorDisplay.textContent = correctColor;
    for (let i = 0; i < colorBox.length; i++) {
        colorBox[i].style.backgroundColor = colors[i];
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

resetButton.addEventListener("click",function reset(){
    colorGrid();
    circles();
    resultDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";    
});

function createColors(num){
    var arr = [];
    for (let i = 0; i < num; i++) {
    arr.push(randomColor());
    }
    return arr;

}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
