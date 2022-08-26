import { Component, OnInit } from '@angular/core';
import {PlayersService} from 'src/app/services/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})

export class PlayersComponent implements OnInit {

  players: any=[];
  displayedColumns: string[] = ["idplayers","firsts_name","last_name"];
  dataSource = [];

  constructor(private playService:PlayersService) {

   }

  ngOnInit(): void {
    this.playService.getAll().subscribe(data=>{
      this.dataSource = data as any
      console.log(this.dataSource)
    })
  }

}
