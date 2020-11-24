import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fullName = 'Unknown User';
  age = '0';
  gender = 'Unknown Gender';
  weight = 'Unknown Weight';
  height = 'Unknown Height';

}
