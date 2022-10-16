import controlsGame from '../src/index.js';

const startGame = () => {
  const gamePrimeRules = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  const startPrimeRound = () => {
    const randomNumber = Math.round(Math.random() * 100);
    const checkCorrectAnswer = () => {
      if (randomNumber === 1) {
        return 'no';
      } if (randomNumber === 2) {
        return 'yes';
      }
      for (let i = 2; i < randomNumber; i += 1) {
        if (randomNumber % i === 0) {
          return 'no';
        }
      }
      return 'yes';
    };
    return [randomNumber, checkCorrectAnswer()];
  };
  controlsGame(gamePrimeRules, startPrimeRound);
};

export default startGame;
