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
}); // system knows every time a card is clicked//


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
            
        }, 1000);//The timer starts directly when second card is clicked.//
    }
    if(!hasClickedCard) {
        hasClickedCard = true;
        firstClick= this;
    } else {
        hasClickedCard = false;
        secondClick = this;
        

        console.log({firstClick, secondClick});
        console.log(firstClick.id)
        if (firstClick.id == secondClick.id) {//looks at the div id of each card and verifies its equal//
        console.log('Its a match!') 
        count++;
        console.log(count);
        message.innerHTML = 'YOU FOUND A MATCH!' // alert("You found a match!")
            firstClick.removeEventListener('click', gamePlay);
            secondClick.removeEventListener('click', gamePlay);
            scoreCount +=250;
            score.innerHTML = "Score:" + scoreCount;
            console.log(score)
        } //If match, then cards cannot be clicked again. 
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




console.log(counter)


// function resetGame() {
//     [hasClickedCard, lockGame] = [false, false];
// }

            

