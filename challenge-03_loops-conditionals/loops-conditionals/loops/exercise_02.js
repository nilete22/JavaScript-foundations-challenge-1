/*
    1. Create a for loop that runs from 1-100 
    2. Every 10 loops, print out: Checkpoint! and the loop number
    3. On loop 50 print out ONLY: Half way there!
    4. On the final loop (100) print out ONLY: You made it!
    5. AFTER the loop is done, print out: All, done!

    You should see this printed out when run:
    Checkpoint! 10
    Checkpoint! 20
    Checkpoint! 30
    Checkpoint! 40
    Half way there!
    Checkpoint! 60
    Checkpoint! 70
    Checkpoint! 80
    Checkpoint! 90
    You made it!
    All, done!
*/
const counterLoop = function (firstNumber, lastNumber) {
  for (let i = firstNumber; i <= lastNumber; i++) {
    if (i % 10 === 0) {
      console.log("Checkpoint!", i);
    }
    if (i === 50) {
      console.log("Half way there!");
    }
    if (i === 100) {
      console.log("You made it!");
    }
  }
  console.log("All, done!");
};

const firtsNumber = 1;
const lastNumber = 100;

counterLoop(firtsNumber, lastNumber);
