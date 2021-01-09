// Reference types are `Object`, `Array`, `Function`
// Onject
let person = {
    name3: 'Brian',
    age: 30
};
console.log(person);
// Dot notation
person.name3 = 'John';
// Bracket notation
let selectedName = 'name3';
person[selectedName] = 'Mary'

console.log(person);

// Arrays
let selectedColors = ['Red', 'Blue', 'Black'];
console.log(selectedColors);
selectedColors[2] = 'Green';
console.log(selectedColors);
console.log(selectedColors[2]);
console.log(selectedColors.length);


// Function performs a task or calculates the values
// name is the parameter
// Performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
greet('John','Mathew');
greet('Mary', 'Joseph');

function square(number){
    return number*number;
}

let number = square(2);
console.log(number);

function welcome(user, message){
    console.log(`Hello there ${user}, ${message}`);
}
welcome('Ravi','Good morning');
welcome();//undefined showed

function welcome1(user='Mystery Man', message = 'GoodDay'){//default parameter assigned
    console.log(`Hello there ${user}, ${message}`);
}
welcome1();//no args passed and it will show thw default values and the function will not break