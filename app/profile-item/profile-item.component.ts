import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.css']
})
export class ProfileItemComponent implements OnInit {

@Input() u;
  constructor() { }

  ngOnInit() {
  }

}
