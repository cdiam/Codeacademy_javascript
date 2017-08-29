/*JavaScript creates space for this variable in memory and sets it to undefined.
Undefined is the fifth and final primitive data type.
JavaScript assigns the undefined data type to variables that are not assigned a value.*/

let notDefined;
console.log(notDefined);
let valueless;
console.log(valueless);


let favoriteAnimal = 'dog';

console.log('My favorite animal: ' + favoriteAnimal);


let myName = 'Constantine';
let myCity = 'Athens';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

var isArthur = true;
var isKing = true;

console.log("Current weapon: " + (isArthur  && isKing ? "Knife" : "Spark"));



 var rightNow = +new Date();
 var endTime = +new Date();
 var elapsedTime = endTime - rightNow;
 console.log(elapsedTime);
console.log(rightNow);
