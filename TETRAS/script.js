const audio = new Audio(`./MUSIC/MENU.mp3`);
audio.loop = true;
const volumeControl = document.getElementById("volumeControl");
const optionsDiv = document.querySelector('.options');
const menuDiv = document.querySelector('.start');


function soulsold() {
    audio.play();
    document.querySelector('.disclaimer').style.display = "none";
    document.querySelector('.infotext').style.display = "block";
    document.querySelector('.start').style.display = "flex";
}

fetch('highscore.json')
    .then(response => response.json())
    .then(data => {
        console.log(data.highscore);
        highScoreDisplay.textContent = `HIGH SCORE: ${data.highscore}`;
    });

    
function startGame(){
}


function options() {
    optionsDiv.style.display = "flex";
    menuDiv.style.display = "none";
}
function backtomenu(){
    optionsDiv.style.display = "none";
    menuDiv.style.display = "flex";
}
volumeControl.addEventListener("input", function() {
    audio.volume = this.value;
});