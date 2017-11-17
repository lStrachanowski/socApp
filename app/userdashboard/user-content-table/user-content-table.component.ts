import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CommentsService } from '../../shared/comments.service';
@Component({
  selector: 'app-user-content-table',
  templateUrl: './user-content-table.component.html',
  styleUrls: ['./user-content-table.component.css']
})
export class UserContentTableComponent implements OnInit {
  userProfilePosts: any[] = [];
  constructor(private comment: CommentsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let userID: number;
      userID = params['id'];
      for (var i = 0; i < this.comment.commentsArr.length; i++) {
        if (+userID === this.comment.commentsArr[i].userId) {
          this.userProfilePosts = this.comment.commentsArr[i].userPosts.postArr;
        }
      }

    });
  }

}
