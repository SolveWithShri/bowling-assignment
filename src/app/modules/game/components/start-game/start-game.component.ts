import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { GameDetailsService } from '../../services/game-details/game-details.service';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss'],
})
export class StartGameComponent {
  playerName = '';

  readonly minPlayersNameLengthAllowed: number = 2;
  readonly maxPlayersAllowed: number = 3;

  constructor(
    public readonly gameDetailsService: GameDetailsService,
    private readonly router: Router
  ) {}

  addPlayer(): void {
    if (this.playerName.length < this.minPlayersNameLengthAllowed) {
      return;
    }
    this.gameDetailsService.addPlayer(this.playerName);
    this.playerName = '';
  }

  startTheGame(): void {
    if (this.gameDetailsService.players.length < this.minPlayersNameLengthAllowed) {
      return;
    }

    this.router.navigate(['game', 'bowling']);
  }
}
