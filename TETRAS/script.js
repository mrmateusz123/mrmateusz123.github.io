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
    // audio.loop = false;
    // loadboard();
    playRandomTrack();
    playernickname = playerNameInput.value;
    localStorage.setItem('nickname', playernickname);
}
function playRandomTrack(){
    audio.src = `./MUSIC/${Math.floor(Math.random() * 5) + 3}.mp3`;
    audio.play();
}
// function loadboard(){
//     optionsDiv.style.display = "none";
//     menuDiv.style.display = "none";
//     infoDiv.style.display = "none";
//     mainDiv.style.display = "none";
//     boardDiv.style.display = "flex";
//     board.innerHTML = "";

//     const table = document.createElement('table');

//     for (let i = 0; i < tetrasboard.length; i++) {
//         const tr = document.createElement('tr');
//         for (let j = 0; j < tetrasboard[i].length; j++) {
//             const td = document.createElement('td');
//             td.textContent = tetrasboard[i][j];
//             if (tetrasboard[i][j] === 1) {
//                 td.classList.add('filled');
//             }
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }

//     board.appendChild(table);
// }

function options() {
    optionsDiv.style.display = "flex";
    menuDiv.style.display = "none";
    playerDiv.style.display = "none";
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
// volumeControl.addEventListener("ended", function() {
//     playRandomTrack();
// });