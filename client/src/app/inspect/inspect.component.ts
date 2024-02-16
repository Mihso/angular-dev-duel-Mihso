import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-inspect',
  templateUrl: './inspect.component.html',
  styleUrls: ['./inspect.component.css']
})
export class InspectComponent implements OnInit {

  username: string = "";
  tempUser: any;
  hide: boolean = true;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  receiveUsername(valueEmitted: string) {
    this.username = valueEmitted;
  }

  async onSubmit() {
    try{
    this.tempUser = await this.userService.inspectUser(this.username);
    this.hide = false;
    }
    catch(e){
      console.log("The user " + this.username + " was not found.");
      this.hide = true;
    }
  }

}
