import { Component, OnInit } from '@angular/core';
import {TeamsService} from 'src/app/services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  players: any=[];
  fruits: string[] = ["Banana", "Apple", "Guava", "Strawberry"];
  
  constructor(private playService:TeamsService,favFruit: string) { }

  ngOnInit(): void {
    
    this.playService.getAll().subscribe(data=>{
      this.players=data;
      console.log(data)
  }

  

 

}
