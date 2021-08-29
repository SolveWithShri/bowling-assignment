import { Component } from '@angular/core';

import { GameDetailsService } from '../../services/game-details/game-details.service';

@Component({
  selector: 'app-player-scoreboard',
  templateUrl: './player-scoreboard.component.html',
  styleUrls: ['./player-scoreboard.component.scss']
})
export class PlayerScoreboardComponent {

  constructor(public readonly gameDetailsService: GameDetailsService) { }
}
