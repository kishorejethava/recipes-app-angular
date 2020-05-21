import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
    public hide: boolean = true; // Password hiding
  
    constructor(private fb: FormBuilder) { }
  
    public ngOnInit(): void {
      this.loginForm = this.fb.group({
        email: [null, [Validators.required]],
        password: [null, [Validators.required]],
      });
    }
  
    public onLogin(): void {
      this.markAsDirty(this.loginForm);
    }
  
    private markAsDirty(group: FormGroup): void {
      group.markAsDirty();
      // tslint:disable-next-line:forin
      for (const i in group.controls) {
        group.controls[i].markAsDirty();
      }
    }
  }
