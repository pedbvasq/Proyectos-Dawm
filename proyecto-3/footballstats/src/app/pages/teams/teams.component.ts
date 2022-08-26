import { Component, OnInit } from '@angular/core';
import {TeamsService} from 'src/app/services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {


  
  constructor(private playService:TeamsService) { }

  ngOnInit(): void {
    
  

  

 

  }
}