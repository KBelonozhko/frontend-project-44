import controlGame from '../index.js';
import getRandomNumber from '../helpers.js';

const minLimit = 0;
const maxLimit = 100;

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const startPrimeRound = () => {
  const randomNumber = getRandomNumber(minLimit, maxLimit);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

const startGame = () => {
  const gamePrimeRule = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  controlGame(gamePrimeRule, startPrimeRound);
};

export default startGame;
