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
