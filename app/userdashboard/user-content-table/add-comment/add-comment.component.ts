import { Component, OnInit, AfterContentChecked,Input,EventEmitter,Output } from '@angular/core';
import { CommentsService } from '../../../shared/comments.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

commentField;
@Input() postNr;
@Output() hideForm= new EventEmitter<boolean>();
userID:number;
  constructor(private comment: CommentsService ,  private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.userID = +params['id'];
    });
  }

  addComment(){
    var time = this.comment.getCommentTime();
    this.comment.pushComment({content:this.commentField,postDate:time, uID:this.userID, pId:this.postNr});
      this.hideForm.emit(true);
  }

}
