/*
    Create a program that starts with a number variable.
    The program will return the variable is even or odd.

    Change the variable to test it works for different cases.
    Print result.

    HINT: modulus operator ( % ) is your friend
*/
let number = 13;

if (number % 2 === 0) {
  console.log(number + " is even.");
}
if (number % 2 !== 0) {
  console.log(number + " is odd.");
}
