import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { FormArray } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  profileForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: [""],
    address: this.fb.group({
      street: [""],
      city: [""],
      state: [""],
      zip: [""]
    }),
    aliases: this.fb.array([this.fb.control("")])
  });

  // Constructor
  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert(JSON.stringify(this.profileForm.value));
  }

  get aliases() {
    return this.profileForm.get("aliases") as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(""));
  }

  prefillAddress() {
    this.profileForm.patchValue({
      address: {
        street: "Sesame Street",
        city: "New York",
        zip: "10023",
        state: "New York"
      }
    });
  }
}
