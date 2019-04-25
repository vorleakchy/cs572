import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.signupForm = formBuilder.group({
      'firstName': ['Vorleak'],
      'lastName': ['Chy'],
      'email': ['vorleak.chy@gmail.com', [], [this.validateEmailNotTaken.bind(this)]],
      'password': ['12345'],
      'confirmPassword': ['12345'],
      'acceptTerm': [true]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    const user = this.signupForm.value;
    return this.userService.create(user)
      .subscribe(data => console.log(data));
  }

  validateEmailNotTaken(control: FormControl): Promise<any> | Observable<any> {
    console.log(control);
    
    const promise = new Promise<any>(
      (resolve, reject) => {
        this.userService.checkEmailNotTaken(control.value)
          .subscribe((res: any) => {
            const result = res.emailNotTaken ? null : {emailTaken: true};
            resolve(result);
          });
      }
    );

    return promise;
  }

}
