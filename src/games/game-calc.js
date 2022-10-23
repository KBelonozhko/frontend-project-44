import controlGame from '../index.js';
import getRandomNumber from '../helpers.js';

const gameCalcRule = 'What is the result of the expression?';
const minLimit = 0;
const maxLimit = 100;
const operators = ['+', '-', '*'];

const getCalcResult = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error('Wrong operator');
  }
};

const startCalcRound = () => {
  const randomNumber1 = getRandomNumber(minLimit, maxLimit);
  const randomNumber2 = getRandomNumber(minLimit, maxLimit);
  const operatorIndex = getRandomNumber(minLimit, operators.length - 1);
  const randomOperator = operators[operatorIndex];
  const randomCalc = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  const correctAnswer = getCalcResult(randomNumber1, randomNumber2, randomOperator);
  return [randomCalc, `${correctAnswer}`];
};

const startGame = () => {
  controlGame(gameCalcRule, startCalcRound);
};

export default startGame;
