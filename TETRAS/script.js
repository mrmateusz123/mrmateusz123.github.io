const audio = new Audio(`./MUSIC/MENU.mp3`);
audio.loop = true;
const volumeControl = document.getElementById("volumeControl");
const disclaimerDiv = document.getElementById('disclaimer');
const optionsDiv = document.getElementById('options');
const menuDiv = document.getElementById('menu-buttons');
const playerDiv = document.getElementById('player');
const header = document.getElementById('header');
const playerHighScoreDisplay = document.getElementById('your-high-score');
const highScoreDisplay = document.getElementById('high-score');
const playerNameInput = document.getElementById('playerName');
let playernickname = "";
let playerhighscore = 0;
if(localStorage.getItem('nickname') != null){
    playernickname = localStorage.getItem('nickname');
    playerNameInput.value = playernickname;
}
if(localStorage.getItem('highscore') !== null){
    playerhighscore = localStorage.getItem('highscore');
    playerHighScoreDisplay.textContent = `YOUR HIGH SCORE: ${playerhighscore}`;
}


function soulsold() {
    audio.play();
    disclaimerDiv.style.display = "none";
    menuDiv.style.display = "flex";
    playerDiv.style.display = "block";
    header.style.display = "flex";
}

fetch('highscore.json')
    .then(response => response.json())
    .then(data => {
        highScoreDisplay.textContent = `HIGH SCORE: ${data.highscore} BY: ${data.nickname}`;
    });

    
function startGame(){
    audio.pause();
    playernickname = playerNameInput.value;
    localStorage.setItem("volume", volumeControl.value);
    localStorage.setItem('nickname', playernickname);
    window.location.href = "game.html";
}
function options() {
    optionsDiv.style.display = "flex";
    menuDiv.style.display = "none";
    playerDiv.style.display = "none";
}
function resetData() {
    localStorage.clear();
    playernickname = "";
    playerNameInput.value = playernickname;
    playerhighscore = 0;
    playerHighScoreDisplay.textContent = `YOUR HIGH SCORE: ${playerhighscore}`;
}
function backtomenu(){
    optionsDiv.style.display = "none";
    menuDiv.style.display = "flex";
    playerDiv.style.display = "block";
}
volumeControl.addEventListener("input", function() {
    audio.volume = this.value;
    if(audio.volume == 0){
        audio.pause();
    }
    else{
        audio.play();
    }
});