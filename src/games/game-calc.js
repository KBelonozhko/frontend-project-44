import controlsGame from '../index.js';
import getRandomNumber from '../helper-function.js';

const startCalcRound = () => {
  const randomNumber1 = getRandomNumber(0, 100);
  const randomNumber2 = getRandomNumber(0, 100);
  const operators = ['+', '-', '*'];
  const operatorIndex = getRandomNumber(0, operators.length);
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
        return null;
    }
  };
  return [randomCalc, `${getCalcResult()}`];
};

const startGame = () => {
  const gameCalcRules = 'What is the result of the expression?';
  controlsGame(gameCalcRules, startCalcRound);
};

export default startGame;
