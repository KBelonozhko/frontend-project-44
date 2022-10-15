import controlsGame from '../src/index.js';

const startGame = () => {
  const gameEvenRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const startEvenRound = () => {
    const generateRandomNumder = () => Math.round(Math.random() * 100);
    const randomNumber = generateRandomNumder();
    const checkCorrectAnswer = () => (randomNumber % 2 === 0 ? 'yes' : 'no');
    return [randomNumber, checkCorrectAnswer()];
  };
  controlsGame(gameEvenRules, startEvenRound);
};

export default startGame;
