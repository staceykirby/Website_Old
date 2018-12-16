var nunmSquares = 6;
var pickedColor;
var colors=[];

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init(){

  setupModeButtons();
  setUpSquareListeners();
  reset();
    
}

function setupModeButtons(){
      //mode button listener
      for(var i = 0; i < modeButton.length; i++){
        modeButton[i].addEventListener("click",function(){
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? nunmSquares = 3 : nunmSquares= 6;
            console.log("Got here")
            reset();
        });
    }
}
function setUpSquareListeners(){
    for(var i = 0; i < squares.length; i++){

        //add click listeners to squares
        squares[i].addEventListener("click", function()
    {
        console.log("Here")
        // grab color of picked swuare
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor){
            messageDisplay.textContent="Correct";
            changeColors(clickedColor);
            resetButton.textContent ="Play Again";
        }
        else{
            this.style.backgroundColor="#232323";
            messageDisplay.textContent = "Try Again";
        }
        //compare color to pickedsquare
        })}
}

function reset(){
    console.log("Here")

    colors = generateRandomColors(nunmSquares);
    //Pick a new random color from the array

    pickedColor=pickColor();

    //change color display to picked color
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent="";
    resetButton.textContent="New Colors"
    // change the colors of the square
    for(var i = 0; i <squares.length; i++){
        if(colors[i]){

            squares[i].style.display="block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
    h1.style.backgroundColor = "steelBlue"
}

resetButton.addEventListener("click",function(){
    reset();
})


    function changeColors(color){
        //changes the header to a different color
        h1.style.backgroundColor=color;
        // loop through all square 
        for(var i = 0; i <colors.length;i++){
        //to macth wach color to given colors
        squares[i].style.backgroundColor = color;
        }
    }
    
    function pickColor(){
        var random = Math.floor(Math.random() * colors.length);
        return colors[random];
    }
    function generateRandomColors(num){
        //make an array
        var arr = []
        //add random colors to the array
        for(var i = 0; i < num; i++){ 
            // get random color and push into array
            arr.push(randomColor())
        }
        // return the array
        return arr;
    }
    function randomColor(){
        //pick a red from 0 to 255
        var r=Math.floor(Math.random()*256);
        // pick a green
        var g=Math.floor(Math.random()*255);
        //pick a blue
        var b=Math.floor(Math.random()*255);
        return "rgb("+r+", "+g+", "+b+")";
    }