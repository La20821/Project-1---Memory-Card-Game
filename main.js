console.log('js connected!');


const timeCount = document.querySelector('.Timer');
const score = document.querySelector('.scoreKeep');
const allFlipCards = document.querySelector('.allFlipCards');
const cards = document.querySelectorAll('.cards');



let hasClickedCard = false;
let firstClick, secondClick;



cards.forEach(cards => {
    cards.addEventListener('click', gamePlay);
}); 


// start game here by clicking card//
function gamePlay() {
    this.classList.toggle('visible');

    if(!hasClickedCard) {
        hasClickedCard = true;
        firstClick= this;
    } else {
        hasClickedCard = false;
        secondClick = this;

        console.log({firstClick, secondClick});
        console.log(firstClick.id)
        if (firstClick.id == secondClick.id) {
        console.log('Its a match!') 
            firstClick.removeEventListener('click', gamePlay);
            secondClick.removeEventListener('click', gamePlay);
        }
    }   
   
}


// This event listener is activated every time a card is clicked by user//
// I will also want to replace "function" with the actual name of the function I create//





// const numbers = '0123456789';
// let numbersArray = Array.from(numbers);
// console.log(numbersArray);

// numbersArray.forEach(number => {
//     console.log(numbersArray)
    // gamePlay.addEventListener('click');
    // console.log('it works')
   
// });

// let allNumbers = math.floor(math.random()*numbers.length);
// console.log(allNumbers);



// let cardOne = document.getElementById('0');
// function matchOne () {
//     cardOne.addEventListener('click', gamePlay) 
// }  



// let cardTwo = document.getElementById('1');
let cardThree = document.getElementById('2');
console.log(cardThree);
let cardFour = document.getElementById('3');
let cardFive = document.getElementById('4');
let cardSix = document.getElementById('5');
let cardSeven = document.getElementById('6');
let cardEight = document.getElementById('7');
let cardNine = document.getElementById('8');
let cardTen = document.getElementById('9');

let cardsArray = [cards]; //This array should hold all the cards//
   



 


// let cardsToFlip = [];

// let cardOne = cardsArray[0,1];
// cardsToFlip.push(cardOne);
// console.log('player clicked');

// for (let i =0; i < cardsToFlip.length; i++) {
//     let allcards = document.createElement
// }

// class gameSetup {
//     constructor(totalTime, cards) {
//         this.cards = cards;
//         this.totalTime = totalTime;
//         this.timeLeft = totalTime;
//         this.timer = document.getElementById('time-left');
//     }
//     gameStart() {

//     }
// }