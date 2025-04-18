
let score = JSON.parse(localStorage.getItem('score')) || 
{
    wins: 0,
    losses: 0,
    ties: 0
};


myScore();

document.querySelector('.js-rock').addEventListener('click', () => {
playGame('rock');
});


document.querySelector('.js-paper').addEventListener('click', () => {
playGame('paper');
});



document.querySelector('.js-scissors').addEventListener('click', () => {
playGame('scissors');

});



    
    let results = '';
function playGame(playerMove) {
  let pickComputerMove = computerMove();  

if (playerMove === 'rock') {

    if (pickComputerMove === 'rock') {
    results = 'Tie';
    }
    
    else if (pickComputerMove === 'paper') {
        results = 'You lose';
    }

    else if (pickComputerMove === 'scissors') {
    results = 'You win';
    }

    }


else if (playerMove === 'paper') {

    if (pickComputerMove === 'rock') {
    results = 'You win';
}
    
        else if (pickComputerMove === 'paper') {
            results = 'You tie';
        }

        else if (pickComputerMove === 'scissors') {
        results = 'You lose';
        }
        
        }


else if (playerMove === 'scissors') {

    if (pickComputerMove === 'rock') {
    results = 'You lose';
    }
    
        else if (pickComputerMove === 'paper') {
            results = 'You win';
        }

        else if (pickComputerMove === 'scissors') {
        results = 'You tie';
        }
        
        }

if (results === 'You win') {
score.wins += 1;
}

else if (results === 'You lose') {
score.losses += 1;
}

else if (results === 'You tie') {
score.ties += 1;
}


localStorage.setItem('score', JSON.stringify(score));

document.querySelector('.js-score').innerHTML = `${results}, Computer chose ${pickComputerMove}`;

myScore();

}

function myScore() {
  document.querySelector('.js-my-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

  


function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
 
}

document.querySelector('.js-reset-button').addEventListener('click', () => {
  //removes the score
  resetScore();
  //calls new score with 0
  myScore();
  });





function computerMove() {
    const generateMove = Math.random();
    let pcMove = '';

if (generateMove >= 0 && generateMove < 1 / 3) {
    pcMove = 'rock';
}

else if (generateMove >= 1 / 3 && generateMove < 2 / 3) {
pcMove = 'paper';
}

else if (generateMove >= 2 / 3 && generateMove < 1) {
pcMove = 'scissors';
}
return pcMove;
}







