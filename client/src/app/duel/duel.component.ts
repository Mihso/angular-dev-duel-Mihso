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
  score0: number = 0;
  score1:number =0;
  error: any;
  tie: boolean = false;
  winnerLeft: boolean = true;
  items: any;
  hide: boolean = true;
  lefter: string = "burlywood";
  righter: string = "burlywood";

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
    score += comp["titles"].length * 1000;
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
    this.lefter = "burlywood";
    this.righter = "burlywood";
    this.hide = true;
    this.error = "";
    this.tie = false;
    this.items = await this.userService.duelUsers(this.usernameOne, this.usernameTwo);
    this.hide = false;
    this.score0 = this.scoring(this.items[0]);
    this.score1 = this.scoring(this.items[1]);

    if(this.score0 > this.score1){
    this.winnerLeft = true;
    this.lefter = "green";
    }
    else if(this.score0 == this.score1){
      this.tie = true;
    }
    else{
    this.winnerLeft = false;
    this.righter = "green";
    }
  }
    catch(e: any){
      this.error = "Error: " + e.error.message;
      this.hide = true;
      throw(e);
    }

  }
}
