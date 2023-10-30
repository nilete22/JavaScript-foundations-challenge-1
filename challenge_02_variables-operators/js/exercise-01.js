/*1. Create a variable called 'name' that points at a string containing your name*/
let name = "Nil Farras";

/*2. Define function 'updateValue', which receives a value and updates variable 'name'*/
function updateValue(value) {
  name = value;
}

/*3. On the next line, call function 'updateValue' with your favourite musician's name
Log 'name' value.*/
updateValue("Duki");
console.log(name);

/*4. On the next line, call function 'updateValue' with value 'true'
Log 'name' value.*/
updateValue(true);
console.log(name);

/*5. On the next line, call function 'updateValue' value '28'
Log 'name' value.*/
updateValue(22);
console.log(name);
