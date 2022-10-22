import controlGame from '../index.js';
import getRandomNumber from '../helper-function.js';

const startProgressionRound = () => {
  const initialElement = getRandomNumber(0, 100);
  const progressionStep = getRandomNumber(0, 10);
  const progression = [initialElement];
  for (let i = 0; i < 9; i += 1) {
    const item = progression[i] + progressionStep;
    progression.push(item);
  }
  const hiddenPosition = getRandomNumber(0, 10);
  const hiddenElement = progression[hiddenPosition];
  progression[hiddenPosition] = '..';
  return [progression.join(' '), `${hiddenElement}`];
};

const startGame = () => {
  const gameProgressionRules = 'What number is missing in the progression?';
  controlGame(gameProgressionRules, startProgressionRound);
};

export default startGame;
