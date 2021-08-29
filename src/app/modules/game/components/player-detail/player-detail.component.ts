import { Component, Input } from '@angular/core';

import { PlayerBowlingDetails } from '../../models/player-bowling-score.model';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent {
  @Input() player: PlayerBowlingDetails;
}
