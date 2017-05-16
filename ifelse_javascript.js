/* this is a first javascript logic


if/else statements are made even more powerful with comparison operators.

There are two comparisons you might be familiar with:

Less than: <
Greater than: >
You may also recognize these:

Less than or equal to: <=
Greater than or equal to: >=
Comparisons need two things to compare and they will always return a boolean (true or false).

How can we use comparisons and an if/else statement to see if it's time to eat?


There are two more extremely useful comparisons we can make. Often times, we might want to check if two things are equal, or if they are not.

To check if two things equal each other, we can use === (three equals in a row).
To check if two things do not equal each other, we can write !== (exclamation with two equals in a row).
Slow down here, this can be easily confused with creating variables. Variables use one equals sign = to assign a value to a variable. When you're comparing two variables, make sure to use three ===.

How can we utilize === or !== and an if/else statement to write a program to see whether a werewolf will turn into its wolf form this evening?

List of comparison operators:

> Greater than
< Less than
<= Less than or equal to
>= Greater than or equal to
=== Equal to
!== Not equal to




"some word".substring(x, y) where x is where you start chopping and y is where you finish chopping the original string.

*/




var harryPotterFan = true;

if (harryPotterFan) {

 console.log('Mischief managed.');
}
else
  {
    console.log('I lead a muggle\'s life.');
  }


  var moonPhase ='full';

  if (moonPhase ==='full'){

    console.log('Howwwwlll!!');
  }
  else
    {

      console.log('I swear i am not a werewolf...') ;
     }


     var moonPhase = 'solar eclipse';

     if (moonPhase === 'full') {
       console.log('Howwwlll!!');
     }
     else if (moonPhase==='mostly full')
       {
         console.log('Arms and legs are getting hairier');
       }
     else if (moonPhase ==='mostly new')
       {
         console.log('Back on two feet');
       } else{
         console.log('Invalid moon phase');
       }



/*So far, we've been able to translate certain thoughts into JavaScript code, like, "Are these things equal?" with ===, or, "Is one thing greater than another thing?" with >.

In English, sometimes we say "both of these things" or "either one of these things." Let's translate those phrases into JavaScript with some special operators called logical operators.

To say "both must be true," we can use &&.
To say "either can be true," we can use ||.
To say "I want to make sure this is the opposite of what it really is," we can use !.
To say "these should not be equal to each other," we can use !==.
*/

       var moonPhase = 'full';
       var foggyNight= true;

       if (moonPhase === 'full' && foggyNight===true) {
         console.log('Howwwlll!!');
       }
       else if (moonPhase==='mostly full')
         {
           console.log('Arms and legs are getting hairier');
         }
       else if (moonPhase ==='mostly new')
         {
           console.log('Back on two feet');
         } else{
           console.log('Invalid moon phase');
         }



/*Before we move on, let's circle back to else if statements.

Using else if is a great tool for when we have a few different conditions we'd like to consider.

else if is limited however. If we want to write a program with 25 different conditions, like a JavaScript cash register, we'd have to write a lot of code, and it can be difficult to read and understand.

To deal with times when you need many else if conditions, we can turn to a switch statement to write more concise and readable code.

Note: To a computer, a switch statement and an if/else statement are the same, but a switch statement can be easier for other humans to read. Part of being a good developer is writing code that both computers and other humans can read.

switch statements look like this:

*/


         var moonPhase = 'full';


         switch (moonPhase)
             {
           case 'full':
           console.log('Howwwlll!!');
         	break;
           case 'mostly full':
             console.log('Arms and legs are getting hairier');
             break;
           case 'mostly new':
             console.log('Back on two feet');
           break;
           default:
             console.log('Invalid moon phase');
         	break;
         }


         var color = prompt("What's your favorite primary color?","Type your favorite color here");

         switch(color) {
           case 'red':
             console.log("Red's a good color!");
             break;
           case 'blue':
             console.log("That's my favorite color, too!");
             break;
           //Add your case here!
           case 'yellow':
               console.log("This is AEK color");
               break;
           default:
             console.log("I don't think that's a primary color!");
         }


/*

true && true;    // => true
true && false;   // => false
false && true;   // => false
false && false;  // => false


true || true;     // => true
true || false;    // => true
false || true;    // => true
false || false;   // => false


!true;   // => false
!false;  // => true

*/



var user = prompt("Question: What is your name?").toLowerCase();

switch(user) {
    case 'constantine':
        console.log("We have the same name");
        break;
    case 'natalia':
        console.log("You have the same name with my daughter");
        break;
    case 'eleftheria':
        console.log("You have the same name with my wife");
        break;
    default:
        console.log("We dont have a common name");



}


var user = prompt("Question: What is your name?").toLowerCase();

var lastname = "Diamantis";

switch(user) {
    case 'constantine':
        console.log("We have the same name");
        break;
    case 'natalia':
         if ( user === 'natalia' || lastname ==='Diamantis'){

             console.log("amazing name");
         }
         else
         {
        console.log("You have the same name with my daughter");
         }

           if ( user === 'natalia' && lastname ==='Diamantis'){

             console.log("amazing name");
         }
         else
         {
        console.log("You have the same name with my daughter");
         }
        break;
    case 'eleftheria':
        console.log("You have the same name with my wife");
        break;
    default:
        console.log("We dont have a common name");



}


for (var i = 1 ; i <=20 ; i++)

{

    if (( i % 3 === 0 ) && ( i % 5 === 0)) {

        console.log("FizzBuzz");
    }
    else if ( i % 3 === 0){

        console.log("Fizz");
    }
    else if ( i % 5 === 0){

        console.log("Buzz");
    } else {

            console.log(i);

    }
}
