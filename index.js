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
let score = localStorage.getItem("score");

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(randomNumber(1, 10));

const genetrateQuestion = () => {
  const randomNumber1 = randomNumber(1, 10);
  const randomNumber2 = randomNumber(1, 10);
  const questionType = randomNumber(1, 4);
  let question;
  let answer;
  let firstNumber;
  let secondNumber;

  if (randomNumber1 > randomNumber2 && questionType > 2) {
    firstNumber = randomNumber1;
    secondNumber = randomNumber2;
  } else {
    firstNumber = randomNumber2;
    secondNumber = randomNumber1;
  }
  // const question = `Q. What is ${randomNumber1} multiply by ${randomNumber2} ?`;
  // const answer = randomNumber1 * randomNumber2;
  switch (questionType) {
    case 1:
      question = `Q. What is ${firstNumber} multiply by ${secondNumber} ?`;
      answer = firstNumber * secondNumber;
      break;
    case 2:
      question = `Q. What is ${firstNumber} add to ${secondNumber} ?`;
      answer = firstNumber + secondNumber;
      break;
    case 3:
      question = `Q. What is ${firstNumber} divided by ${secondNumber} ?`;
      answer = firstNumber / secondNumber;
      break;
    case 4:
      question = `Q. What is ${firstNumber} substracted by ${secondNumber} ?`;
      answer = firstNumber - secondNumber;
      break;
    default:
  }
  return { question, answer };
};

console.log(genetrateQuestion());

const showQuestion = () => {
  const { question, answer } = genetrateQuestion();
  questionEl.innerText = question;
  scoreEl.innerText=score;
  storedAnswer = answer;
};

showQuestion();

const checkAnswer = (event) => {
  event.preventDefault(); //used to stop reloading of pages
  const formData = new FormData(questionFormEl);
  const userAnswer = +formData.get("answer"); //unary Operator is used to convert string to int
  if (userAnswer === storedAnswer) {
    score += 1;
  } else {
    score -= 1;
  }
  scoreEl.innerText = score;
  localStorage.setItem("score", score);
  event.target.reset(); //used to reset the input field
  showQuestion();
  console.log(score);
};
