import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private alertifyService: AlertifyService,
              private router: Router) { }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.fb.group({
      userName: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]]
      });
  }
 onLogin(){
    console.log(this.loginForm.value);
    const token = this.authService.authUser(this.loginForm.value);
    if(token){
      localStorage.setItem('token', token.userName);
      this.alertifyService.success('Login Successful');
      this.router.navigate(['/']);
    } else {
      this.alertifyService.error('User id or password is wrong');
    }
  }



}
