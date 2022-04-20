import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  hide: boolean = false;

  constructor(private fb: FormBuilder,private _loginService:LoginService) { }

  ngOnInit(): void {
  }
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })
  onLogin() {
    console.log(this.loginForm.value)
    this._loginService.authenticateEmployee(this.loginForm.value);
    
   
  

}

}
