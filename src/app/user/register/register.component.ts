import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {
  constructor(private auth: AuthService) {}

  inSubmission= false
  name = new FormControl('', [Validators.required, Validators.minLength(3)])
  email= new FormControl('', [Validators.required, Validators.email])
  age= new FormControl('', [Validators.min(18), Validators.max(120)])
  password= new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)])
  confirm_password= new FormControl('', [Validators.required])
  phoneNumber= new FormControl('', [Validators.required])

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phoneNumber: this.phoneNumber
  });

  async register() {
    console.log('register called')
    this.showAlert = true
    this.inSubmission = true
    this.alertMsg = 'Please wait! your account is being created';
    this.alertColor= "blue"
    const { email, password} = this.registerForm.value
    try {
      this.auth.createUser(this.registerForm.value)
    }
    catch(e) {
      console.log(e)
      this.alertMsg= 'un unexpected error occcured. please try again later'
      this.alertColor= 'red'
      this.inSubmission= false
      return 
    }
    this.alertMsg = 'Success! Your account has been created'
    this.alertColor = 'green'
  }

  showAlert = false;
  alertMsg = 'Please wait! your account is being created';
  alertColor='blue'

}
