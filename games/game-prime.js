import controlsGame from '../src/index.js';

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
  const randomNumber = Math.round(Math.random() * 100);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

const startGame = () => {
  const gamePrimeRules = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  controlsGame(gamePrimeRules, startPrimeRound);
};

export default startGame;
