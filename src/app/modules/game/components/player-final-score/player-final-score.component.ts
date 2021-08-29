import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-final-score',
  templateUrl: './player-final-score.component.html',
  styleUrls: ['./player-final-score.component.scss'],
})
export class PlayerFinalScoreComponent {
  @Input() score: number;
}
