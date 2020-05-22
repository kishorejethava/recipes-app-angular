import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { RecipeApiService } from '../recipe-api.service';
import { ReqLogin } from './ReqLogin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
    public hide: boolean = true; // Password hiding
  
    constructor(private fb: FormBuilder, private apiService : RecipeApiService, private router : Router) { }
  
    public ngOnInit(): void {
      this.loginForm = this.fb.group({
        email: ["jm1@example.com", [Validators.required]],
        password: ["jay@123", [Validators.required]],
      });
    }
  
    public onLogin(): void {
      // this.markAsDirty(this.loginForm);
      const reqLogin : ReqLogin = { email : this.loginForm.value.email, password : this.loginForm.value.password}
      this.apiService.login(reqLogin).subscribe((resLogin) => {
        console.log(`login response:${resLogin.token}`);
        this.router.navigate(['feed']); 

      }); 
    }
  
    private markAsDirty(group: FormGroup): void {
      group.markAsDirty();
      for (const i in group.controls) {
        group.controls[i].markAsDirty();
      }
    }
  }
