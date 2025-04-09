const volume =  localStorage.getItem("volume");
const audio = new Audio();
audio.volume = volume;
const startDiv = document.getElementById("start");
const gameDiv = document.getElementById("game");
function startGame(){
    playRandomTrack();
    startDiv.style.display = "none";
    gameDiv.style.display = "flex";
}
function playRandomTrack(){
    audio.src = `./MUSIC/${Math.floor(Math.random() * 6) + 1}.mp3`;
    audio.play();
}