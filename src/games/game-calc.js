import controlGame from '../index.js';
import getRandomNumber from '../helpers.js';

const getCalcResult = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw Error;
  }
};

const startCalcRound = () => {
  const randomNumber1 = getRandomNumber(0, 100);
  const randomNumber2 = getRandomNumber(0, 100);
  const operators = ['+', '-', '*'];
  const operatorIndex = getRandomNumber(0, operators.length - 1);
  const randomOperator = operators[operatorIndex];
  const randomCalc = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  const correctAnswer = getCalcResult(randomNumber1, randomNumber2, randomOperator);
  return [randomCalc, `${correctAnswer}`];
};

const startGame = () => {
  const gameCalcRule = 'What is the result of the expression?';
  controlGame(gameCalcRule, startCalcRound);
};

export default startGame;
