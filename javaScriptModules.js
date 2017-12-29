//My class for Modules in javaScript


//create an object named Airplane
let Airplane = {};

//add a property to the Airplane object named myAirplane and set it equal to "StarJet".
Airplane.myAirplane = "StarJet";

//export the module
module.exports = Airplane;


//import the file
const Airplane = require('./1-airplane.js');

//Create the function
function displayAirplane(){
  
  console.log(Airplane.myAirplane);

 
}

displayAirplane();

//new method for exporting the module in ES6

