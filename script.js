
var scoreValue = 0;

function updateScore(){
    let score = document.querySelector(".text");
    scoreValue ++;
    score.innerHTML = "Score: " + scoreValue;
}

function changeHeights(){
    const pipe_upper = document.getElementById("pipe_top");
    const pipe_bottom = document.getElementById("pipe_bottom");
    const gap_size = 150;
    let height = Math.floor(Math.random() * 225);
    pipe_upper.style.height = height + "px";
    pipe_bottom.style.top = height + gap_size + "px";
    pipe_bottom.style.height = 400 - height - gap_size + "px";
    
    updateScore();
}

function run_game(){
    pipe_top.addEventListener("animationiteration", changeHeights);
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
        const bird = document.getElementById("bird");
        const pipe_upper = document.getElementById("pipe_top");
        const pipe_bottom = document.getElementById("pipe_bottom");

        let bird_top = bird.offsetTop;
        let bird_bottom = bird_top + bird.offsetHeight;
        let bird_right = bird.offsetLeft + bird.offsetWidth; 

        let pipe_left = pipe_upper.offsetLeft;
        let hole_top = pipe_upper.offsetTop + pipe_upper.offsetHeight;
        let hole_bottom = pipe_bottom.offsetTop;

        if ((bird_bottom >= 400) || 
        ((bird_right >= pipe_left) && (bird_top <= hole_top)) || 
        ((bird_right >= pipe_left) && (bird_bottom >= hole_bottom))) {
            clearInterval(ID);
            document.querySelector("#pipe_top").style.animationPlayState = 'paused';
            document.querySelector("#pipe_bottom").style.animationPlayState = 'paused';
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
