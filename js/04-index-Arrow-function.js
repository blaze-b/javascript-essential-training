/**
 * Arrow function
 */
let greeting = (name) => {
    if (!name)
        throw new Error('Please provide the name');
    let lname = 'Blaze';
    return `${name} ${lname}`;
};

let greetName = `Hi ${greeting('Brian')}`;
// greetName = `Hi ${greeting()}`;
console.log(greetName);


let createBlog = (title, body) => {
    if (!title)
        throw new Error('Please provide the title');
    if (!body)
        throw new Error('Please provide the body');
    return { "title": title, "body": body };
};

console.log(createBlog("Good Morning", "Have a nice day"));


/**
 * Arrow functtions and the this keyword
 */

var sayHi = (hello) => { console.log(hello); };
sayHi('hello');

let nepal = {
    //Add property
    mountains: ['Everest', 'K2', 'Ponmudi'],
    //Add function
    printWithDash: function () {
        console.log(this);//scope of the this object remains outside the timeout function
        setTimeout(function () {
            console.log(this);
            console.log(this.mountains);
        }, 3000);
    }
}

console.log(nepal['mountains']);
console.log(nepal.printWithDash());

let nepal1 = {
    mountains: ['Everest', 'K2', 'Ponmudi'],
    printWithDash: function () {
        console.log(this);//scope of the this object remains outside the timeout function
        setTimeout(() => { console.log(this.mountains.join(' - ')); }, 3000);
    }
}

console.log(nepal1['mountains']);
console.log(nepal1.printWithDash());
