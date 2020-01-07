namespace Form {
  export type FormType = "inline" | "block";
  export type FormState = "active" | "disabled";

  export interface FormInfoInterface {
    type: FormType;
    state: FormState;
  }
}
