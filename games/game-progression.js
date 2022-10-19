import controlsGame from '../src/index.js';

const startProgressionRound = () => {
  const initialElement = Math.round(Math.random() * 100);
  const progressionStep = Math.round(Math.random() * 10);
  const progression = [initialElement];
  for (let i = 0; i < 9; i += 1) {
    const item = progression[i] + progressionStep;
    progression.push(item);
  }
  const hiddenPosition = Math.floor(Math.random() * 10);
  const hiddenElement = progression[hiddenPosition];
  progression[hiddenPosition] = '..';
  return [progression.join(' '), `${hiddenElement}`];
};

const startGame = () => {
  const gameProgressionRules = 'What number is missing in the progression?';
  controlsGame(gameProgressionRules, startProgressionRound);
};

export default startGame;
