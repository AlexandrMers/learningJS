// Декораторы -

//**************************** part1 ***************************************
// function Logger(constrFn: Function) {
//   console.log(constrFn);
// }
//
// function shouldLog(flag: boolean): any {
//   return flag ? Logger : null;
// }
//
// @shouldLog(false)
// class User {
//   constructor(public name: string, public age: number) {
//     console.log("I am a new user");
//   }
// }

//**************************** part2 ***************************************

// function addShowAbility(constructorFn: Function) {
//   constructorFn.prototype.showHtml = function() {
//     const pre = document.createElement("pre");
//     pre.innerHTML = JSON.stringify(this);
//     document.body.appendChild(pre);
//   };
// }
//
// @addShowAbility
// class User {
//   constructor(public name: string, public age: number, public job: string) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//   }
// }

//**************************** part 3 ***************************************

// interface ComponentDecorator {
//   selector: string;
//   template: string;
// }
//
// function Component(config: ComponentDecorator) {
//   return function<T extends { new (...args: any[]): object }>(Constructor: T) {
//     return class extends Constructor {
//       constructor(...args: any[]) {
//         super(...args);
//
//         const el = document.querySelector(config.selector)!;
//         el.innerHTML = config.template;
//       }
//     };
//   };
// }
//
// function Bind(
//   _: any,
//   _2: any,
//   descriptor: PropertyDescriptor
// ): PropertyDescriptor {
//   const original = descriptor.value;
//
//   return {
//     configurable: true,
//     enumerable: false,
//     get() {
//       return original.bind(this);
//     }
//   };
// }
//
// @Component({
//   selector: "#card",
//   template: `
//     <div class="card">
//       <div class="card-content">
//         <span class="card-title">This is a card title</span>
//       </div>
//     </div>
//   `
// })
// class CardComponent {
//   constructor(public name: string) {}
//
//   @Bind
//   logName(): void {
//     console.log(`Component name: ${this.name}`);
//   }
// }
//
// const card = new CardComponent("my card component");
//
// const btn = document.querySelector("#btn")!;
//
// btn.addEventListener("click", card.logName);

////**************************** part 4 ***************************************

// type ValidatorType = "required" | "email";
//
// interface ValidatorConfigInterface {
//   [prop: string]: {
//     [validateProp: string]: ValidatorType;
//   };
// }
//
// const validators: ValidatorConfigInterface = {};
//
// function Required(target: any, propName: string) {
//   validators[target.constructor.name] = {
//     ...validators[target.constructor.name],
//     [propName]: "required"
//   };
// }
//
// function validate(obj: any): boolean {
//   const objConfig = validators[obj.constructor.name];
//
//   if (!objConfig) {
//     return true;
//   }
//
//   let isValid = true;
//
//   Object.keys(objConfig).forEach(key => {
//     if (objConfig[key] === "required") {
//       isValid = isValid && !!obj[key];
//     }
//   });
//
//   return isValid;
// }
//
// class Form {
//   @Required
//   public email: string | void;
//
//   constructor(email?: string) {
//     this.email = email;
//   }
// }
//
// const form = new Form("sfsf");
//
// if (validate(form)) {
//   console.log("valid: ", form);
// } else {
//   console.log("validation Error");
// }
