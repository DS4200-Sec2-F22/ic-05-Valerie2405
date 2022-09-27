
// function in charge of handling response ot a button
let count = 0 
function buttonClicked(){
    let counter= count++;

    let newCount = "Number of times button clicked: " + counter;

    let numberClicked = document.getElementById("number-clicked");

    numberClicked.innerHTML = newCount;

    //select elemenent we want
   // let buttonDiv = document.getElementById("button-div");

   // numberClicked.innerHTML = newCount;
    
    
}