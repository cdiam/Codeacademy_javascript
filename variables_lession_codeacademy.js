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
 var endTime = +new Date();//Here is an example of a strawberry index
var index = 20;

//Boolean value rotten
var rotten = false;

//If the index is divisible by five, the strawberry is rotten, so set
//rotten to true. False, otherwise

if ( index % 5 == 0 ){

    rotten = true;


}
else
{

    rotten = false
}







 var elapsedTime = endTime - rightNow;
 console.log(elapsedTime);
console.log(rightNow);




//Here is an example of a strawberry index
var index = 20;

//Boolean value rotten
var rotten = false;

//If the index is divisible by five, the strawberry is rotten, so set
//rotten to true. False, otherwise

if ( index % 5 == 0 ){

    rotten = true;


}
else
{

    rotten = false
}









//You have 500 good strawberries, indexed from 1 to 500
var goodStrawberries = 500;

//For every strawberry whose index is divisible
//by 5, decrement the value of goodStrawberries by 1

for ( var i = 1 ; i <= 500 ; i++ )

{
    if ( i % 5 === 0  ){

        goodStrawberries = goodStrawberries -1;

    }



}



//To make up the money you lost from picking rotten strawberries,
//you decide to pick 10 extra strawberries everyday for the next
//7 days.

//Your earnings
var earnings = 0;

//Fill in the outer loop with an inner loop that loops through
//10 strawberries and increment your earnings by 2.25 for every
//extra strawberry that you pick
for (var days = 7; days > 0; days--)
{
 //Insert inner for loop here
    for (var i = 1 ; i <= 10 ; i++)
    {

        earnings = earnings + 2.25 ;
    }

}

//Boolean that returns true if your losses have been covered
var lossesCovered = true;

//Write an if statement that changes the lossesCovered to true
//if the earnings are greater than or equal to 225

if (earnings > 225 ){

    lossesCovered = true;

}
else
{
    lossesCovered = false;

}




// Control flow logic

let userName = 'Constantine';
let knowsJavaScript = true;

if (knowsJavaScript && userName) {
  console.log('Great, ' + userName + '! Get ready to practice your JavaScript!');
} else if (knowsJavaScript) {
  console.log('Great! Get ready to practice your JavaScript!');
} else if (userName) {
  console.log('Great, ' + userName + '! Get ready to learn something new!');
} else {
  console.log('Great! Get ready to learn something new!');
}


var isSoccerFan = true;

if ( isSoccerFan === true ) {

  console.log("Goal!");
} else if ( isSoccerFan == false ) {

  console.log("No goal!");
}



let hungerLevel = 5;

if (hungerLevel > 7) {

  console.log("Time to eat!");
} else{

  console.log("We can eat later!");
}


var moonPhase = "full";

if ( moonPhase === "full") {

  console.log("Howl!");
}else {

  console.log("I swear I am not a werewolf");
}



// Ternary Opeator

let isLocked = true;

isLocked ? console.log('You will need a key to open the door.'):
  console.log('You will not need a key to open the door.');

let isCorrect = false;

isCorrect? console.log('Correct!') :
console.log('Incorrect!')


let favoritePhrase = 'Love That!!';

favoritePhrase === 'Love That!' ?console.log('I love that!'): console.log("I don't love that!");



var orderCount = 0;




const takeOrder = (topping,crustType) =>{

  orderCount ++ ;
  console.log('Order:pizza topped with' + topping + ' with ' + crustType);


};

const getSubTotal = (itemCount) =>{

  return (itemCount * 7.5);

};

const getTax =() => {

  return (getSubTotal(orderCount) * 0.06);
};

const getTotal = () => {

  return(getSubTotal(orderCount) + getTax())
};

takeOrder('mushrooms','bacan');
console.log(getSubTotal(orderCount));
takeOrder('bacon','bread');
console.log(getSubTotal(orderCount));
takeOrder('olives','bacan');
console.log(getSubTotal(orderCount));
console.log(getTotal());




/*Arrow Function */


const isGreaterThan = (numberOne, numberTwo) => {

  if (numberOne > numberTwo){

    return true;
  }
  else
    {
      return false;
    }
};

console.log(isGreaterThan(2,3));


/* Scope Variables */

const satellite = 'The Moon';

const galaxy = 'The Milky Way';

let stars = 'North Star';

const myNightSky = () => {

  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(myNightSky());




const visibleLightWaves = () => {
  let lightWaves = 'Moonlight';
  let region = 'The Arctic';

  if (region === 'The Arctic'){

    let lightWaves = 'Northern Lights';

      console.log(lightWaves);



  };

  console.log(lightWaves);
};

visibleLightWaves();



const starCount = () => {
  let i = 5 ;

  console.log(i);

  for ( let i = 0 ; i < 12 ; i++){

    console.log(i);
  }

};

starCount();

console.log(i);



let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);

groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1,4));



//iterator Lesson


let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below

//Function method

fruits.forEach(function(fruitsItem){

  console.log('I want to eat ' + fruitsItem);

});


//Arrow function forEach
fruits.forEach(fruitsItem=>
console.log('I want to eat a ' + fruitsItem));


let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below

let secretMessage = animals.map(function(animals) {
  return animals[0];

})

console.log(secretMessage.join(''));

let bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below

let smallNumbers = bigNumbers.map(function(bigNumbers){

  return bigNumbers / 100;

});

let secretMessage = animals.map(animals => animals[0]);



let randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below

let smallNumbers = randomNumbers.filter(function(randomNumber){

  return randomNumber < 250;
});

let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

let longFavoriteWords = favoriteWords.filter(word =>
  word.length > 7);

// Refactor the code above using arrow function syntax


let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(function(word) {
  return word.length < 6;
}));

// Use filter to create a new array

let interestingWords = words.filter(word => word.length > 5);

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every(word =>  word.length > 5      ));


let cities = ['Nashville', 'Charlotte', 'Asheville', 'Austin', 'Boulder'];

let nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
let longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a new array
let smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);


//Objects again

let person = {name : 'Constantine',
              age  : 40
             };

console.log(person.name);
console.log(person.age);



let person = {name : 'Constantine',
              age  : 40
             };

console.log(person['name']);
console.log(person['age']);



let person = {
  name: 'Constantine',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM'
};

console.log(person['name']);
console.log(person['age']);

let day = 'Sunday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);



let person = {
  name: 'Tyron',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM'
};

person.hobbies = ['soccer', 'f1'];
person.hobbies = ['soccer'];

console.log(person.hobbies);


console.log(person['name']);
console.log(person['age']);

let day = 'Sunday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);



let person = {
  name: 'Tyron',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  sayHello: ()=> {
    return 'Hello, there!';
  }
};


console.log(person.sayHello());
person.hobbies = ['soccer', 'f1'];
person.hobbies = ['soccer'];

console.log(person.hobbies);


console.log(person['name']);
console.log(person['age']);

let day = 'Sunday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);



let person = {
  name: 'Tyron',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  sayHello: function() {
    return `Hello, my name is ${this.name}`;
  },

  sayGoodbye() {
    return 'Goodbye!';
  }

};

let friend = {
						 name: 'Tim',
};

friend.sayHello = person.sayHello;

console.log(friend.sayHello());

console.log(person.sayHello());


let person = {
  _name: 'Lu Xun',
  _age: 137,

  set age(ageIn) {
    if (typeof ageIn === 'number') {
      this._age = ageIn;
    }
    else {
      console.log('Invalid input');
      return 'Invalid input';
    }
  }

};

person.age = 39;



let person = {
  _name: 'Lu Xun',
  _age: 137,

  set age(ageIn) {
    if (typeof ageIn === 'number') {
      this._age = ageIn;
    }
    else {
      console.log('Invalid input');
      return 'Invalid input';
    }
  },

  get age(){

    console.log(`${this._name} is ${this._age} years old`);
  }

};

person.age = 39;
console.log(person.age)



//Intensive
