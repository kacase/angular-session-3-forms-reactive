import { Component } from "@angular/core";
// 2.
// import { FormBuilder, Validators } from "@angular/forms";
import { FormArray } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  profileForm = null;
  // 3.
  // // define profile form as a FormGroup using the FormBuilder
  // // the following object might come in handy
  // this.fb.group({
  //   firstName: [""],
  //   lastName: [""],
  //   address: this.fb.group({
  //     street: [""],
  //     city: [""],
  //     state: [""],
  //     zip: [""]
  //   }),
  //   // 7.
  //   // define aliases as a FormArray which contains one FormControl
  // });

  // Constructor

  constructor() // 2.
  // inject the form builder into the component
  // private fb: FormBuilder
  {}

  onSubmit() {
    alert(JSON.stringify(this.profileForm.value));
  }

  get aliases() {
    // 6.
    return null;
  }

  addAlias() {
    // 7.
    // push a new form control to this.aliases
    // the form control could be this.fb.control("")
  }

  prefillAddress() {
    // 5.
    // Prefill the address using .patchValue()
    // and the following object:
    // {
    //   address: {
    //     street: "Sesame Street",
    //     city: "New York",
    //     zip: "10023",
    //     state: "New York"
    //   }
    // }
  }
}
