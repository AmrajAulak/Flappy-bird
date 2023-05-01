// window.onclick = myFunction;

// function myFunction() {
//     document.getElementsByTagName("BODY")[0].style.backgroundColor = "yellow";
// }p

// function run_game(){
//     //let bird = document.querySelector("bird");

// }

// let bird = document.getElementById("bird");
// let score = document.getElementById("score");

// let x = bird.offsetLeft;
// let y = bird.offsetTop;
// let bWidth = bird.offsetWidth;

// console.log(bWidth)

// console.log("Element X: " + x);
// console.log("Element Y: " + y);

// bird.style.left = 0
// bird.style.top = 0

const pipe = document.getElementById("pipe");
// pipe.addEventListener("animationend", myEndFunction, false);

function changeHeights(){
    console.log("end");
    const hole = document.getElementById("hole");
    let y = Math.floor(Math.random() * 250);
    hole.style.top = y + "px";

}


pipe.addEventListener("animationiteration", changeHeights);
