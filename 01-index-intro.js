console.log('Hello World');
// ES6 we use the variable
// Cannot use the reserved keywords
// Naming should be meaningful
// Cannot start with the number(1name)
// Cannot contain space or '-' and should be Camel Case

let name = 'Brian';
console.log(name);
// let firstName = 'Brian', lastName = 'Blaze';

let firstName = 'Brian';
let lastName = 'Blaze';
console.log(firstName + ' ' + lastName);

// No need to reassign
let interestRate = .6;
interestRate = 1
console.log(interestRate);

// Need to reassign then 'const'
const intRate = .6;
console.log(intRate);

name = 'Blaze';
console.log(name);

//There is other methods to create a variable const and let
const name1 = "Brian"; //constant values no changes to be done in the value
console.log(name1);

if (true) {
    var name2 = "brian2";
    console.log(name2);//var varriable the scope remains in the window object
}


if (true) {
    let name3 = "brian3";
    name3 = "blaze3";
    console.log(name3);
}

//alert(name3);//the scope of the let variable remains in the {} brackets
/**Template Strings--Alternatives for the string concatanation*
*/

let fname = 'Ryan';
let lname = 'D';
let age = 'Guess Ryans Age';

//old way of 
let result = fname + ' ' + lname + ' is ' + age + ' years old ';
console.log(result);
//using backticks for the printing of data
result = `${fname} ${lname} is ${age} years old`;
console.log(result);

