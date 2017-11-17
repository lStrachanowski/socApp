import { Component, OnInit } from '@angular/core';
import {UsersService} from '../shared/users.service';
import{ActivatedRoute,Params} from '@angular/router';
@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  userArr:any[]=[];

  constructor(private users: UsersService, private route:ActivatedRoute){
  }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      let userID:number;
      userID = params['id'];
      this.userArr = this.users.fetchUser(userID);
    });
  }
}
