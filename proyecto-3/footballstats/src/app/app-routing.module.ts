import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HelpComponent } from './pages/help/help.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { StadisticsComponent} from './pages/stadistics/stadistics.component';
import { PlayersComponent} from './pages/players/players.component';
import { TeamsComponent} from './pages/teams/teams.component';
import {BudgetsComponent} from './pages/budgets/budgets.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { PlayerDetallesComponent } from './pages/player-detalles/player-detalles.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'stadistics',
    component: StadisticsComponent,
  },
  {
    path: 'players',
    component: PlayersComponent,
  },
  {
    path: 'teams',
    component: TeamsComponent,
  },
  {
    path: 'budgets',
    component: BudgetsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'help',
    component: HelpComponent,
  },
  {
    path: 'player-detalles/:idplayers',
    component: PlayerDetallesComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
    providers: [
    
    {provide : LocationStrategy , useClass: HashLocationStrategy}
    
  ],
})
export class AppRoutingModule {}
