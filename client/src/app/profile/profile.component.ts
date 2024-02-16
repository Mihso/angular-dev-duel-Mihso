import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
      @Input() userTemp: any;
  username: string = "";
  name: string = "";
  location: string ="";
  titles: string="";
  fav_language: string = "";
  total_stars: number = 0;
  highest_stars: number= 0;
  public_repos: number = 0;
  perfect_repos: number= 0;
  followers: number = 0;
  following: number = 0;

  @Output() updateUser = new EventEmitter<any>()
  handleUser(){
    this.updateUser.emit();
  }
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log(this.userTemp);
  }

  updateProfile(valueEmitted: any) {
    ProfileComponent.bind(this)
    this.userTemp = valueEmitted;
  }

}
