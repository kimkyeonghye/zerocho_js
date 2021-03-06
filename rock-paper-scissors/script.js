const $computer = document.querySelector('#computer');
const $rock = document.querySelector('#rock');
const $scissors = document.querySelector('#scissors');
const $paper = document.querySelector('#paper');
const $score = document.querySelector('#score');
const IMG_URL = './rock-paper-scissors.png';

$computer.style.background = `url(${IMG_URL}) 0 0`;
$computer.style.backgroundSize = 'auto 200px';

const xCoord = {
    scissors: '0',
    rock: '-200px',
    paper: '-400px',
};

let computerChoice = 'scissors';
const computerHand = () => {
    if (computerChoice === 'scissors') {
        computerChoice = 'rock';
    } else if (computerChoice === 'rock') {
        computerChoice = 'paper';
    } else if (computerChoice === 'paper') {
        computerChoice = 'scissors';
    }
    $computer.style.background = `url(${IMG_URL}) ${xCoord[computerChoice]} 0 / auto 200px`;
};

let intervalID = setInterval(computerHand, 50);

let clickable = true;
const clickButton = () => {
    if (clickable) {
        clearInterval(intervalID);
        clickable = false;
        setTimeout(() => {
            clickable = true;
            intervalID = setInterval(computerHand, 50);
        }, 1000);
    }
};

$rock.addEventListener('click', clickButton);
$paper.addEventListener('click', clickButton);
$scissors.addEventListener('click', clickButton);
