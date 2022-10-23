import operateGame from '../index.js';
import getRandomNumber from '../helpers.js';

const gameGcdRule = 'Find the greatest common divisor of given numbers.';
const minLimit = 0;
const maxLimit = 100;

const findsGcd = (number1, number2) => {
  if (number1 === number2) {
    return number1;
  }
  if (number1 > number2) {
    return findsGcd(number1 - number2, number2);
  }
  return findsGcd(number1, number2 - number1);
};

const startGcdRound = () => {
  const randomNumber1 = getRandomNumber(minLimit, maxLimit);
  const randomNumber2 = getRandomNumber(minLimit, maxLimit);
  const givenNumbers = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = findsGcd(randomNumber1, randomNumber2);
  return [givenNumbers, `${correctAnswer}`];
};

const startGame = () => {
  operateGame(gameGcdRule, startGcdRound);
};

export default startGame;
