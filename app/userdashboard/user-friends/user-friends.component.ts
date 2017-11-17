import { Component, OnInit } from '@angular/core';
import{UsersService} from '../../shared/users.service';
import{ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-user-friends',
  templateUrl: './user-friends.component.html',
  styleUrls: ['./user-friends.component.css']
})
export class UserFriendsComponent implements OnInit {

  friends={};
    constructor(private users: UsersService, private route:ActivatedRoute) { }
    ngOnInit() {
      this.route.params.subscribe((params:Params)=>{
        let userID:number;
        userID = params['id'];
        let fFriends = this.users.fetchUser(userID);
        this.friends = fFriends[0].userFriends;
      });
    }
}
