import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup-comp',
  templateUrl: './signup-comp.component.html',
  styleUrls: ['./signup-comp.component.css'],
})
export class SignupCompComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  error: string = null;

  onCreate(f: NgForm) {
    console.log(f);
    this.authService.signup(f.value.email, f.value.password).subscribe(
      (resData) => {
        console.log(resData);
        this.router.navigate(['/profile']);
      },
      (errorMessage) => {
        console.log(errorMessage);
        this.error = errorMessage;
      }
    );
    f.form.reset();
  }
}
