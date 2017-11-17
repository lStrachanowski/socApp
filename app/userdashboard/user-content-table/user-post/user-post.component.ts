import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {
  @Input() com;
  addCommentBoolean: boolean = true;
  constructor() { }

  ngOnInit() {

  }

  showForm() {
    this.addCommentBoolean = this.addCommentBoolean ? false : true;
  }

  checkAddButtonState(val){
    console.log(val);
    this.addCommentBoolean = val;
  }
}
