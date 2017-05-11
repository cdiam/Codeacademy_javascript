/*LOOPS

Instead of writing out the same code over and over, let’s make the computer loop through our array for us. We can do this with for loops.

The syntax looks like this:

var animals = ["Grizzly Bear", "Sloth", "Sea Lion"];

for (var i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// Output:
// Grizzly Bear
// Sloth
// Sea Lion
Since this syntax is a little complicated, let's break it into 4 parts:

Within the for loop's parentheses, the start condition is var i = 0, which means the loop will start counting at 0.
The stop condition is i < animals.length, which means the loop will run as long as i is less than the length of
the animals array. When i is greater than the length of the animals array, the loop will stop looping.
The iterator is i++. This means that each loop, i will have 1 added to it.
And finally, the code block is inside the { ... }. The block will run each loop, until the loop stops.
The secret to loops is that i, the variable we created inside the for loop's parentheses, is always equal to a number.
To be more clear, the first loop, i will equal 0, the second loop, i will equal 1, and the third loop, i will equal 2.

This makes it possible to write animals[0], animals[1], animals[2] programmatically instead of by hand.
We can write a for loop, and replace the hard coded number with the variable i, like this: animals[i].


*/

var vacationSpots =['Corfu','Zante', 'Kefalonia'];


for (var i = 0 ; i <vacationSpots.length ; i++) {

  console.log('I would like to visit ' + vacationSpots[i]);
}


/*Backwards printinting */
var vacationSpots =['Corfu','Zante', 'Kefalonia'];


for (var i = vacationSpots.length - 1 ; i>=0 ; i--) {

  console.log('I would like to visit ' + vacationSpots[i]);
}




var myPlaces = ['Paris', 'New York', 'Barcelona'];
var friendPlaces = ['Rome', 'Chicago', 'Paris'];

for (var i = 0; i < myPlaces.length; i++) {
    console.log(myPlaces[i]);

  for (var j = 0; j < friendPlaces.length; j++) {
        console.log(friendPlaces[j]);

    if (myPlaces[i] === friendPlaces[j]) {
    			console.log('Match: ' + myPlaces[i]);
				}
    }
}






var cards = ['Diamond', 'Spade', 'Heart', 'Club'];

var currentCard = 'Heart';

while (currentCard !== 'Spade') {
  console.log(currentCard);

  var randomNumber = Math.floor(Math.random() * 4);

  currentCard = cards[randomNumber];
}

console.log('Found a Spade!');



/*
a. A more efficient way to code to increment up by 1 is to write i++.
b. We decrement down by 1 by writing i--.
c. We can increment up by any value by writing i += x, where x is how much we want to increment up by. e.g., i += 3 counts up by 3s.
d. We can decrement down by any value by writing i -= x. (See the Hint for more.)

*/

// Edit this for loop!

for (var i = 5; i < 51; i+=5) {
	console.log(i);
}

for (var i = 10; i >= 0; i--) {
	console.log(i);
}

// Write your very own for loop!


for (i = 100 ; i > 0 ; i-=5)
{

    console.log(i);
}

// Click on "Stuck? Get a hint!" if you get stuck!

var names = ["Mary", "Lisa", "Irina", "Sofia", "Joanna"];

for (i=0; i < names.length ; i++)
{

    console.log("I know someone called " + names[i]);
}



/* search for text names

/*jshint multistr:true */

var text = "Hello there my name  is Constantine and i will \
like to work with you.  is name from Byzantine era";

var myName = "Constantine";

var hits =[];

for (var i = 0 ; i < text.length ; i++)
{
    if ( text[i] ==="C")
    {

        for ( var j = i ; j < (myName.length + i) ; j++)

            {

                hits.push(text[j]);
            }
    }
}

if ( hits.length === 0)

{
    console.log("Your name wasn't found!");

}
else
{
    console.log(hits);
}




/*We mentioned infinite loops in the previous exercise. If you give a while loop a condition that is true
 and you don't build in a way for that condition to possibly become false, the loop will go on forever and
 your program will crash. No good!

To prevent this from happening, you always need a way to ensure the condition between your while parentheses can change.

*/

understand = true;

while(understand){
	console.log("I'm learning while loops!");
	//Change the value of 'understand' here!
	understand = false;
}



//Remember to set your condition outside the loop!
var times = 0

var loop = function(){
	while(times < 3 ){
		//Your code goes here!

		console.log("I'm looping!");
		times ++;
	}
};

loop();




//Remember to make your condition true outside the loop!

var condition = true;

var soloLoop = function(){
  //Your code goes here!

  while (condition){

      console.log ('Looped once!');
      condition = false;
  }
};

soloLoop();


var myCondition = true;

while(myCondition){

    console.log("it is true");

    myCondition = false;

}

myArray = ['1','2','3'];

for (i = 0 ; i < myArray.length ; i++ )
{

    console.log("The index is ", + i + " and the array number is " + myArray[i]);
}


var loopCondition = false;

do {
	console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");
} while (loopCondition);




/*

Dragon Slayer game


Declare some variables */

var slaying = true;

var youHit = Math.floor(Math.random() * 2);

var damageThisRound = Math.floor(Math.random()*5 + 1);

var totalDamage = 0 ;

while ( slaying )
{

    if ( youHit === 1)
    {
        console.log ( "You hit the dragon and you won!!!");
        totalDamage += damageThisRound;

        if (totalDamage >= 4 )
        {
            slaying = false;
            console.log(" You win !!!");

        }
        else
        {
            youHit = Math.floor(Math.random() * 2);
        }

    }

    else
    {
        console.log (" The dragon defeated you!!");

        slaying = false;
    }

}


//console.log(sum(range(1, 10)));

function fac(n)
 {

  if (n == 0)

  {
    return 1;
  }
  else
  {
    return fac(n - 1) * n;
  }

}

console.log(fac(8));



var isEven = function(number)

{
  // Your code goes here!

  if (isNaN(number)===true)
  {

      return("This is not a number");
  }
  else if (isNaN(number)===false)

  {

  if (number % 2 === 0 )
  {

      return true;
  }
  else
  {

      return false;
  }

  }
};


//Objects 



var object1 = {
    team: "AEK",
    players: 11,
    champions: 12,
    cups: 10

};


var object2 = {};

object2.team = "Ferrari";
object2.races = 2500;
object2.champs = 20;

var object3 = {

    team: "PAOK",
    players: 11,
    champions: 12,
    cups: 10




}

console.log(object1.team);
console.log(object2.team);
console.log(object3.team);
