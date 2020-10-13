console.log('js connected!');


const timeCount = document.querySelector('.Timer');
let score = document.querySelector('.scoreKeep');
const allFlipCards = document.querySelector('.allFlipCards');
const cards = document.querySelectorAll('.cards');
const message = document.querySelector('#message');
const message1 = document.querySelector('#message1');
const resetBtn = document.querySelector('#reset');
let count = 0;
let scoreCount = 0;



let allCards = [cards];
let frontImgs = ['https://i.imgur.com/XobARy9.jpg', 'https://i.imgur.com/t6oDW49.png', 'https://i.imgur.com/VUcWfaz.jpg', 'https://i.imgur.com/44TVmCD.jpg', 'https://i.imgur.com/PnkjjUV.png']
let backImage = 'https://i.imgur.com/ZcDpBFV.png';

let hasClickedCard = false;
let firstClick, secondClick;



cards.forEach(cards => {
    cards.addEventListener('click', gamePlay);
}); // shows output every time a card is clicked//


// start game here by clicking card//
function gamePlay() {
    // this.classList.toggle('visible');
    let img = this.lastElementChild.lastElementChild;
    console.log(img.src);
    img.src = frontImgs[this.id]
    
    if (hasClickedCard) {
        setInterval(() => {
            counter--;
            if(counter >= 0) {
                id = document.getElementById('time-left');
                id.innerHTML = counter;
            }
            
        }, 1000);
    }
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
        count++;
        console.log(count);
        message.innerHTML = 'YOU FOUND A MATCH!' // alert("You found a match!")
            firstClick.removeEventListener('click', gamePlay);
            secondClick.removeEventListener('click', gamePlay);
            scoreCount +=250;
            score.innerHTML = "Score:" + scoreCount;
            console.log(score)
        } //If match, then card cannot be clicked again. 
        else { 
            //if not a match//
            console.log("Not a match!")
            setTimeout(() => {
                let origImg = firstClick.lastElementChild.lastElementChild;
                let origImg2 = secondClick.lastElementChild.lastElementChild;
                console.log(origImg.src);
                origImg.src = backImage;
                origImg2.src = backImage;
                console.log(firstClick);
            firstClick.classList.remove('click','visible')
            secondClick.classList.remove('click','visible')
            }, 1000);
            // let origImg = firstClick.lastElementChild.lastElementChild;
            // let origImg2 = secondClick.lastElementChild.lastElementChild;
            // console.log(origImg.src);
            // origImg.src = backImage;
            // origImg2.src = backImage;
            // console.log(firstClick)

        }
        winLogic();
    }   setTimeout(removeInnerHTML, 4000);

   
}

function removeInnerHTML() {
    message.innerHTML = ''; 
    
}



function winLogic() {
    if (count == 5)
    message1.innerHTML = "You've Won!"
    // console.log('You win')
}

function resetGame() {

}

let counter = 60;



// setInterval(() => {
//     counter--;
//     if(counter >= 0) {
//         id = document.getElementById('time-left');
//         id.innerHTML = counter;
//     }
    
// }, 1000);

console.log(counter)


// function resetGame() {
//     [hasClickedCard, lockGame] = [false, false];
// }

            

// ("cards").on('click', function() {
//     countDown();
// });

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
// let cardThree = document.getElementById('2');
// console.log(cardThree);
// let cardFour = document.getElementById('3');
// let cardFive = document.getElementById('4');
// let cardSix = document.getElementById('5');
// let cardSeven = document.getElementById('6');
// let cardEight = document.getElementById('7');
// let cardNine = document.getElementById('8');
// let cardTen = document.getElementById('9');

// let cardsArray = [cards]; //This array should hold all the cards//
   



 


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