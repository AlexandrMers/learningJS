// function hello() {
//     console.log('hello', this);
// }
//
//
// const person = {
//     name: "Alexandr",
//     age: 22,
//     sayHello: hello,
//     sayHelloWindow: hello.bind(this),
//     logInfo: function(job, phone) {
//         console.log(`Name is ${this.name}`);
//         console.log(`Age is ${this.age}`);
//         console.log(`Job is ${job}`);
//         console.log(`Phone is ${phone}`);
//     }
// };
//
// const lena = {
//     name: "Elena",
//     age: 23
// };

// метод bind - привязывает контекст к определенной сущности - bind(context, param1, param2, ...) !Сразу не вызывает функцию.
// метод call - привязывает контекст к определенной сущности и сразу вызывает ее.  - call(context, param1, param2, ...) !Вызывает сразу
// метод apply - то же самое, что и метод call, только метод call принимает параметры в виде массива.

/*
person.logInfo.bind(lena, "frontend", "8-999-919-23-23")();
person.logInfo.call(lena, "front", "939193391");
person.logInfo.apply(lena, ["front", "939193391"]);*/


//****************** Комбинирование контекста и прототипов *************************

const array = [1, 2, 3, 4, 5];

// function multBy(number, arr) {
//     return arr.map(item => item * number);
// }

Array.prototype.multBy = function (number) {
    return this.map(item => item * number);
};

console.log(array.multBy(100));