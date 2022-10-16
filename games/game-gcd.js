import controlsGame from '../src/index.js';

const startGame = () => {
  const gameGcdRules = 'Find the greatest common divisor of given numbers.';
  const startGcdRound = () => {
    const generateRandomNumder1 = () => Math.round(Math.random() * 100);
    const generateRandomNumder2 = () => Math.round(Math.random() * 100);
    let randomNumber1 = generateRandomNumder1();
    let randomNumber2 = generateRandomNumder2();
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
  controlsGame(gameGcdRules, startGcdRound);
};

export default startGame;
