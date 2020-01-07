// Замыкание - это функция внутри другой функции.
//
// function createCalcFunction(n) {
//     return function() {
//         console.log(1000 * n);
//     }
// }
//
// const calc = createCalcFunction(42);
// console.log(calc());

// ******************** part 2 ******************************

// function createIncrementor(n) {
//    return function(num) {
//        return n + num;
//    }
// }
//
// const addOne = createIncrementor(1);
// const addTen = createIncrementor(10);
//
// console.log(addOne(10));
// console.log(addOne(41));
//
// console.log(addTen(10));
// console.log(addTen(41));


// ***************************** part 3 *********************************

// function urlGenerator(domain) {
//     return function(url) {
//         return `https://${url}.${domain}`;
//     }
// }
//
// const comUrl = urlGenerator('com');
// const ruUrl = urlGenerator('ru');
//
// console.log(comUrl('google'));
// console.log(comUrl('netflix'));
//
// console.log(ruUrl('kremlin'));

// ***************************** Задача *********************************

/*
* Написать свою функцию bind
* Пример работы:
* function logPerson() {
*   console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
* }
* */

function logPerson() {
   console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = {name: 'Михаил', age: 22, job: 'Frontend'};
const person2 = {name: 'Елена', age: 19, job: 'SMM'};

// bind(person1, logPerson);
// bind(person2, logPerson);

function bind(context, fn) {
    return function(...args) {
        fn.apply(context, args);
    }
}

bind(person1, logPerson)();
bind(person2, logPerson)();