// 1. Create a while loop that will print out all the even numbers between 10 and 40.
const evenNumbersLoop = function (evenNumber) {
  console.log("Even numbers between 10 and 40:");
  while (evenNumber <= 40) {
    console.log(evenNumber);
    evenNumber += 2;
  }
};

// 2. Create a while loop that will print out all the odd numbers between 10 and 40.
const oddNumbersLoop = function (oddNumber) {
  console.log("Odd numbers between 10 and 40:");
  while (oddNumber <= 40) {
    console.log(oddNumber);
    oddNumber += 2;
  }
};

let evenNumbers = 10;
let oddNumbers = 11;

evenNumbersLoop(evenNumbers);
oddNumbersLoop(oddNumbers);
