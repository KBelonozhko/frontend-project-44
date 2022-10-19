import controlsGame from '../src/index.js';

const isEven = (number) => number % 2 === 0;

const startEvenRound = () => {
  const randomNumber = Math.round(Math.random() * 100);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

const startGame = () => {
  const gameEvenRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  controlsGame(gameEvenRules, startEvenRound);
};

export default startGame;
