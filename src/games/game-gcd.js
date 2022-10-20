import controlsGame from '../index.js';

const startGcdRound = () => {
  let randomNumber1 = Math.round(Math.random() * 100);
  let randomNumber2 = Math.round(Math.random() * 100);
  const givenNumbers = `${randomNumber1} ${randomNumber2}`;
  const findsGcd = () => {
    while (randomNumber1 !== randomNumber2) {
      if (randomNumber1 > randomNumber2) {
        randomNumber1 -= randomNumber2;
      } else {
        randomNumber2 -= randomNumber1;
      }
    }
    return randomNumber1;
  };
  return [givenNumbers, `${findsGcd()}`];
};

const startGame = () => {
  const gameGcdRules = 'Find the greatest common divisor of given numbers.';
  controlsGame(gameGcdRules, startGcdRound);
};

export default startGame;