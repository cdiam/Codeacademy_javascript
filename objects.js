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





var james = {
    // add properties to this object!

    job: "programmer",
    married: false


};

function Person(job, married) {
    this.job = job;
    this.married = married;
}

// create a "gabby" object using the Person constructor!

var gabby = new Person("student", true);



function Person(job, married) {
    this.job = job;
    this.married = married;
    // add a "speak" method to Person!
    this.speak = function(){

        console.log("Hello!");
    }

}

var user = new Person("Codecademy Student",false);
user.speak();


var james = {
    job: "programmer",
    married: false,
    speak: function(greeting) {

        console.log("Hello, I am feeling " + greeting);

    }
};

james.speak("great");
james.speak("just okay");



var james = {
job: " programmer",
married: false,
sayJob: function() {
    // complete this method
    console.log("Hi, I work as a " + this.job);
}
};

// james' first job
james.sayJob();
// change james' job to "super programmer" here
james.job="super programmer";

// james' second job
james.sayJob();


var james = {
    job: "programmer",
    married: false
};

// set to the first property name of "james"
var aProperty = "job";

// print the value of the first property of "james"
// using the variable "aProperty"
console.log(james[aProperty]);


/*Say we have a variable thing and we don't know what type thing is.
We can call typeof thing to figure this out.
Generally, the most useful types are "number," "string," "function," and of course, "object." */

// complete these definitions so that they will have
// the appropriate types
var anObj = { job: "I'm an object!" };
var aNumber = 42;
var aString = "I'm a string!";

console.log( typeof anObj  ); // should print "object"
console.log( typeof aNumber ); // should print "number"
console.log( typeof aString ); // should print "string"



/*You wouldn't know it, but every object in JavaScript comes with some baggage (stay tuned for more on this!).
Part of this baggage includes a method called hasOwnProperty. This lets us know if an object has a particular property.

We show how to use hasOwnProperty in the last two lines.
It returns true or false, based on whether an object has a certain property. */

var myObj = {
    // finish myObj
    name: "Constantine",

};

console.log( myObj.hasOwnProperty('name') ); // should print true
console.log( myObj.hasOwnProperty('nickname') ); // should print false


var suitcase = {
    shirt: "Hawaiian"
};

//console.log(suitcase.shorts);

if (suitcase.hasOwnProperty('shorts') === true){

    console.log(suitcase.shorts);

}
else
{
    suitcase["shorts"] = "jean";

    console.log(suitcase.shorts);

}

//Remember the "property" bit can be any placeholder name you like.

var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

for (var property in nyc){

    console.log(property);
}


var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

// write a for-in loop to print the value of nyc's properties

for(var x in nyc){

    console.log(nyc[x]);
}


function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 35);

// make your own class here

function Circle(radius){

    this.radius = radius;


}


function Person(name,age) {
  this.name = name;
  this.age = age;
}
// a function that prints the name of any given person
var printPersonName = function (p) {
  console.log(p.name);
};

var bob = new Person("Bob Smith", 30);
printPersonName(bob);

// make a person called me with your name and age
// then use printPersonName to print your name
var me = new Person("Constantine", 41);
printPersonName(me);


// Instead of using buddy.bark to add the bark method to just the buddy object, we use Dog.prototype.bark.

function Dog (breed) {
  this.breed = breed;
};

// here we make buddy and teach him how to bark
var buddy = new Dog("golden Retriever");
Dog.prototype.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
/// this time it works!
snoopy.bark();


function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
}

// let's make some cats!
var cheshire = new Cat("Cheshire Cat", "British Shorthair");
var gary = new Cat("Gary", "Domestic Shorthair");

// add a method "meow" to the Cat class that will allow
// all cats to print "Meow!" to the console

Cat.prototype.meow = function(){

    console.log("Meow!");
};

// add code here to make the cats meow!
cheshire.meow();
gary.meow();



// create your Animal class here
function Animal(name,numLegs){

    this.name = name;
    this.numLegs = numLegs;
}

// create the sayName method for Animal

Animal.prototype.sayName = function(){

    console.log("Hi my name is " + this.name);
}




// provided code to test above constructor and method
var penguin = new Animal("Captain Cook", 2);
penguin.sayName();






function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};


// create a Penguin constructor here
function Penguin(name, numLegs){

    this.name = name ;
    this.numLegs = numLegs;
}


// create a sayName method for Penguins here
Penguin.prototype.sayName = function(){

    console.log("Hi my name is " + this.name);
};


// our test code
var theCaptain = new Penguin("Captain Cook", 2);
theCaptain.sayName();





// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin(name){

    this.name = name;
    this.numLegs = 2;
}

// set its prototype to be a new instance of Animal
Penguin.prototype = new Animal();

var penguin = new Penguin("Constantine")
penguin.sayName();



function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

// create your Emperor class here and make it inherit from Penguin

function Emperor(name){

    this.name = name;
}

/*Similar to what we did in the previous exercise, make Emperor inherit

from Penguin by setting the prototype of Emperor to be Penguin.
*/

Emperor.prototype = new Penguin();


// create an "emperor" object and print the number of legs it has

var emperor = new Emperor("Constantine");
console.log(emperor.numLegs);


// original classes
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.isAlive = true;
}
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}
function Emperor(name) {
    this.name = name;
    this.saying = "Waddle waddle";
}

// set up the prototype chain
Penguin.prototype = new Animal();
Emperor.prototype = new Penguin();

var myEmperor = new Emperor("Jules");

console.log(myEmperor.saying  ); // should print "Waddle waddle"
console.log(myEmperor.numLegs  ); // should print 2
console.log( myEmperor.isAlive ); // should print true

/*In JavaScript all properties of an object are automatically public.
Public means that they can be accessed outside the class.
Think of these properties as the information a class is willing to share.

Look at the Person class. It has 3 public properties:
firstName,
lastName,
and age.
On lines 8 and 9, we access the firstName and lastName properties of john and assign them to myFirst and myLast.

Notice that we are free to access the firstName and lastName properties, which is what we mean when we say they are public.
*/

function Person(first,last,age) {
   this.firstName = first;
   this.lastName = last;
   this.age = age;
}

var john = new Person('John','Smith',30);
var myFirst = john.firstName;
var myLast = john.lastName;
//declare variable myAge set to the age of the john object.
var myAge = john.age;


// PRIVATE VARIABLES in classes
/*he Person class has been modified to have a private variable called bankBalance.
Notice that it looks just like a normal variable, but it is defined inside the constructor
for Person without using this, but instead using var. This makes bankBalance a private variable. */

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;

   this.getBalance = function() {
      // your code should return the bankBalance
      return bankBalance;

   };
}

var john = new Person('John','Smith',30);
console.log(john.bankBalance);

// create a new variable myBalance that calls getBalance()
var myBalance = john.getBalance();
console.log(myBalance);

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;

   var returnBalance = function() {
      return bankBalance;
   };

   // create the new function here

   this.askTeller = function(){

        return returnBalance;
   };
}

var john = new Person('John','Smith',30);
console.log(john.returnBalance);
var myBalanceMethod = john.askTeller();
var myBalance = myBalanceMethod();
console.log(myBalance);



function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;

   this.askTeller = function(pass) {
     if (pass == 1234) return bankBalance;
     else return "Wrong password.";
   };
}

var john = new Person('John','Smith',30);
/* the variable myBalance should access askTeller()
   with a password as an argument  */
var myBalance = john.askTeller(1234);



var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages

for (var key in languages){

    if ( typeof languages[key] === "string" ){

        console.log(languages[key]);
    }

}

function Dog (breed) {
    this.breed = breed;
};

// add the sayHello method to the Dog class
// so all dogs now can say hello
Dog.prototype.sayHello = function(){

    console.log("Hello this is a " + this.breed + " dog");
};

var yourDog = new Dog("golden retriever");
yourDog.sayHello();

var myDog = new Dog("dachshund");
myDog.sayHello();

// what is this "Object.prototype" anyway...?
var prototypeType = typeof Object.prototype;
console.log(prototypeType);

// now let's examine it!
var hasOwn = Object.prototype.hasOwnProperty("hasOwnProperty");
console.log(hasOwn);


//Grades exposed

function StudentReport() {
    this.grade1 = 4;
    this.grade2 = 2;
    this.grade3 = 1;
    this.getGPA = function() {
        return (this.grade1 + this.grade2 + this.grade3) / 3;
    };
}

var myStudentReport = new StudentReport();

for(var x in myStudentReport) {
    if(typeof myStudentReport[x] !== "function") {
        console.log("Muahaha! " + myStudentReport[x]);
    }
}

console.log("Your overall GPA is " + myStudentReport.getGPA());


//Grades are not exposed


function StudentReport() {
    var grade1 = 4;
    var grade2 = 2;
    var grade3 = 1;
    this.getGPA = function() {
        return (grade1 + grade2 + grade3) / 3;
    };
}

var myStudentReport = new StudentReport();

for(var x in myStudentReport) {
    if(typeof myStudentReport[x] !== "function") {
        console.log("Muahaha! " + myStudentReport[x]);
    }
}

console.log("Your overall GPA is " + myStudentReport.getGPA());



var cashRegister = {
    total: 0,
//insert the add method here
    add: function(itemCost){

        this.total += itemCost;

    },


    scan: function (item) {
        switch (item) {
        case "eggs":
            this.add(0.98);
            break;

        case "milk":
            this.add(1.23);
            break;

        //Add other 2 items here
        case "magazine":
            this.add(4.99);
            break;

        case "chocolate":
            this.add(0.45);
            break;

        }
        return true;
    }
};

//Scan 2 eggs and 3 magazines

cashRegister.scan("eggs");
cashRegister.scan("eggs");
cashRegister.scan("magazine");
cashRegister.scan("magazine");
cashRegister.scan("magazine");


//Show the total bill
console.log('Your bill is '+cashRegister.total);



var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    },
    scan: function(item,quantity) {
        switch (item) {
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
    }
};

// scan each item 4 times
cashRegister.scan("eggs",4);
cashRegister.scan("milk",4);
cashRegister.scan("magazine",4);
cashRegister.scan("chocolate",4);

//Show the total bill
console.log('Your bill is '+cashRegister.total);
