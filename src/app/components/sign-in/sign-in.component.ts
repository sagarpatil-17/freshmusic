import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signIn: any = FormGroup;
  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.signIn = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })

    // this.usersSer.getData().subscribe((data: any) => {
    //   this.users = data;
    // })
  }

  email: any;
  password: any;
  localemail: any;
  localpass: any;

  loginBtn(data: any) {

    this.email = data.email;
    this.password = data.password;
    this.localemail = localStorage.getItem('email')
    this.localpass = localStorage.getItem('password')
    if (this.email == this.localemail && this.password == this.localpass) {
      localStorage.setItem("isLoggedIn", "true");
      this.router.navigate([''])
    } else {
      // localStorage.clear();
      alert('Invalid details')
      this.signIn.reset();
    }

  }

  goToRegister() {
    this.router.navigate(['signup']);
  }

}
