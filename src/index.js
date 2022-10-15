import readlineSync from 'readline-sync';
import meetPlayer from './cli.js';

const controlsGame = (rules, gameRound) => {
  console.log('Welcome to the Brain Games!');
  const playerName = meetPlayer();
  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    const questionAndCorrectAnswer = gameRound();
    console.log(`Question: ${questionAndCorrectAnswer[0]}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === questionAndCorrectAnswer[1]) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${questionAndCorrectAnswer[1]}'.\nLet's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default controlsGame;
