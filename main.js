console.log('js connected!');


const timeCount = document.querySelector('.Timer');
const score = document.querySelector('.scoreKeep');
const allFlipCards = document.querySelector('.allFlipCards');
const cards = document.querySelectorAll('.cards');

// let cardOne = document.getElementById('0');
// let cardTwo = document.getElementById('1');
// let cardThree = document.getElementById('2');
// let cardFour = document.getElementById('3');
// let cardFive = document.getElementById('4');
// let cardSix = document.getElementById('5');
// let cardSeven = document.getElementById('6');
// let cardEight = document.getElementById('7');
// let cardNine = document.getElementById('8');
// let cardTen = document.getElementById('9');

cardsArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8','9'];
   

//start game here by clicking card//
function gamePlay(event) {
  
}

 
cards.forEach(cards => {
    cards.addEventListener('click', function() {
        console.log('card clicked')
    });
});

let cardsToFlip = [];

let cardOne = cardsArray[0,1];
cardsToFlip.push(cardOne);
console.log(`player clicked ${cardOne}`);

class gameSetup {
    constructor(totalTime, cards) {
        this.cards = cards;
        this.totalTime = totalTime;
        this.timeLeft = totalTime;
        this.timer = document.getElementById('time-left');
    }
    gameStart() {

    }
}