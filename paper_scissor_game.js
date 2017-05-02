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




var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

function compare(choice1,choice2)
{

    if (choice1 === choice2)
    {

        return "The result is a tie!";
    }
    else if (choice1 === "rock")
    {
        if (choice2 == "scissors")
        {
            return "rock wins";
        }
        else
        {
            return "paper wins";
        }

    }

    else if (choice1 === "paper")
    {
        if (choice2 == "rock")
        {
            return "paper wins";
        }
        else
        {
            return "scissors wins";
        }

    }

    else if (choice1 === "scissors")
    {
        if (choice2 == "rock")
        {
            return "rock wins";
        }
        else
        {
            return "scissors wins";
        }

    }


}

console.log(compare(userChoice,computerChoice));
