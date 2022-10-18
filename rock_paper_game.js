// ______Function for users choice_______

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "scissors" ||
    userInput === "paper"
  ) {
    return userInput;
  } else {
    console.log("Error, please type: rock,paper or scissors!");
  }
};



// _____Randomize Computers Choice________
const getComputerChoice = () => {
    const randomNumber = 
  Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};


// _________ Determine a winner ____________
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game is tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer wins!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won";
    } else {
      return "You won!";
    }
  }
};

// _____Hard coded (play game)_____
const playGame = () => {
  const userChoice = getUserChoice("scissors");
  const computerChoice = getComputerChoice();
  console.log("you threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
