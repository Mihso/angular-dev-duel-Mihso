import { Component, ErrorHandler, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-inspect',
  templateUrl: './inspect.component.html',
  styleUrls: ['./inspect.component.css']
})
export class InspectComponent implements OnInit {

  username: string = "";
  tempUser: any;
  error: String = "";
  hide: boolean = true;
  white: string = "white";

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  receiveUsername(valueEmitted: string) {
    this.username = valueEmitted;
  }

  async onSubmit() {
    try{
      this.error = "";
    this.tempUser = await this.userService.inspectUser(this.username);
    this.hide = false;
    }
    catch(e: any){
      if(this.username == ""){
        this.error = "Need to enter a username.";
        throw(e);
      }
      this.error = "Error: " + e.error.message;
      this.hide = true;
    }
  }

}
