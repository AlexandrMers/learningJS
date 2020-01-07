/// <reference path="form-namespace.ts" />

namespace Form {
  class MyForm {
    private _type: FormType = "inline";
    private _state: FormState = "active";

    constructor(public email: string) {}

    getInfo(): FormInfoInterface {
      return {
        type: this._type,
        state: this._state
      };
    }
  }

  const form = new MyForm("v@mail.ru");
  console.log(form.getInfo());
}
