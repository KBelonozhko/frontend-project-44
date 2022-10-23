import controlGame from '../index.js';
import getRandomNumber from '../helpers.js';

const minLimit = 0;
const maxLimit = 100;

const getProgression = (array, arrayLength, arrayStep) => {
  for (let i = 0; array.length < arrayLength; i += 1) {
    array.push(array[i] + arrayStep);
  }
  return array;
};

const startProgressionRound = () => {
  const progressionLength = 10;
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
  const gameProgressionRule = 'What number is missing in the progression?';
  controlGame(gameProgressionRule, startProgressionRound);
};

export default startGame;
