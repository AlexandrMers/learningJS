// Прототипы.
const person = new Object({
    name: 'Alexandr',
    age: 22,
    greet: () => {
        console.log('Greet!');
    }
});

Object.prototype.sayHello = () => {
  console.log('Hello');
};

const lena = Object.create(person);
lena.name = "Elena";

const str = new String("I am string");