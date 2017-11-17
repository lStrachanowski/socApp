import { Component, OnInit,Input } from '@angular/core';
import{UsersService} from '../../../shared/users.service';

@Component({
  selector: 'app-friend-item',
  templateUrl: './friend-item.component.html',
  styleUrls: ['./friend-item.component.css']
})
export class FriendItemComponent implements OnInit {

@Input() selected;
friendDetails;
  constructor(private users: UsersService) { }

  ngOnInit() {
    let selectedUser = this.users.fetchUser(this.selected.friendID);
    this.friendDetails = selectedUser[0];
  }

}
