

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
