let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");
let foulHome = document.getElementById("foul-home");
let foulGuest = document.getElementById("foul-guest");
let timeEl = document.getElementById("time-el");

let homePoints = 0;
scoreHome.textContent = homePoints;

let guestPoints = 0;
scoreGuest.textContent = guestPoints;

let foulCountHome = 0;
foulHome.textContent = foulCountHome;

let foulCountGuest = 0;
foulGuest.textContent = foulCountGuest;

let timeCount = 0;
timeEl.textContent = timeCount;



let homeLeader = guestPoints + 1;
let guestLeader = homePoints +1;



function increment1Home() {
    homePoints += 1;
    scoreHome.textContent = homePoints;
}   

function increment2Home() {
    homePoints += 2;
    scoreHome.textContent = homePoints;
}

function increment3Home() {
    homePoints += 3;
    scoreHome.textContent = homePoints;
}

function increment1Guest() {
    guestPoints += 1;
    scoreGuest.textContent = guestPoints;
}

function increment2Guest() {
    guestPoints += 2;
    scoreGuest.textContent = guestPoints;
}

function increment3Guest() {
    guestPoints += 3;
    scoreGuest.textContent = guestPoints;
}

function increment1Foul() {
    foulCountHome += 1;
    foulHome.textContent = foulCountHome;
}

function decline1Foul() {
    foulCountHome -= 1;
    foulHome.textContent = foulCountHome;
}

function increment2Foul() {
    foulCountGuest += 1;
    foulGuest.textContent = foulCountGuest;
}

function decline2Foul() {
    foulCountGuest -= 1;
    foulGuest.textContent = foulCountGuest;
}

function incrementTime() {
    timeCount +=1;
    timeEl.textContent = timeCount;
}

function declineTime() {
    timeCount -= 1;
    timeEl.textContent = timeCount;
}

function resetAll() {
    homePoints = 0;
    scoreHome.textContent = homePoints;
    guestPoints = 0;
    scoreGuest.textContent = guestPoints;
    foulCountHome = 0;
    foulHome.textContent = foulCountHome;
    foulCountGuest = 0;
    foulGuest.textContent = foulCountGuest;
    timeCount = 0;
    timeEl.textContent = timeCount;
}

