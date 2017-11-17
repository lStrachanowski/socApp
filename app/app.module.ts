import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UsersService} from './shared/users.service';
import{CommentsService} from './shared/comments.service';
import { AppComponent } from './app.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserHeaderComponent } from './userdashboard/user-header/user-header.component';
import { UserContentTableComponent } from './userdashboard/user-content-table/user-content-table.component';
import { UserFriendsComponent } from './userdashboard/user-friends/user-friends.component';
import { UserPostComponent } from './userdashboard/user-content-table/user-post/user-post.component';
import { CommentComponent } from './userdashboard/user-content-table/comment/comment.component';
import { AddCommentComponent } from './userdashboard/user-content-table/add-comment/add-comment.component';
import { ProfileItemComponent } from './profile-item/profile-item.component';
import {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';
import { DisplayProfilesComponent } from './display-profiles/display-profiles.component';
import { FriendItemComponent } from './userdashboard/user-friends/friend-item/friend-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes =[
  {path:'', component: DisplayProfilesComponent},
  {path:'users/:id', component: UserdashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserdashboardComponent,
    UserHeaderComponent,
    UserContentTableComponent,
    UserFriendsComponent,
    UserPostComponent,
    CommentComponent,
    AddCommentComponent,
    ProfileItemComponent,
    DisplayProfilesComponent,
    FriendItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UsersService,CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
