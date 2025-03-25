const audio = new Audio(`./MUSIC/MENU.mp3`);
audio.loop = true;
const volumeControl = document.getElementById("volumeControl");
const optionsDiv = document.querySelector('.options');
const menuDiv = document.querySelector('.start');
const infoDiv = document.querySelector('.info-text');
const highScoreDisplay = document.querySelector('.high-score');


function soulsold() {
    audio.play();
    document.querySelector('.disclaimer').style.display = "none";
    document.querySelector('.main').style.display = "block";
    document.querySelector('.info-text').style.display = "block";
    document.querySelector('.start').style.display = "flex";
}

fetch('highscore.json')
    .then(response => response.json())
    .then(data => {
        highScoreDisplay.textContent = `HIGH SCORE: ${data.highscore} PLAYER: ${data.nickname}`;
    });

    
function startGame(){
}


function options() {
    optionsDiv.style.display = "flex";
    menuDiv.style.display = "none";
    infoDiv.style.display = "none";
}
function backtomenu(){
    optionsDiv.style.display = "none";
    menuDiv.style.display = "flex";
    infoDiv.style.display = "block";
}
volumeControl.addEventListener("input", function() {
    audio.volume = this.value;
});