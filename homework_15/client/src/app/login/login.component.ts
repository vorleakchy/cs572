import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.loginForm =  formBuilder.group({
      'email': [''],
      'password': ['']
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    const user = this.loginForm.value;
    console.log(user);
  }
}
