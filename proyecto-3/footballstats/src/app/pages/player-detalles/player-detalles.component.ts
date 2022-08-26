import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/interfaz/player';
@Component({
  selector: 'app-player-detalles',
  templateUrl: './player-detalles.component.html',
  styleUrls: ['./player-detalles.component.scss']
})
export class PlayerDetallesComponent implements OnInit {

  item: Player = {
    city:"",
    country:"",
   fechaDeCreacion:"",
    id:0,
    state:"",
    valueMarket:0
  };

  constructor(private PlayerServicio: PlayersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    const idplayers = params["idplayers"]

    this.PlayerServicio.getPlayersDetails(idplayers).subscribe(respuesta => {
      this.item = respuesta as Player
    })
  }

}
