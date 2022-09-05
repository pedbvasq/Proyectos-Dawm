import { Component, OnInit } from '@angular/core';
import { LigaService } from 'src/app/services/liga.service';

@Component({
  selector: 'app-stadistics',
  templateUrl: './stadistics.component.html',
  styleUrls: ['./stadistics.component.scss']
})

export class StadisticsComponent implements OnInit {
mostrar:string="";
dataLiga :any=[]
dataTeams :any=[]
  constructor(private ligaServi:LigaService) { }

  ngOnInit(): void {
    this.ligaServi.getLiga().subscribe(data=>{
      this.dataLiga=data;
     
    }
      )
    
  }

  seleccion(evento:any){
    
    let id =evento.value
    if (id==1) 
{
    this.mostrar="La liga española"
} 
else
{
  this.mostrar="Premier League"
}
    console.log(this.mostrar)
   
    this.ligaServi.getTeamsId(id).subscribe(data=>
      this.dataTeams=data as any
      
      )
      console.log(this.dataTeams)
 

}


}

