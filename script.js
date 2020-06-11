/*
var firstName = 'John';
var lastName = prompt('Give me your last Name');
console.log(firstName + ' ' + lastName);

var ageJohn = 33;
var ageMark = 55;
var older = ageJohn > ageMark;
console.log(typeof older);
////////////////
// BMI
/////////////////
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

////////////
//if statements
////////////
var firstName = 'John';
var age = 14;

age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice');
var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

var job = 'teacher';
switch (job){
    case 'teacher' :
    console.log(firstName + ' teaches kids how to code');
    break;
    case 'driver':
    console.log(firstName + ' drives');
    break;
    case 'designer':
    console.log(firstName + ' designs beautiful websites');
    break;
    default:
    console.log(firstName + ' does something else');
}
*/
////////////////////
// basketball
//////////////////
/*
var john1 = 100;
var john2 = 100;
var john3 = 100;

var mike1 = 100;
var mike2 = 100;
var mike3 = 100;

var mary1 = 100;
var mary2 = 100;
var mary3 = 100;

var jonas1 = 100;
var jonas2 = 100;
var jonas3 = 100;

var johnAverage = (john1 + john2 + john3) / 3;
console.log(johnAverage);

var mikeAverage = (mike1 + mike2 + mike3) / 3;
console.log(mikeAverage);

var maryAverage = (mary1 + mary2 + mary3) / 3;
console.log(maryAverage);

var jonasAverage = (jonas1 + jonas2 + jonas3) / 3;
console.log(jonasAverage);

if(johnAverage > mikeAverage && johnAverage > maryAverage){
    console.log('john wins the game with ' + johnAverage + ' points.');
} else if(johnAverage === mikeAverage && maryAverage && jonasAverage){
    console.log('DRAW!');
} else if(mikeAverage > johnAverage &&  mikeAverage > maryAverage ){
    console.log('mike wins the game with ' + mikeAverage + ' points.');
} else if(maryAverage > johnAverage && maryAverage > mikeAverage ){
    console.log('mary wins the game with ' + maryAverage + ' points.');
} else {
    console.log('lol');
}
*/
/*
function calculateAge(birthDate){
return 2020 - birthDate;
}

var ageJohn = calculateAge(1996);


function yearsUntilRetirement(year, name){
    var age = calculateAge(year);
    var retirement = 67 - age;
    console.log(name + ' retires in ' + retirement + ' years');
}

yearsUntilRetirement(1996, 'Jan');
*/
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'))











