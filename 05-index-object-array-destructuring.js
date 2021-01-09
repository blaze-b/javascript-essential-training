/**
 * Object Destructuring
 */
let thingsToDo = {
    morning: 'Breakfast',
    afternoon: 'Lunch',
    evening: 'Coding',
    night: ['Sleep', 'Brush']
};

console.log(`List of items to do are ${thingsToDo.afternoon}`);
console.log(thingsToDo);

// Syntax for destructure
let { morning, afternoon } = thingsToDo;
console.log(morning);
console.log(afternoon);

/**
 * Using function arguements
 */
let uniStudent = (student) => {
    console.log(`${student.name} is studying in ${student.college}`)
};

uniStudent({
    name: 'Brian',
    college: 'TKMCE'
})

/**
 * Using function arguements by destructuring
 */
let univStudent = (student, age) => {
    let { name, college, DOB } = student;//object destructuring in a function
    console.log(`${name}, ${college}, ${DOB}, ${age}`);
};

univStudent({
    name: 'Tester1',
    college: 'Tester College',
    DOB:'07-07-1994'
},10);


let moutainList = mountain => {
    for (let i = 0; i < mountain.length; i++) {
        console.log(`Mountains = ${mountain[i]}`);
    }
    // Array destructuring
    let [firstMoutain] = mountain;
    console.log(`First mountain is ${firstMoutain}`);
    let [, secondMountain] = mountain;
    console.log(`Second mountain is ${secondMountain}`);
    let[, , thirdMountain] = mountain;
    console.log(`Third mountain is ${thirdMountain}`);
    let[,,,fourthMountain] = mountain;
    setTimeout(() => {
        console.log(`Fourth mountain is ${fourthMountain}`);
    }, 3000);
}
moutainList(['Mt. Everent', 'K2', 'Kilimanjaro', 'Colarado']);