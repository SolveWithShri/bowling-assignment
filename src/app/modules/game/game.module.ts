import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgParticlesModule } from 'ng-particles';

import { GameRoutingModule } from './game-routing.module';
import { GameHomePageComponent } from './components/game-home-page/game-home-page.component';
import { StartGameComponent } from './components/start-game/start-game.component';
import { PlayerDetailComponent } from './components/player-detail/player-detail.component';
import { PlayerScoreboardComponent } from './components/player-scoreboard/player-scoreboard.component';
import { BowlingFramesComponent } from './components/bowling-frames/bowling-frames.component';
import { BowlingFrameComponent } from './components/bowling-frame/bowling-frame.component';
import { PlayerFinalScoreComponent } from './components/player-final-score/player-final-score.component';
import { BowlingFrameTenthComponent } from './components/bowling-frame-tenth/bowling-frame-tenth.component';
import { FocusSectionDirective } from './directives/focus-section/focus-section.directive';

@NgModule({
  declarations: [
    GameHomePageComponent,
    StartGameComponent,
    PlayerDetailComponent,
    PlayerScoreboardComponent,
    BowlingFramesComponent,
    BowlingFrameComponent,
    PlayerFinalScoreComponent,
    BowlingFrameTenthComponent,
    FocusSectionDirective,
  ],
  imports: [CommonModule, FormsModule, GameRoutingModule, NgParticlesModule],
})
export class GameModule {}
