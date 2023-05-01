
var scoreValue = 0;

function changeHeights(){
    console.log("end");
    const hole = document.getElementById("hole");
    let y = Math.floor(Math.random() * 225);
    hole.style.top = y + "px";
    let score = document.querySelector(".text");
    scoreValue ++;
    score.innerHTML = "Score: " + scoreValue;
}

function run_game(){
    pipe.addEventListener("animationiteration", changeHeights);
    window.onclick = jump;
   
    let ID = setInterval(gameLoop,50)
    let fall_speed = 3
    let jump_speed = 35;

    function gameLoop(){
        gravity()
        if (check_collision()){
            return
        }
    }

    function check_collision(){
        let bird = document.getElementById("bird");
        let hole = document.getElementById("hole");
        let bird_top = bird.offsetTop;
        let bird_bottom = bird_top + bird.offsetHeight;
        let bird_right = bird.offsetLeft + bird.offsetWidth; 
        let hole_left = hole.offsetLeft;
        let hole_top = hole.offsetTop;
        let hole_bottom = hole_top + hole.offsetHeight;


        if ((bird_bottom >= 400) || 
        ((bird_right >= hole_left) && (bird_top <= hole_top)) || 
        ((bird_right >= hole_left) && (bird_bottom >= hole_bottom))) {
            clearInterval(ID);
            document.querySelector("#pipe").style.animationPlayState = 'paused';
            hole.style.animationPlayState = 'paused';
            bird.style.transform = 'rotate(180deg)';

        }

    }
    
    function gravity(){
        let bird = document.getElementById("bird");
        let bird_y = bird.offsetTop;
        bird.style.top = bird_y + fall_speed +"px";
    }

    function jump(){
        let bird = document.getElementById("bird");
        let bird_y = bird.offsetTop;
        if ((bird_y - jump_speed) >= 0){
            bird.style.top = bird_y - jump_speed +"px";
        }
    }
}

run_game()
