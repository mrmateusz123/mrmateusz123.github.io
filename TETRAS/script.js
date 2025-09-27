const gameMusic = new Audio();
const menuMusic = new Audio(`./MUSIC/MENU.mp3`);
gameMusic.loop = true;
menuMusic.loop = true;

const volumeControl = document.getElementById("volumeControl");
const disclaimerDiv = document.getElementById('disclaimer');
const optionsDiv = document.getElementById('options');
const menuDiv = document.getElementById('menu-buttons');
const playerDiv = document.getElementById('player');
const gameInfoDiv = document.getElementById('gameInfo');
const board = document.getElementById('board');
const header = document.getElementById('header');
const playerHighScoreDisplay = document.getElementById('your-high-score');
const highScoreDisplay = document.getElementById('high-score');
const playerNameInput = document.getElementById('playerName');

const scoretext = document.getElementById("score");
const linestext = document.getElementById("lines");
const leveltext = document.getElementById("level");

let playernickname = "";
let playerhighscore = 0;
let volume = 1;
let gotsoul = false;

var shapes = new Array();
var currentShape;
var height = 20;
var width = 10;
var state = 1;
var colors = ['black', 'orange', 'red', 'blue', 'yellow', 'green', 'pink'];
var move = 0;
var occupiedblocks = new Array();
var direction = "";
var points = 0;
var lines = 0;
var lvl = 1;
var lvlstime = 1500;

if(localStorage.getItem('nickname') != null){
    playernickname = localStorage.getItem('nickname');
    playerNameInput.value = playernickname;
}
if(localStorage.getItem('highscore') !== null){
    playerhighscore = localStorage.getItem('highscore');
    playerHighScoreDisplay.textContent = `YOUR HIGH SCORE: ${playerhighscore}`;
}if(localStorage.getItem('volume') !== null){
    volume = localStorage.getItem('volume');
    menuMusic.volume = volume;
    gameMusic.volume = volume;
    volumeControl.value = volume;
}
function soulsold() {
    menuMusic.play();
    disclaimerDiv.style.display = "none";
    menuDiv.style.display = "flex";
    playerDiv.style.display = "block";
    header.style.display = "flex";
    gotsoul = true;
}

fetch('highscore.json')
    .then(response => response.json())
    .then(data => {
        highScoreDisplay.textContent = `HIGH SCORE: ${data.highscore} BY: ${data.nickname}`;
    });

    
function startGame(){
    menuMusic.pause();
    playernickname = playerNameInput.value;
    localStorage.setItem("volume", volumeControl.value);
    localStorage.setItem('nickname', playernickname);
    disclaimerDiv.style.display = "none";
    menuDiv.style.display = "none";
    playerDiv.style.display = "none";
    header.style.display = "none";
    board.style.display = "flex";
    gameInfoDiv.style.display = "flex";
    playRandomTrack(1,3);
    createBoard();
    createShapes();
    createShape();
    drawShape();
    document.onkeydown = checkKey;
    state = 2;
    gameInterval = setInterval(() => {
    if(state == 2){
        moveDown();
        scoretext.textContent = "Score: " + points;
        linestext.textContent = "Lines: " + lines;
        leveltext.textContent = "Level: " + lvl;
    }}, (lvlstime-((lvl-1)*50)));
}
function options() {
    optionsDiv.style.display = "flex";
    menuDiv.style.display = "none";
    playerDiv.style.display = "none";
}
function resetData() {
    localStorage.clear();
    volume = 1;
    menuMusic.volume = 1;
    gameMusic.volume = 1;
    volumeControl.value = 1;
    playernickname = "";
    playerNameInput.value = playernickname;
    playerhighscore = 0;
    playerHighScoreDisplay.textContent = `YOUR HIGH SCORE: ${playerhighscore}`;
}
function backtomenu(){
    optionsDiv.style.display = "none";
    menuDiv.style.display = "flex";
    playerDiv.style.display = "block";
    localStorage.setItem("volume", volumeControl.value);
    state = 1;
    clearInterval(gameInterval);
}
function backtomainmenu(){
    gameMusic.pause();
    menuDiv.style.display = "flex";
    playerDiv.style.display = "block";
    header.style.display = "flex";
    gameInfoDiv.style.display = "none";
    board.style.display = "none";
    clearBoard();
    clearCurrent();
    menuMusic.currentTime = 0;
    menuMusic.play();
    points = 0;
}
  function getBlockNumbers(a,b){
    // placeholder for now
  }
function playRandomTrack(min,max){
    gameMusic.src = `./MUSIC/${Math.floor(Math.random() * max) + min}.mp3`;
    gameMusic.currentTime = 0;
    gameMusic.play();
}
function createBoard() {
    board.innerHTML = '';
    let blockWidth = board.clientWidth / width;
    let blockHeight = board.clientHeight / height || blockWidth;
    let blockSize = Math.min(blockWidth, blockHeight);
    board.style.width = (blockSize * width) + 'px';
    board.style.height = (blockSize * height) + 'px';

    let counter = 0;

    for (let y = 0; y < height; y++) {
        let row = document.createElement('div');
        row.className = 'row';

        for (let x = 0; x < width; x++) {
            let block = document.createElement('div');
            block.className = 'block';
            block.dataset.x = x;
            block.dataset.y = y;
            block.dataset.index = counter;
            block.dataset.state = 0;
            block.style.width = blockSize + 'px';
            block.style.height = blockSize + 'px';
            row.appendChild(block);
            counter++;
        }

        board.appendChild(row);
    }
}
function clearBoard(){
    board.replaceChildren();
}
function createShapes()
{
    // 'T' shape
    let t = [[1,0], [0,1], [1,1], [1,2]];
    // 'Line' shape
    let line = [[0,0], [1,0], [2,0], [3,0]];
    // 'Square' shape
    let square = [[0,0], [1,0], [0,1], [1,1]];
    // 'L' shape
    let l = [[2,0], [0,1], [1,1], [2,1]];
    // 'L2' shape
    let l2 = [[0,0], [1,0], [2,0], [2,1]];
    // 'Weird' shape (S)
    let weird = [[0,0], [1,0], [1,1], [2,1]];
    // 'Weird2' shape (Z)
    let weird2 = [[1,0], [2,0], [0,1], [1,1]];
    
    shapes.push(t);
    shapes.push(square);
    shapes.push(line);
    shapes.push(t);
    shapes.push(l);
    shapes.push(l2);
    shapes.push(weird);
    shapes.push(weird2);
}
function createShape()
{
    let randomShape = Math.floor(Math.random() * shapes.length);
    let randomColor = Math.floor(Math.random() * colors.length);
    let center = Math.floor(width / 2);
    let shape = shapes[randomShape];
    let location = [center, 0];

    currentShape = {
        shape: shape,
        color: colors[randomColor],
        location: location,
        indexes: getBlockNumbers(shape, location)
    };
}


function lvlup(){
    lvl+=1;
    if(lvl>14){gameMusic.pause(); playRandomTrack(4,5);}
    else if(lvl>25){gameMusic.pause(); playRandomTrack(6,6);}
}
function drawShape()
{
    // draw the current shape onto board
    var shape = currentShape.shape;
    var location = currentShape.location;

    // update status to unoccupied of current block
    clearCurrent();

    // based on direction of block, set the offset
    if (direction=="down")
        currentShape.location[1]++;
    else if(direction=="left")
        currentShape.location[0]--;
    else if (direction=="right")
        currentShape.location[0]++;
    
    // redraw the shape onto the board
    for(var i = 0; i < shape.length; i++)
    {
        var x = shape[i][0] + location[0];    //  x + offset
        var y = shape[i][1] + location[1];    // y + offset
        var block = document.querySelector('[data-x="' + x + '"][data-y="' + y + '"]');
        block.classList.add('filled');
        block.style.backgroundColor = currentShape.color;
    }

    currentShape.indexes = getBlockNumbers(currentShape.shape, currentShape.location);
}
function clearCurrent()
{
    // reset all blocks
    var shape = currentShape.shape;
    var location = currentShape.location;
    
    for(var i = 0; i < shape.length; i++)
    {
        var x = shape[i][0] + location[0];
        var y = shape[i][1] + location[1];
        let block = document.querySelector(`.block[data-x="${x}"][data-y="${y}"]`);
        
        if (block) {
            block.classList.remove('filled');
            block.style.backgroundColor = "";
}
    }
}
function checkKey(e) {
    e.preventDefault();

    e = e || window.event;

    if (e.keyCode == '40') {
        moveDown();
        // clearInterval(gameInterval);

    }
    else if (e.keyCode == '37') {
        // left arrow
        moveLeft();
    }
    else if (e.keyCode == '39') {
        // right arrow
        moveRight();
    }

    // drawShape();
}
function moveDown(){
    if(state == 2){
        // console.log(currentShape.location[1]);
        if(currentShape.location[1] < 19){
            clearCurrent();
            direction="down";
            currentShape.location[1]++;
            for(var i = 0; i < currentShape.shape.length; i++)
            {
                var x = currentShape.shape[i][0] + currentShape.location[0];    //  x + offset
                var y = currentShape.shape[i][1] + currentShape.location[1];    // y + offset
                var block = document.querySelector('[data-x="' + x + '"][data-y="' + y + '"]');
                block.classList.add('filled');
                block.style.backgroundColor = currentShape.color;
            }

        }
    }
}
function moveRight(){
    if(state == 2){
        if(currentShape.location[0] < 10){
            clearCurrent();
            direction="right";
            currentShape.location[0]++;
            for(var i = 0; i < currentShape.shape.length; i++)
            {
                var x = currentShape.shape[i][0] + currentShape.location[0];    //  x + offset
                var y = currentShape.shape[i][1] + currentShape.location[1];    // y + offset
                var block = document.querySelector('[data-x="' + x + '"][data-y="' + y + '"]');
                block.classList.add('filled');
                block.style.backgroundColor = currentShape.color;
            }
        }
    }
}
function moveLeft(){
    if(state == 2){
        if(currentShape.location[0] > 0){
            clearCurrent();
            direction="right";
            currentShape.location[0]--;
            for(var i = 0; i < currentShape.shape.length; i++)
            {
                var x = currentShape.shape[i][0] + currentShape.location[0];    //  x + offset
                var y = currentShape.shape[i][1] + currentShape.location[1];    // y + offset
                var block = document.querySelector('[data-x="' + x + '"][data-y="' + y + '"]');
                block.classList.add('filled');
                block.style.backgroundColor = currentShape.color;
            }
        }
    }
}
volumeControl.addEventListener("input", function() {
    volume = this.value;
    menuMusic.volume = volume;
    gameMusic.volume = volume;
    if(volume == 0){
        menuMusic.pause();
        gameMusic.pause();
    }
    else{
        if (board.style.display === "flex") { gameMusic.play();} 
        else { menuMusic.play(); }
    }
});
document.addEventListener("visibilitychange", () => {
    if(volume>0 && gotsoul == true){
        if (document.hidden) {menuMusic.pause(); gameMusic.pause();}   
        else 
        {
            if (board.style.display === "flex") { gameMusic.play();} 
            else { menuMusic.play(); }
        }

    }
});