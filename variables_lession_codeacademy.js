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
