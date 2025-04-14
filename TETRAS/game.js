const volume =  localStorage.getItem("volume");
const audio = new Audio();
audio.volume = volume;
const startDiv = document.getElementById("start");
const gameDiv = document.getElementById("game");
const table = [];

function startGame(){
    for (let i = 0; i < 20; i++) {
        const w = [];
        for (let j = 0; j < 10; j++) {
          w.push(0);
        }
        table.push(w);
    }
    playRandomTrack();
    startDiv.style.display = "none";
    gameDiv.style.display = "flex";
    
}
function playRandomTrack(){
    audio.src = `./MUSIC/${Math.floor(Math.random() * 6) + 1}.mp3`;
    audio.play();
}