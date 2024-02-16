import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.css']
})
export class DuelComponent implements OnInit {
  usernameOne: string = ""
  usernameTwo: string = ""
  error: String = "";
  winnerLeft: boolean = true;
  items: any;
  hide: boolean = true;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  receiveUsernameOne(valueEmitted: string) {
    this.usernameOne = valueEmitted;
  }

  receiveUsernameTwo(valueEmitted: string) {
    this.usernameTwo = valueEmitted;
  }

  scoring(comp: any){
    let score = 0
    score += comp["titles"].length;
    score += comp["followers"];
    score += comp["following"];
    score += comp["total-stars"];
    score += comp["highest-starred"];
    score += comp["public-repos"];
    score += comp["perfect-repos"];

    return score
  }

  async onSubmit() {
    try{
    this.error = "";
    this.items = await this.userService.duelUsers(this.usernameOne, this.usernameTwo);
    this.hide = false;
    if(this.scoring(this.items[0]) >= this.scoring(this.items[1])){
    this.winnerLeft = true;
    }
    else{
    this.winnerLeft = false;
    }
  }
    catch(err){
      this.error = "Error: One of the submitted usernames might be off.";
      this.hide = true;
    }

  }
}
