import controlGame from '../index.js';
import getRandomNumber from '../helpers.js';

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
  const randomNumber1 = getRandomNumber(0, 100);
  const randomNumber2 = getRandomNumber(0, 100);
  const givenNumbers = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = findsGcd(randomNumber1, randomNumber2);
  return [givenNumbers, `${correctAnswer}`];
};

const startGame = () => {
  const gameGcdRule = 'Find the greatest common divisor of given numbers.';
  controlGame(gameGcdRule, startGcdRound);
};

export default startGame;
