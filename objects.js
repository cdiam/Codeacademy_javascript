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
