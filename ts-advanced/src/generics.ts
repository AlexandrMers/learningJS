// Джейнерики --->

//****************************part 1******************************************
// const cars: string[] = ["Ford", "Audi"];
// const cars2: Array<string> = ["Ford", "Audi"];
//
// const promise: Promise<number> = new Promise(resolve => {
//    setTimeout(() => {
//        resolve(25);
//    }, 2000)
// });
//
// promise.then(data => {
//     console.log(data);
// });

//****************************part 2******************************************
// function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R { // Таким образом функция в дженерик принимает два входящих типа, эти типы мы указываем на наши параметры, в итоге типы наших параметров станут такими же, как входящие типы. Чтобы четко понимать, что функция может работать исключительно с объектами, мы явно указываем расширение наших входящих типов от типа object;
//     return Object.assign({}, a, b);
// };
//
// const merged = mergeObjects({name: "Alexandr"}, {age: 22});
// const mergedTwo = mergeObjects({model: "Ford", color: "red"}, {id: 13, comment: "very cool"});
// const mergedThree = mergeObjects({name: "string"}, "bbb"); // Выдает ошибку, потому что в типе дженерика мы явно указали наследование типа от объекта.

//****************************part 3******************************************
// interface ILength {
//   length: number;
// }
//
// interface objectInterface<T> {
//   value: T;
//   count: string;
// }
//
// function withCount<T extends ILength>(value: T): objectInterface<T> {
//   return {
//     value,
//     count: `В этом объекте ${value.length} символов`
//   };
// }
//
// console.log(withCount("Hello, typescript"));
// console.log(withCount({ name: "Hahna", length: 25 }));

//****************************part 4******************************************
// function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
//   // Эта функция принимает дженерик в виде двух параметров-типов. Первый тип-параметр расширяется от типа - object так как мы ожидаем объект, второй - это тип-параметр, который расширяется от ключей типа-объекта T. Таким образом для второго параметра функции key - допустимыми значениями будут только ключи объекта, который приходит первым параметром.
//   return obj[key];
// }
//
// const person = {
//   name: "Alexandr",
//   age: 22
// };
//
// console.log(getObjectValue(person, "name"));
// console.log(getObjectValue(person, "age"));
// console.log(getObjectValue(person, "job")); // Здесь ошибка, потому что ключ job отсутствует в объекте, который мы передаем первым параметром.

//****************************part 5******************************************

// class Collection<T extends string | number | boolean> {
//   constructor(private _items: T[]) {}
//
//   add(item: T) {
//     this._items.push(item);
//   }
//
//   remove(item: T) {
//     this._items = this._items.filter(i => i !== item);
//   }
//
//   get items(): T[] {
//     return this._items;
//   }
// }
//
// const any = new Collection<any>([1, "Jax", "Alex", false]);
// any.add(true);
// any.add("Наш строковый элемент");
// any.remove(1);
//
// const strings = new Collection<string>(["string1", "string2", "string3"]);
// strings.add("23");
// strings.remove("string1");
//
// const objects = new Collection([{ a: 1 }, { b: 2 }, { c: 3 }]); // Выдает ошибку, потому что элементы массива должны быть примитивами.
// objects.remove({ b: 2 });

//****************************part 6******************************************

// interface CarInterface {
//   model: string;
//   year: number;
// }
//
// function createAndValidateCar(model: string, year: number): CarInterface {
//   const car: Partial<CarInterface> = {}; // дженерик Partial позволяет сказать typescript, что у него временно отсутствуют какое-либо свойство. На вход принимает дженерик типа требуемого интерфейса.
//
//   if (model.length > 3) {
//     car.model = model;
//   }
//
//   if (year >= 2000) {
//     car.year = year;
//   }
//
//   return car as CarInterface; // Чтобы избежать ошибки возвращаем наш объект, как планировали в типах интерфейса с помощью ключевого слова "as".
// }

//****************************part 7******************************************
// const cars: Readonly<string[]> = ["Ford", "Audi"]; // Утилита ReadOnly позволяет сделать переменную только для чтения, чтобы никто и никак не мог повлиять на нее. Это дженерик, в который передается требуемый нам тип.
//
// const cars2 = cars.slice();
// cars2.push("new Element");
