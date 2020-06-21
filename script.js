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

/*
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

*/
//arrays
/*
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);
 
console.log(names);


names[1] = 'Ben';

names[names.length] = 'Mary';
console.log(names);
console.log(names.length);

var John = ['John','Smith', 1996, 'teacher', false];
John.push('blue','yellow');
John.unshift('Mr.');
John.pop();
John.shift();


console.log(John);
console.log(John.indexOf(23));

var isDesigner = John.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';

console.log(isDesigner);
*/

//tips
/*
function tipCalculator(bill){

    var perc;

    if(bill < 50)
    {
        perc = 0.2;
    }
    else if (bill >= 50 && bill < 200)
    {
        perc = .15;
    }
    else
    {
        perc = 0.1;
    }
    return bill * perc;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

console.log(tips);

var finalValues = [bills[0]+ tips[0],
                    bills[1]+ tips[1],
                    bills[2]+ tips[2]];

console.log(finalValues);
*/
//objects and properties
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1994,
    isMarried: false,
    calcAge: function(){
        this.age = 2020 - this.birthYear;
    }
};

var x = 'birthYear';
john['isMarried'] = true;
console.log(john.isMarried);

john.calcAge();
console.log(john.age);
*/
//BMI objects

var john = {
    name: 'John',
    weight: 61,
    height: 1.69,
    calcBMI: function(){
        this.BMI = this.weight / (this.height * this.height)
    }
    
};
john.calcBMI();
console.log(john.BMI);

var mike = {
    name: 'Mike',
    weight: 63,
    height: 1.69,
    calcBMI: function(){
        this.BMI = this.weight / (this.height * this.height)
    }
    
};
mike.calcBMI();
console.log(mike.BMI);

if(john.BMI>mike.BMI){
    answer = 'John';
}
else if(john.BMI<mike.BMI){
    answer = mike.name + "'s" + ' BMI is higher than ' + john.name + "'s";
}
else{
    answer = 'equal';
}
console.log(answer);