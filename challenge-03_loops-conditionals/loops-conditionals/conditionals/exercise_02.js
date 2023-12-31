/* 
   Spot the bug 🐞
   Should print: "Most places consider you an adult."... but it doesn't, why?

   Add a comment explaining what is happenning and how to fix it
*/
/*
const age = 20;

if (age < 3) {
  console.log("You're just a baby!");
}
if (age >= 3) {
  console.log("You are in elementary school, kid.");
}
if (age >= 13) {
  console.log("Nice, you're a teenager!");
}
if (age >= 18) {
  console.log("Most places consider you an adult.");
}
if (age > 18) {
  console.log("What? How did this happen!?");
}
*/
/* 
  The declaration of the variables is not well executed, because in the code it is 
  executed that those who are that age or younger paint the result, but speaking of 
  a topic such as age, one can be over 18 years old.
  Example of the program update:

 
*/

const ageType = function (age) {
  if (age < 3) {
    console.log("You're just a baby!");
  }
  if (age < 13) {
    console.log("You are in elementary school, kid.");
  }
  if (age <= 18) {
    console.log("Nice, you're a teenager!");
  }
  if (age > 18) {
    console.log("Most places consider you an adult.");
  }
};

const age = 20;

ageType(age);
