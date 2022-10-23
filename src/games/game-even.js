import controlGame from '../index.js';
import getRandomNumber from '../helpers.js';

const gameEvenRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const minLimit = 0;
const maxLimit = 100;

const isEven = (number) => number % 2 === 0;

const startEvenRound = () => {
  const randomNumber = getRandomNumber(minLimit, maxLimit);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

const startGame = () => {
  controlGame(gameEvenRule, startEvenRound);
};

export default startGame;
