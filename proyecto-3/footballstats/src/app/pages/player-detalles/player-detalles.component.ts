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

  player: Player = {
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
    const id = params["idplayers"]

    this.PlayerServicio.getPlayersDetails(id).subscribe(respuesta => {
      this.player = respuesta as Player
      console.log()
    })
  }

}
