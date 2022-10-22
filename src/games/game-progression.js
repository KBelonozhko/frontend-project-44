import controlGame from '../index.js';
import getRandomNumber from '../helper-function.js';

const getProgression = (array, arrayLength, arrayStep) => {
  for (let i = 0; array.length < arrayLength; i += 1) {
    array.push(array[i] + arrayStep);
  }
  return array;
};

const startProgressionRound = () => {
  const initialElement = getRandomNumber(0, 100);
  const progressionStep = getRandomNumber(0, 10);
  const progression = [initialElement];
  const progressionLength = 10;
  const resultingProgression = getProgression(progression, progressionLength, progressionStep);
  const hiddenPosition = getRandomNumber(0, 10);
  const hiddenElement = resultingProgression[hiddenPosition];
  resultingProgression[hiddenPosition] = '..';
  return [resultingProgression.join(' '), `${hiddenElement}`];
};

const startGame = () => {
  const gameProgressionRule = 'What number is missing in the progression?';
  controlGame(gameProgressionRule, startProgressionRound);
};

export default startGame;
