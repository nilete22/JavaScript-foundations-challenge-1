//1. Create a for loop that will print out all the even numbers between 10 and 40.
const evenNumbers = function (start, end) {
  console.log("Even numbers between 10 and 40:");
  for (let i = 10; i <= 40; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};

//2. Create a for loop that will print out all the odd numbers between 10 and 40.
const oddNumbers = function (start, end) {
  console.log("Odd numbers between 10 and 40:");
  for (let i = 10; i <= 40; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
};

const start = 10;
const end = 40;

evenNumbers(start, end);
oddNumbers(start, end);
