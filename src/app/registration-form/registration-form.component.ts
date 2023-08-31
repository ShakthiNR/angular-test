import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({});



  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(5)]),
      confirmPassword: new FormControl("", [Validators.required])
    },
      {
        validators: this.MustMatch('password', 'confirmPassword'),
      }
    )
  }

  MustMatch(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password]
      const confirmPasswordControl = formGroup.controls[confirmPassword]
      if (confirmPasswordControl.errors && !confirmPasswordControl.errors['MustMatch']) {
        return;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ MustMatch: true })
      }else{
        confirmPasswordControl.setErrors(null)
      }

    }
  }




  handleSubmit() {
    console.log(this.registerForm)
  }

  handleClearAll() {
    this.registerForm.reset()
  }

}


