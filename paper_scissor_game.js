var options = ["rock","paper","scissors"];

var randomNumber1 = Math.floor(Math.random() * 3);

var randomNumber2 = Math.floor(Math.random() * 3);


//console.log(randomNumber1);
//console.log(randomNumber2);


var myOption = options[randomNumber1] ;

var chooseOption = options[randomNumber2];


if ( myOption === chooseOption)
{


    console.log ("You got it " + myOption);
}
else

{

    console.log ("Try again as you choose " + myOption + " but the correct was " + chooseOption);
}




var options = ["rock","paper","scissors"];

var randomNumber1 = Math.floor(Math.random() * 3);

var randomNumber2 = Math.floor(Math.random() * 3);


var myOption = options[randomNumber1] ;

var chooseOption = options[randomNumber2];

function game (){

if ( myOption === chooseOption)
{


    return ("You got it " + myOption);
}
else

{

    return ("Try again as you choose " + myOption + " but the correct was " + chooseOption);
}
}
console.log(game());
