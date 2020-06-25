const target = 15;
const userValue = "15";

const password = "JSisKool888";
const passwordConfirmation = "JSisCool888";

const sortOrder = "ALPHABETICAL";

// ADD YOUR CODE BELOW
let targetMatchesCoercedUserValue;
if (target == userValue) {
  targetMatchesCoercedUserValue = true;

};

let targetMatchesUserValue;
if (target !== userValue) {
  targetMatchesUserValue = false;
};

let passwordMatchesConfirmation;
if (password !== passwordConfirmation) {
  passwordMatchesConfirmation = false;
};

let passwordMessage;
if (password !== passwordConfirmation) {
  passwordMessage = "Oops, your password and confirmation do not match!";
};

let fruits;
if (sortOrder === "ALPHABETICAL") {
  fruits = "banana, cherry, watermelon";
};
