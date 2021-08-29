import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameHomePageComponent } from './components/game-home-page/game-home-page.component';
import { StartGameComponent } from './components/start-game/start-game.component';
import { MinPlayersExistsGuard } from './guards/min-players-exists/min-players-exists.guard';
import { PreventInProgressGameStopGuard } from './guards/prevent-in-progress-game-stop/prevent-in-progress-game-stop.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'start-game'
  },
  {
    path: 'start-game',
    component: StartGameComponent
  },
  {
    path: 'bowling',
    component: GameHomePageComponent,
    canActivate: [MinPlayersExistsGuard],
    canDeactivate: [PreventInProgressGameStopGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
