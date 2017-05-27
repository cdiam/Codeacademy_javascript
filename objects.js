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




var friends = {

      bill: {
        firstName: "Bill",
        lastName: "Gates",
        number: "(206) 555-5555",
        address: ['palisade park','new york','12122']
    },

         steve: {
        firstName: "Steve",
        lastName: "Jobs",
        number: "(122) 555-5555",
        address: ['182st 515w','new york','11111']
    }
};


function list(friends){

    for(var key in friends)
    {

        console.log(key);

    }

}


var search = function(friends) {
    for (var key in friends) {
        if (friends[key].firstName === "Bill" || friends[key].firstName === "Steve") {
            console.log(friends[key]);
            return friends[key];
        } else {
            console.log("couldn't find them");
        }
    }
};



// help us make snoopy using literal notation
// Remember snoopy is a "beagle" and is 10 years old.
var snoopy = {

    species: "beagle",
    age: 10

}

// help make buddy using constructor notation
// buddy is a "golden retriever" and is 5 years old
var buddy = new Object();

buddy.species = "golden retriever";
buddy.age = 5;


var bicycle = {

    speed: 0,
    gear: 1,
    frame_material : "carbon fiber"

}



// here is bob again, with his usual properties
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;
// this time we have added a method, setAge
bob.setAge = function (newAge){
  bob.age = newAge;
};
// here we set bob's age to 40
bob.setAge(40);
// bob's feeling old.  Use our method to set bob's age to 20
bob.setAge(20);



// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
bob.setAge = setAge;

// make susan here, and first give her an age of 25

var susan = {

    age : 25,
    setAge : setAge


}


// here, update Susan's age to 35 using the method
susan.setAge(35);



var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;
// here is our method to set the height
rectangle.setHeight = function (newHeight) {
  this.height = newHeight;

};
// help by finishing this method
rectangle.setWidth = function (newWidth){
    this.width = newWidth;
}


// here change the width to 8 and height to 6 using our new methods


rectangle.setWidth(8);
rectangle.setHeight(6);



/*
So instead of using the Object constructor which is empty and has no properties, we can make our own constructors which have properties.

To see how this works, look at our Person constructor in lines 1–4. This constructor is used to make Person objects.
Notice it uses the keyword this to define the name and age properties and set them equal to the parameters given.

*/


function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob and susan again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
// help us make george, whose name is "George Washington" and age is 275
var george = new Person("George Washigton", 275);



/*

In a constructor, we don't have to define all the properties using parameters.
Look at our new Person example on line 1, and see how we set the species to be "Homo Sapiens" (line 4).
This means that when we create any Person, their species will be "Homo Sapiens".
In this way, the values associated with name and age are not yet assigned, but species will always have the same value.

*/


function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}

var sally = new Person("Sally Bowles", 39);
var holden = new Person("Holden Caulfield", 16);
console.log("sally's species is " + sally.species + " and she is " + sally.age );
console.log("holden's species is " + holden.species + " and he is " + holden.age);



function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
      return this.height * this.width;
  };
  // put our perimeter function here!
  this.calcPerimeter = function(){
      return (this.height * 2) + (this.width * 2);
  }
}

var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();







function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

// now we can easily make all of our rabbits
var rabbit1 = new Rabbit("fluffy");
var rabbit2 = new Rabbit("happy");
var rabbit3 = new Rabbit("sleepy");

rabbit1.describeMyself();
rabbit2.describeMyself();
rabbit3.describeMyself();






// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
// add the last family member, "timmy", who is 6 years old
family[3] = new Person("timmy", 6);






// Our Person constructor
function Person(name,age){

    this.name = name;
    this.age = age;
}

// Now we can make an array of people

var family = new Array();

family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy", 6);
// loop through our new array

for (var i=0 ; i<4 ; i++){

    console.log(family[i].name);

}



// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
}

var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

// get the difference in age between alice and billy using our function
var diff = ageDifference(alice, billy);



// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
}

var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

// get the difference in age between alice and billy using our function
var diff = ageDifference(alice, billy);


// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
};

// Make a new function, olderAge, to return the age of
// the older of two people

var olderAge = function(person1,person2){

    if (person1.age > person2.age){

        return person1.age;

    }
    else if (person1.age < person2.age){

        return person2.age;
    }
    else {

        return person1.age;
    }

}

// Let's bring back alice and billy to test our new function
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

console.log("The older person is " + olderAge(alice, billy));



var spencer = {
  age: 22,
  country: "United States"
};

// make spencer2 here with constructor notation

var spencer2 = new Object();

spencer2.age = 22;
spencer2.country = "United States";


var snoopy = new Object();
snoopy.species = "beagle";
snoopy.age = 10;

// save Snoopy's age and species into variables
// use dot notation for snoopy's species
var species = snoopy.species;

// use bracket notation for snoopy's age
var age = snoopy["age"];


// 3 lines required to make harry_potter
var harry_potter = new Object();
harry_potter.pages = 350;
harry_potter.author = "J.K. Rowling";

// A custom constructor for book
function Book (pages, author) {
    this.pages = pages;
    this.author = author;
}

// Use our new constructor to make the_hobbit in one line

var the_hobbit = new Book (320, "J.R.R. Tolkien");



function Circle (radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;

    };
    // define a perimeter method here
    this.perimeter = function(){

        return (this.radius * 2 * Math.PI);
    }
};




var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"

}

var contacts = [bob, mary];

console.log(contacts[1].phoneNumber);







var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

// printPerson added here

var printPerson = function(person){

    return (person.firstName + " " + person.lastName);

}

console.log(printPerson(contacts[0]));
console.log(printPerson(contacts[1]));



var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/

function search(lastName){

    var contactsLength = contacts.length;

    for (var i = 0 ; i < contactsLength ; i++) {


        if ( lastName === contacts[i].lastName) {

            printPerson(contacts[i]);
        }
    }

}

search("Jones");



var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/

function search(lastName){

    var contactsLength = contacts.length;

    for (var i = 0 ; i < contactsLength ; i++) {


        if ( lastName === contacts[i].lastName) {

            printPerson(contacts[i]);
        }
    }

}



function add (firstName, lastName, email, phoneNumber){

    contacts.push (
     firstName={
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email
    }
    )

}

add("Me","You","email@email.com","212");
add("C","D","emailDDD@email.com","+1212212");
list();
