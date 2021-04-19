'use strict';
/* Guess my number - game */
// dot for class, hash for ID

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let number = Math.trunc(Math.random() * 20) + 1;
let score = 100;
let highscore = 0;

document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No guess yet!');
  } else if (guess === number) {
    document.querySelector('body').style.backgroundColor = '#00ff00';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    displayMessage('🎉 Correct Number!');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highsc   ore').textContent = score;
    }
  } else if (guess != number) {
    displayMessage(guess > number ? '🥵 Too high!' : '🥶 Too low!');
    document.querySelector('.score').textContent = score -= 10;
  }
  if (score <= 0) {
    document.querySelector('body').style.backgroundColor = '#ff0000';
    displayMessage('😫 Game Over!');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  console.log('Entre al evento');
  score = 100;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
});
