

for (var i = 0; i < 6; i = i + 1) {
  console.log("Printing out i = " + i);
}


for (var x = 0; x < 5; x = x + 1) {
  for (var y = 0; y < 3; y = y + 1) {
    console.log(x + "," + y);
  }
}


/*
 * Programming Quiz: Changing the Loop (4-4)
 */

// rewrite the while loop as a for loop
var x = 9;
while (x >= 1) {
    console.log("hello " + x);
    x = x - 1;
}


for (var x=9 ; x>=1 ; x--){

    console.log("hello " + x);

}



/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 */


function laugh(num){

    var output = "";
    for (var i = 1 ; i <= num ; i++){

        output = output + "ha";
    }
    return output + "!";
}

console.log(laugh(4));



/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.

function buildTriangle(length) {
    var triangle = "";
    for (var i = 1; i <= length; i++) {
        triangle += makeLine(i);
    }
    return triangle;
}


// test your code by uncommenting the following line
console.log(buildTriangle(10));



var laugh = function(laugh){

        var output = "";
    for( var i = 1 ; i <= laugh ; i++){

        output = output + "ha";
    }
    return output + "!";
}

console.log(laugh(10));



/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 */

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

// your code goes here

rainbow.splice(2,1,"Yellow","Green","Purple");

console.log(rainbow);




/*
 * Programming Quiz: Quidditch Cup (6-5)
 */

// your code goes here

function hasEnoughPlayers(team){

    if (team.length >= 7){

        return true;
    }else

        {
            return false;
        }
    }



var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));

var turnMeIntoAString = ["U", "d", "a", "c", "i", "t", "y"];

console.log(turnMeIntoAString.join(''));


words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});




/*
 * Programming Quiz: Another Type of Loop (6-8)
 *
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - you must use an `if` statement to verify code is divisible by 3
 *  - you can use `console.log` to verify the `test` variable when you're finished looping
 */

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

// Write your code here

test.forEach(function(number){

    if ( (number % 3 ) === 0 ){

        console.log("The divisible number is " + number + " and the addition is =");

        number += 100 ;

        console.log(number);
    }
});
