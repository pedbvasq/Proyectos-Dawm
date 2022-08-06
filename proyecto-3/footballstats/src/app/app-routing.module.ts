import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlayersComponent } from './players/players.component';
import { ShieldsComponent } from './shields/shields.component';
import { StastComponent } from './stast/stast.component';
import { StadisticsComponent } from './stadistics/stadistics.component';
import { Component } from '@angular/core';



const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "players", component: PlayersComponent },
  { path: "shields", component: ShieldsComponent },
  { path: "stats", component: StastComponent },
  { path: "stadistics", component: StadisticsComponent },

  { path: "**", redirectTo: "home" }



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
