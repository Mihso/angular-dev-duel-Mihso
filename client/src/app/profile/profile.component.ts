import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
      @Input() userTemp: any;
      @Input() back: string = "";

  @Output() updateUser = new EventEmitter<any>()
  handleUser(){
    this.updateUser.emit();
  }
  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }

  updateProfile(valueEmitted: any) {
    ProfileComponent.bind(this)
    this.userTemp = valueEmitted;
  }

}
