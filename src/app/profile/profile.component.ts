import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
=======
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

export class Profile {
  constructor(
    public name: string,
    public age: number,
    public gender: string,
    public weight: number,
    public height: number
  ) {}
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  constructor(private http: HttpClient) {}
  storeProfile: Profile[];
  profile: Profile = {
    name: 'dep',
    age: 10,
    gender: 'male',
    weight: 61,
    height: 6,
  };
  ngOnInit(): void {
    this.postProfiles(this.profile);
    this.getProfiles();
  }
<<<<<<< HEAD

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
=======
  fullName = 'Unknown User';
  age = '0';
  gender = 'Unknown Gender';
  weight = 'Unknown Weight';
  height = 'Unknown Height';
  postProfiles(data) {
    this.http
      .post<Profile[]>('https://calsoftcoding.firebaseio.com/post.json', data)
      .subscribe((Response) => {
        console.log(Response);
      });
  }

  da: Profile;
  getProfiles() {
    return this.http
      .get<Profile[]>('https://calsoftcoding.firebaseio.com/post.json')
      .subscribe((Response) => {
        console.log(Response);
      });
>>>>>>> ec06025d16e7c19eb4496354b95315be907b0592
  }
}
