

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


var donuts = ["jelly donut", "chocolate donut", "glazed donut"]
var improvedDonuts = donuts.map(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});


/*
 * Programming Quiz: I Got Bills (6-9)
 *
 * Use the .map() method to take the bills array below and create a second array
 * of numbers called totals. The totals array should contains each amount from the
 * bills array but with a 15% tip added. Log the totals array to the console.
 *
 * For example, the first two entries in the totals array would be:
 *
 * [57.76, 21.99, ... ]
 *
 * Things to note:
 *  - each entry in the totals array must be a number
 *  - each number must have an accuracy of two decimal points
 */

var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

var totals = bills.map(function(bill){
    return Number((bill * 1.15).toFixed(2));
}
);

console.log(totals);



/*
 * Programming Quiz: Nested Numbers (6-10)
 *
 *   - The `numbers` variable is an array of arrays.
 *   - Use a nested `for` loop to cycle through `numbers`.
 *   - Convert each even number to the string "even"
 *   - Convert each odd number to the string "odd"
 */

var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

// your code goes here
for (var i = 0, n = numbers.length; i < n; i++) {
  for (var j = 0, m = numbers[i].length; j < m; j++) {
      numbers[i][j] = numbers[i][j] % 2 === 0 ? "even" : "odd";
  }
console.log(numbers[i]);
}


var user = {
  email: "user@example.com",
  firstName: "first",
  lastName: "last"
};


/*

console.log(user.email) uses dot notation to access the email property of user.
console.log(user["email"]) uses bracket notation to access the email property of user.

*/


var myObj = {
  color: "orange",
  shape: "sphere",
  type: "food",
  eat: function() { return "yummy" }
};

myObj.eat(); // method
myObj.color; // property


/*
 * Programming Quiz: Menu Items (7-2)
 */

// your code goes here

var breakfast = {

                name: "The Lumberjack",
                price: 9.95,
                ingredients: ["eggs","sausage","toast","hashbrowns","pancakes"]

};



/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    // your code goes here
    printAccountSummary: function(){

        return "Welcome!\n Your balance is currently " + savingsAccount.balance +"$ and your interest rate is "+savingsAccount.interestRatePercent + "%."
    }
};

console.log(savingsAccount.printAccountSummary());



/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here

var facebookProfile = {

        name: "Constantine",
        friends: 15,
        messages:["hello", "my name is", "we are here"],
      postMessage: function(message){
facebookProfile.messages.push(message);
},

deleteMessage: function(index){
    facebookProfile.messages.splice(index,1);
},

addFriend: function(){
    this.friends++;
    return console.log(facebookProfile.friends);
},
removeFriend: function(){
    facebookProfile.friends = facebookProfile.friends-1}




};
