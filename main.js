// Dynamically Typed
let value = 30;
value = true;
console.log(typeof value);

// correct Hoisting
console.log(greet());
function greet() {
  return "Hello this is hoisting";
}

// incorrect hoisting
// console.log(saySomething());

const saySomething = () => {
  return "Hello this is incorrect hoisting";
};

// function expression

function greetSomeone(name) {
  console.log("Hello " + name);
}

greetSomeone("Aira");

// High Order Function, calling a function inside a function

function birthdayGreet(callback) {
  console.log(callback());
}

birthdayGreet(greet);

// arrow function
const greetHer = () => {
  return "Hello babe";
};
console.log(greetHer());

// getters setters
class Person  {
    constructor(name) {
        this.name = name
    }

    getName() {
        return 'This is ' + this.name
    }
    setName(name) {
        this.name = name
    }
}

const person1 = new Person('jhon')
console.log(person1.getName());
person1.setName('Sebastian')
console.log(person1.getName());