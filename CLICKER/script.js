let cookieCount = 0;
let clickers = 1;
let clickerCost = 20;
let autoClickerCost = 100;
let autoClickers = 0;
let autoClickerInterval;
let autoClickerUpgrades = 1;
let autoClickerUpgradesCost = 100;
let mainmusall = false;
let boost = false;
let BoostTimeout;

const mainmus = new Audio('./SOUNDS/main.mp3');
mainmus.loop = true;
mainmus.volume = 0.8;


function playclicksound() {
    const clickSound = new Audio('./SOUNDS/hit1.mp3');
    clickSound.volume = 0.5;
    clickSound.play();
}
function playautoclicksound() {
    const autoclicksound = new Audio('./SOUNDS/hit2.mp3');
    autoclicksound.volume = 0.5;
    autoclicksound.play();
}
function playbuysound() {
    const buySound = new Audio('./SOUNDS/cash.mp3');
    buySound.play();
}
function playnopesound() {
    const nopeSound = new Audio('./SOUNDS/nope.mp3');
    nopeSound.play();
}
function playsavesound() {
    const saveSound = new Audio('./SOUNDS/save.mp3');
    saveSound.play();
}
function playresetsound() {
    const resetSound = new Audio('./SOUNDS/reset.mp3');
    resetSound.play();
}

function updateAutoClickers() {
    if (autoClickerInterval) {
        clearInterval(autoClickerInterval);
    }
    if (autoClickers>0){
        autoClickerInterval = setInterval(function() {
            autoclickCookie();
        }, 1000);
    }
}
setInterval(function () {
    if(autoClickerCost > cookieCount){
        document.getElementById('autoClickerBtn').style.backgroundColor = 'gray';
    }
    else {
        document.getElementById('autoClickerBtn').style.backgroundColor = 'orange';
    }
    if(clickerCost > cookieCount){
        document.getElementById('Clicker').style.backgroundColor = 'gray';
    }
    else {
        document.getElementById('Clicker').style.backgroundColor = 'orange';
    }
    if(autoClickerUpgradesCost > cookieCount){
        document.getElementById('autoClickerUpgBtn').style.backgroundColor = 'gray';
    }
    else {
        document.getElementById('autoClickerUpgBtn').style.backgroundColor = 'orange';
    }
}, 100);
setInterval(function () {
    createboost();
}, 30000);

// działaj
function createboost() {
    const cookie = document.getElementById('cookieboost');
    while (cookie.firstChild) {
        cookie.removeChild(cookie.firstChild);
    }
    const boostcookie = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    const randomX = Math.random() * 160 + 20;
    const randomY = Math.random() * 160 + 20;
    boostcookie.setAttribute('cx', randomX);
    boostcookie.setAttribute('cy', randomY);
    boostcookie.setAttribute('r', 20);
    boostcookie.setAttribute('fill', 'gold');
    boostcookie.style.cursor = 'pointer';
    boostcookie.addEventListener('click', function (event) {
        document.getElementById('maintext').innerText = 'BOOST x2';
        document.getElementById('maintext').style.color = 'gold';
        const boostsound = new Audio('./SOUNDS/boost.mp3');
        boostsound.play();
        mainmus.pause();
        boost = true;
        clearTimeout(BoostTimeout);
        BoostTimeout = setTimeout(function () {
            boost = false;
            if(mainmusall){
                mainmus.play();
            }
            document.getElementById('maintext').innerText = 'Klikacz Ciastka';
            document.getElementById('maintext').style.color = 'black';
        }, 10000);
        cookie.removeChild(boostcookie);
        event.stopPropagation();
    });

    cookie.appendChild(boostcookie);
}
// błagam

function loadGame() {
    const savedCookieCount = localStorage.getItem('cookieCount');
    const savedAutoClickers = localStorage.getItem('autoClickersAmount');
    const savedAutoClickerCost = localStorage.getItem('autoClickerCost');
    const savedClickers = localStorage.getItem('ClickersAmount');
    const savedClickerCost = localStorage.getItem('ClickerCost');
    const savedAutoClickerUpgrades = localStorage.getItem('autoClickerUpgrades');
    const savedautoClickerUpgradesCost = localStorage.getItem('autoClickerUpgradesCost');
    // const savedAllowedMusic = localStorage.getItem('AllowedMusic');

    if (savedCookieCount !== null) {
        cookieCount = parseInt(savedCookieCount);
        document.getElementById('cookieCount').innerText = cookieCount;
    }
    if (savedAutoClickers !== null) {
        autoClickers = parseInt(savedAutoClickers);
        document.getElementById('autoClickersAmount').innerText = autoClickers;
    }
    if (savedAutoClickerCost !== null) {
        autoClickerCost = parseInt(savedAutoClickerCost);
        document.getElementById('autoClickerCost').innerText = autoClickerCost;
    }
    if (savedClickers !== null) {
        clickers = parseInt(savedClickers);
        document.getElementById('ClickersAmount').innerText = clickers;
    }
    if (savedClickerCost !== null) {
        clickerCost = parseInt(savedClickerCost);
        document.getElementById('ClickerCost').innerText = clickerCost;
    }
    if (savedAutoClickerUpgrades !== null) {
        autoClickerUpgrades = parseInt(savedAutoClickerUpgrades);
        document.getElementById('autoClickerUpgrades').innerText = autoClickerUpgrades;
    }
    if (savedautoClickerUpgradesCost !== null) {
        autoClickerUpgradesCost = parseInt(savedautoClickerUpgradesCost);
        document.getElementById('autoClickerUpgradesCost').innerText = autoClickerUpgradesCost;
    }
    // ostatecznie to usunołem bo w konsoli wyskakiwał błąd że użytkownik musi coś zrobić na stronie by muzyka zaczeła grać więc poprostu to usunołem
    // if (savedAllowedMusic !== null) {
    //     mainmusall = (savedAllowedMusic === 'true');
    //     if (mainmusall) {
    //         mainmus.play();
    //         document.getElementById('musicall').style.backgroundColor = 'green';
    //         document.getElementById('musicalltext').innerText = "Wł";
    //     } else {
    //         mainmus.pause();
    //         document.getElementById('musicall').style.backgroundColor = 'lightgreen';
    //         document.getElementById('musicalltext').innerText = "Wył";
    //     }
    // }
    // leniwy jestem
    updateAutoClickers();
}

function saveGame() {
    localStorage.setItem('cookieCount', cookieCount);
    localStorage.setItem('autoClickersAmount', autoClickers);
    localStorage.setItem('autoClickerCost', autoClickerCost);
    localStorage.setItem('ClickerCost', clickerCost);
    localStorage.setItem('ClickersAmount', clickers);
    localStorage.setItem('autoClickerUpgrades',autoClickerUpgrades);
    localStorage.setItem('autoClickerUpgradesCost',autoClickerUpgradesCost);
    playsavesound();
    // localStorage.setItem('AllowedMusic',mainmusall.toString());
}

function resetGame() {
    localStorage.clear();
    cookieCount = 0;
    autoClickers = 0;
    autoClickerCost = 100;
    clickers = 1;
    clickerCost = 20;
    autoClickerUpgrades = 1;
    autoClickerUpgradesCost = 100;
    document.getElementById('cookieCount').innerText = cookieCount;
    document.getElementById('autoClickerCost').innerText = autoClickerCost;
    document.getElementById('autoClickersAmount').innerText = autoClickers;
    document.getElementById('ClickersAmount').innerText = clickers;
    document.getElementById('ClickerCost').innerText = clickerCost;
    document.getElementById('autoClickerUpgrades').innerText = autoClickerUpgrades;
    document.getElementById('autoClickerUpgradesCost').innerText = autoClickerUpgradesCost;
    clearInterval(autoClickerInterval);
    updateAutoClickers();
    mainmusall = false;
    mainmus.pause();
    mainmus.currentTime = 0;
    document.getElementById('musicall').style.backgroundColor = 'lightgreen';                   
    document.getElementById('musicalltext').innerText = "Wył";
    playresetsound();
}

function autoclickCookie() {
    if(boost){
        cookieCount += autoClickers * autoClickerUpgrades * 2;
    }
    else {
        cookieCount += autoClickers * autoClickerUpgrades;
    }
    document.getElementById('cookieCount').innerText = cookieCount;
    playautoclicksound();
}

function clickCookie() {
    if(boost){
        cookieCount += clickers * 2;
    }
    else {
        cookieCount += clickers;
    }
    document.getElementById('cookieCount').innerText = cookieCount;
    playclicksound();
}

function buyAutoClicker() {
    if (cookieCount >= autoClickerCost) {
        playbuysound();
        cookieCount -= autoClickerCost;
        autoClickers++;
        document.getElementById('cookieCount').innerText = cookieCount;
        autoClickerCost = Math.floor(autoClickerCost * 1.6);
        document.getElementById('autoClickerCost').innerText = autoClickerCost;
        document.getElementById('autoClickersAmount').innerText = autoClickers;
        updateAutoClickers(); 
    }
    else{
        playnopesound();
    }
}

function buyClicker() {
    if (cookieCount >= clickerCost) {
        playbuysound();
        cookieCount -= clickerCost;
        clickers++;
        document.getElementById('cookieCount').innerText = cookieCount;
        clickerCost = Math.floor(clickerCost * 1.5);
        document.getElementById('ClickerCost').innerText = clickerCost;
        document.getElementById('ClickersAmount').innerText = clickers;
    }
    else {
        playnopesound();
    }
}
function buyAutoClickerUpg() {
    if(cookieCount >= autoClickerUpgradesCost) {
        playbuysound();
        cookieCount -= autoClickerUpgradesCost;
        autoClickerUpgrades++;
        document.getElementById('cookieCount').innerText = cookieCount;
        autoClickerUpgradesCost = Math.floor(autoClickerUpgradesCost * 1.5);
        document.getElementById('autoClickerUpgrades').innerText = autoClickerUpgrades;
        document.getElementById('autoClickerUpgradesCost').innerText = autoClickerUpgradesCost;
    }
    else{
        playnopesound();
    }
}

function allowmusic() {
    if(mainmusall){
        mainmus.pause();
        mainmusall = false;
        document.getElementById('musicall').style.backgroundColor = 'lightgreen';
        document.getElementById('musicalltext').innerText = "Wył";
    }
    else {
        mainmus.play();
        mainmusall = true;
        document.getElementById('musicall').style.backgroundColor = 'green';
        document.getElementById('musicalltext').innerText = "Wł";
    }

}

document.addEventListener('keydown', function(event) {
    if (event.repeat) {
        return;
    }
    if (event.key === '1') {  
        buyClicker();
    }
    if (event.key === '2') {
        buyAutoClicker();
    }
    if (event.key === '3') {
        buyAutoClickerUpg();
    }
    if (event.key === '4'){
        saveGame();
    }
    if (event.key === '5') {
        resetGame();
    }
    if (event.key === '6') {
        allowmusic();
    }
    if (event.code === 'Space') {
        clickCookie();
    }
});



window.onload = function () {
    document.getElementById('autoClickerBtn').style.backgroundColor = 'gray';
    document.getElementById('Clicker').style.backgroundColor = 'gray';
    document.getElementById('autoClickerUpgBtn').style.backgroundColor = 'gray';
    loadGame();
};
