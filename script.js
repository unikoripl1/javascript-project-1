/*
var firstName = 'John';
var lastName = prompt('Give me your last Name');
console.log(firstName + ' ' + lastName);

var ageJohn = 33;
var ageMark = 55;
var older = ageJohn > ageMark;
console.log(typeof older);
*/
var markMass = 70;
var markHeight = 1.7;
var johnMass = 80;
var johnHeight = 1.8;


var mass;
var height;


//Mark

var BMIM = markMass / (markHeight * markHeight);
console.log(BMIM);

//John
var BMIJ = johnMass / (johnHeight * johnHeight);
console.log(BMIJ);

var markIsBigger = BMIM >= BMIJ;
console.log(markIsBigger);
console.log("Is Mark's BMI is higher than John's? " + markIsBigger);