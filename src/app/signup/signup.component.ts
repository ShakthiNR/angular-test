import { Component } from '@angular/core';
import {NgForm} from "@angular/forms"

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  defaultSelect: string = 'default';

  constructor() {}

  handleSubmit(formData:NgForm){
    console.log(formData)
  }

  handleClear(formData:NgForm){
    formData.reset()
  }
}
