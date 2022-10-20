import controlsGame from '../index.js';
import getRandomNumber from '../helper-function.js';

const isEven = (number) => number % 2 === 0;

const startEvenRound = () => {
  const randomNumber = getRandomNumber(0, 100);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

const startGame = () => {
  const gameEvenRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  controlsGame(gameEvenRules, startEvenRound);
};

export default startGame;
