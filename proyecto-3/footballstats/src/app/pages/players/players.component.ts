import { Component, OnInit } from '@angular/core';
import {PlayersService} from 'src/app/services/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})

export class PlayersComponent implements OnInit {

  players: any=[];
  constructor(private playService:PlayersService) {

   }

  ngOnInit(): void {
    this.playService.getPlayers().subscribe(data=>{
      this.players=data;
      console.log(data)
    })
  }

}
