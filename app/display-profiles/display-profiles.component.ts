import { Component, OnInit } from '@angular/core';
import {UsersService} from '../shared/users.service';

@Component({
  selector: 'app-display-profiles',
  templateUrl: './display-profiles.component.html',
  styleUrls: ['./display-profiles.component.css']
})
export class DisplayProfilesComponent implements OnInit {

  userArr:any[]=[];

  constructor(private users: UsersService){
  }

  ngOnInit() {
    this.userArr = this.users.userArray;
  }
}
