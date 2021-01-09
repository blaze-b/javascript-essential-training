let name = 'Brian';
let college = 'TKMCE';
let DOB = '07-07-1194';
let output = () => {
    console.log(`Mr ${name} is from the college ${college} and the date of birth is ${DOB}`)
};

console.log(output());// Undefined

// Restructuring
let finalOutput = { name, college, DOB, output };
console.log(finalOutput);
finalOutput.output();

let firstName = 'Brian';
let secondName = 'John';
let thirdName = 'Mathew';
let fourthName = 'Anjana';

// Array restructuring
finalOutput = [firstName, secondName, thirdName, fourthName];
console.log(finalOutput);

let test = {
    names: finalOutput,
    printNames: function (option) {
        console.log(option);
        console.log(`Printing names ${this.names}`);
    }
}

test.printNames();