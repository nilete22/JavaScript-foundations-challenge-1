/*
  1. At the start of the program print out: "--- Animal Checker Program ---"
  2. Create a variable called animal that starts at the value "cat"
  3. Create an if statement that checks if animal is equal to "cat"
  4. If it is equal to "cat", print out "Meow!" to the screen
  5. If it is equal to "dog", print out "Woof!" to the screen
  6. If it is neither "cat" nor "dog", print out "Must be an alien"
  7. At the end of the program print out: "--- Animal check complete ---"
  8. Change animal to different values to make sure it works in all cases
*/

const animalChecker = function (animal) {
  if (animal === "cat") {
    console.log("Miau!");
  }
  if (animal === "dog") {
    console.log("buup!");
  }
  if (animal !== "dog" && animal !== "cat") {
    console.log("it could be an alien");
  }
};

console.log("--- Animal Checker Program ---");
let animal = "dog";

animalChecker(animal);

console.log("--- Animal check complete ---");
