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
