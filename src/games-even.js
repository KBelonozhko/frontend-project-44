import readlineSync from 'readline-sync';
import meetPlayer from './cli.js';

const startGame = () => {
  const playerName = meetPlayer();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  for (; i < 3; i += 1) {
    const generateRandomNumder = () => Math.round(Math.random() * 100);
    const randomNumber = generateRandomNumder();
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = () => (randomNumber % 2 === 0 ? 'yes' : 'no');
    if (answer === correctAnswer()) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer()}'.\nLet's try again, ${playerName}!`);
      break;
    }
  }
  if (i === 3) console.log(`Congratulations, ${playerName}!`);
};
export default startGame;
