// Create a Math Question
// Math Question will have a random generated
// Question Type Mujltiplication question with random number range 1-10
// Answer will be the product of the random number range and the random number
// User will have to answer question
// On submit answer will be compared with random generated answer
// If answer will be correct then score will be incremented
// If answer will be wrong then score will be decremented
const questionEl = document.getElementById("question");
const questionFormEl = document.getElementById("questionForm");
let storedAnswer;

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(randomNumber(1, 10));

const genetrateQuestion = () => {
  const randomNumber1 = randomNumber(1, 10);
  const randomNumber2 = randomNumber(1, 10);

  const question = `Q. What is ${randomNumber1} multiply by ${randomNumber2} ?`;
  const answer = randomNumber1 * randomNumber2;
  return { question, answer };
};

console.log(genetrateQuestion());

const showQuestion = () => {
  const { question, answer } = genetrateQuestion();
  questionEl.innerHTML = question;
  storedAnswer = answer;
};

showQuestion();

const checkAnswer = (e) => {
  e.preventDefault();
  const formData = new FormData(questionFormEl);

  console.log(formData);
};
