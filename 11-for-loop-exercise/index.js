const myName = "AJ"; // SET YOUR NAME

const visitors = ["Alex", "Mike", "Sam","John","David"]; // Add at least 5 names

/**
 * Exercise 1
 *
 * create a function {greetVisitors} and inside it write for loop which
 * will greet all people from "visitors" for each person you should
 * console.log "Hi {name}, my name is {myName}!"
 */
 greetVisitors  = () => {
   for (n = 0; n < visitors.length; n++) {
  const greetings = visitors[n]
  console.log(`"Hi ${greetings}, my name is ${myName}!"`)

}
};


// ========================
let numbers = [2, 123, 13, 1, 6, 84, 23, 12, 45]; // DON'T TOUCH THIS LINE :)

/**
 * Exercise 2
 * Create a function {getElementIndex} that uses a for loop to find the index of a
 * given item in {numbers}.
 * If the item is not present, return a string "Item not found"
 */
 function getElementIndex (item) {
  if (numbers.includes(item)) {
    return numbers.indexOf(item);
  } else {
    return "Item not found"

}
};


// ========================

/**
 * Exercise 3
 * Create a function {total} that will return sum of all numbers
 * from {numbers} array
 */
 function total() {
  let sum = 0
  for(num = 0; num < numbers.length; num++) {
    sum += numbers[num]

  }
    return sum
}



// ========================

const numbersForIndexes = [6, 2, 16, 23, 84, 21, 9, 3]; // DON'T TOUCH THIS LINE :)

/**
 * Exercise 4
 * Create a function {addIndex} that takes {numbersForIndexes} array,
 * and returns a new array which includes each number + it's index
 */
 const numbersA = [];
function addIndex() {


  for (value = 0; value < numbersForIndexes.length; value++) {
    numbersA.push(numbersForIndexes[value] + value)
  }
  return numbersA;

};

const forLowestNumber = [5, 234, 96, 34, -34, 0, 23]; // DON'T TOUCH THIS LINE :)
/**
 * Exercise 5
 *  create function {lowestNumber} which will return the lowest integer
 * from {forLowestNumber}
 */


 lowestNumber = () => {
   let minimum = forLowestNumber[0];
   for(let value of forLowestNumber) {
     if (minimum > value) {
       minimum = value;

     }
   }
   return minimum;
 };
