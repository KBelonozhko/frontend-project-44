import controlGame from '../index.js';
import getRandomNumber from '../helpers.js';

const gameGcdRule = 'Find the greatest common divisor of given numbers.';
const minLimit = 0;
const maxLimit = 100;

const findsGcd = (number1, number2) => {
  let num1 = number1;
  let num2 = number2;
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }
  return num1;
};

const startGcdRound = () => {
  const randomNumber1 = getRandomNumber(minLimit, maxLimit);
  const randomNumber2 = getRandomNumber(minLimit, maxLimit);
  const givenNumbers = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = findsGcd(randomNumber1, randomNumber2);
  return [givenNumbers, `${correctAnswer}`];
};

const startGame = () => {
  controlGame(gameGcdRule, startGcdRound);
};

export default startGame;
