import { Component, OnInit } from '@angular/core';
import {TeamsService} from 'src/app/services/teams.service';
import { Teams } from 'src/app/interfaz/teams';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  equipos: Teams = {
    decensos:"",
    fechaDeCreacion:"",
    id:0,
    income:0,
    sedes:"hola",
    socios:0,
  };

  teams:any=[];
  mostrar:boolean =false;
  teamsId :any=[]
  constructor(private teamsService:TeamsService) { }

  ngOnInit(): void {
    
  this.teamsService.getAll().subscribe(data =>{
     this.teams=data;
   


  })


  }
  buscarEquipo(evento:any){
    this.mostrar=true;
    let id:string = evento.target.value;
    console.log(evento.target.value)
    this.teamsService.getTeamsDetails(id).subscribe(data =>{
      this.teamsId=data;
      console.log(this.teamsId)
    })
  }
}