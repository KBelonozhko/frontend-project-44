import controlsGame from '../src/index.js';

const startGame = () => {
  const gameCalcRules = 'What is the result of the expression?';
  const startCalcRound = () => {
    const generateRandomNumder1 = () => Math.round(Math.random() * 100);
    const generateRandomNumder2 = () => Math.round(Math.random() * 100);
    const randomNumber1 = generateRandomNumder1();
    const randomNumber2 = generateRandomNumder2();
    const operators = ['+', '-', '*'];
    const operatorIndex = Math.floor(Math.random() * operators.length);
    const randomOperator = operators[operatorIndex];
    const randomCalc = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
    const getCalcResult = () => {
      switch (randomOperator) {
        case '+':
          return randomNumber1 + randomNumber2;
        case '-':
          return randomNumber1 - randomNumber2;
        case '*':
          return randomNumber1 * randomNumber2;
        default:
          // do nothing
      }
      return null;
    };
    return [randomCalc, `${getCalcResult()}`];
  };
  controlsGame(gameCalcRules, startCalcRound);
};

export default startGame;
