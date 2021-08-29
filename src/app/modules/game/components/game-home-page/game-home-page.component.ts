import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PlayerBowlingDetails } from '../../models/player-bowling-score.model';
import { GameDetailsService } from '../../services/game-details/game-details.service';
import { HelperUtilsService } from '../../services/helper-utils/helper-utils.service';

@Component({
  selector: 'app-game-home-page',
  templateUrl: './game-home-page.component.html',
  styleUrls: ['./game-home-page.component.scss'],
})
export class GameHomePageComponent {
  gameDone: boolean = null;
  gameWinner: PlayerBowlingDetails;

  readonly ngParticlesId = 'ng-particles-id';
  readonly particlesOptions = HelperUtilsService.GetNgParticlesConfigs();

  constructor(
    public readonly gameDetailsService: GameDetailsService,
    private readonly router: Router
  ) {}

  throwBall(): void {
    this.gameDone = this.gameDetailsService.updateRoll();
    if (this.gameDone) {
      this.gameWinner = this.gameDetailsService.getWinner();
    }
  }

  replayGame(): void {
    this.gameDone = null;
    this.gameWinner = null;
    this.gameDetailsService.replayGame();
  }

  goToHome(): void {
    this.router.navigate(['']);
  }
}
