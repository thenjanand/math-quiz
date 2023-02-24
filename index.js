// what we have to do is written in comments
// Create a Math Question
// Math Question will have a random generated
// Question Type Mujltiplication question with random number range 1-10
// Answer will be the product of the random number range and the random number
// User will have to answer question
// On submit answer will be compared with random generated answer
// If answer will be correct then score will be incremented
// If answer will be wrong then score will be decremented

//Generate 4 types of question
//for subtract first number should be greater than second number
//Store the score in local storage and display the score in the
//Give feedback to the user using toast


const questionEl = document.getElementById("question");
const questionFormEl = document.getElementById("questionForm");
const scoreEl = document.getElementById("score");
let storedAnswer;
let score=0;

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

const checkAnswer = (event) => {
  event.preventDefault();//used to stop reloading of pages
  const formData = new FormData(questionFormEl);
  const userAnswer = +formData.get("answer");//unary Operator is used to convert string to int
  if (userAnswer === storedAnswer) {
    score += 1;
  } else {
    score -= 1;
  }
  scoreEl.innerText = score;
  event.target.reset(); //used to reset the input field
  showQuestion()
  console.log(score);
};
