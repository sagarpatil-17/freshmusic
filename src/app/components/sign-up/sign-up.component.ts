import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUp: any = FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.signUp = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-z ]*$')]],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      contact: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      password: ['', Validators.required],
    })
  }

  name:any;
  email: any;
  password: any;
  signUpBtn(data: any) {
    console.log(data)
    this.name = data.name
    this.email = data.email
    this.password = data.password
    localStorage.setItem('name', this.name)
    localStorage.setItem('email', this.email)
    localStorage.setItem('password', this.password)
    this.signUp.reset()
    alert('Sign Up Successful')
    this.router.navigate(['signin'])
  }

  goToSignIn() {
    this.router.navigate(['signin']);
  }

}
