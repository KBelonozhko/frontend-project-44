import operateGame from '../index.js';
import getRandomNumber from '../helpers.js';

const gameProgressionRule = 'What number is missing in the progression?';
const minLimit = 0;
const maxLimit = 100;
const progressionLength = 10;

const getProgression = (array, arrayLength, arrayStep) => {
  while (array.length !== arrayLength) {
    array.push(array[array.length - 1] + arrayStep);
  }
  return array;
};

const startProgressionRound = () => {
  const initialElement = getRandomNumber(minLimit, maxLimit);
  const progressionStep = getRandomNumber(minLimit, progressionLength);
  const progression = [initialElement];
  const resultingProgression = getProgression(progression, progressionLength, progressionStep);
  const hiddenPosition = getRandomNumber(minLimit, progressionLength);
  const hiddenElement = resultingProgression[hiddenPosition];
  resultingProgression[hiddenPosition] = '..';
  return [resultingProgression.join(' '), `${hiddenElement}`];
};

const startGame = () => {
  operateGame(gameProgressionRule, startProgressionRound);
};

export default startGame;
