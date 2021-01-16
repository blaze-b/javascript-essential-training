/**
 * Spread and rest operators in arrays[]
 */
// Arrays
let arrayOne = ['Mt Eeverest', 'K2', 'Anapurna'];
let arrayTwo = ['Fuji'];
let arrayThree = [...arrayOne, ...arrayTwo];//spres will join two arrays as a single one
console.log(arrayThree);

arrayThree = [arrayOne, arrayTwo];
console.log(arrayThree);

// Objects
let food = {
    breakfast: 'Idli',
    lunch: 'Rice and Curry'
};

let extras = {
    evening: 'burger',
    night: 'dosa sambhar'
};

let finalOutput = {...food, ...extras};//spres will join two arrays as a single object
console.log(finalOutput);

finalOutput = {food,extras};
console.log(finalOutput);