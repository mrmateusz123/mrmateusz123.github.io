const audio = new Audio(`./MUSIC/MENU.mp3`);
audio.loop = true;
const volumeControl = document.getElementById("volumeControl");
const disclaimerDiv = document.getElementById('disclaimer');
const optionsDiv = document.getElementById('options');
const menuDiv = document.getElementById('menu');
const infoDiv = document.getElementById('info');
const boardDiv = document.getElementById('board');
const mainDiv = document.getElementById('main');
// const highScoreDisplay = document.querySelector('.high-score');
// const board = document.getElementById('board');
// const table = document.createElement('table');
const tetrasboard = [];
for (let i = 0; i<20;i++){
    tetrasboard.push(new Array(10).fill(0));
}


function soulsold() {
    audio.play();
    disclaimerDiv.style.display = "none";

}

// fetch('highscore.json')
//     .then(response => response.json())
//     .then(data => {
//         highScoreDisplay.textContent = `HIGH SCORE: ${data.highscore} BY: ${data.nickname}`;
//     });

    
// function startGame(){
//     audio.pause();
//     audio.loop = false;
//     // loadboard();
//     playRandomTrack();
// }
// function playRandomTrack(){
//     audio.src = `./MUSIC/${Math.floor(Math.random() * 6) + 4}.mp3`;
//     audio.play();
// }
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
    infoDiv.style.display = "none";
}
function backtomenu(){
    optionsDiv.style.display = "none";
    menuDiv.style.display = "flex";
    infoDiv.style.display = "block";
}
// volumeControl.addEventListener("input", function() {
//     audio.volume = this.value;
// });
// volumeControl.addEventListener("ended", function() {
//     playRandomTrack();
// });