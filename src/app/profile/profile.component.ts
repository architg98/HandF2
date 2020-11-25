import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fullName = 'Virat Kohli';
  username = 'viratkohli';
  emailAddress = 'virat.kohli@bcci.com';
  age = 32;
  gender = 'Male';
  weight = '137';
  height = '1.75';
  editPressed = false;

  funEditPressed() {
    this.editPressed = true;
    console.log(this.editPressed);
  }

  submitPressed() {
    this.editPressed = false;
  }
}
