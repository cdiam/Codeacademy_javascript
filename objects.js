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
