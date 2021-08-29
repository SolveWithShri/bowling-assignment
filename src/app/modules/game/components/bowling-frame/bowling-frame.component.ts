import { Component, Input } from '@angular/core';

import { BowlingRoll } from '../../enums/bowling-roll.enum';
import { BowlingFrame } from '../../models/bowling-frame.model';
import { GameDetailsService } from '../../services/game-details/game-details.service';

@Component({
  selector: 'app-bowling-frame',
  templateUrl: './bowling-frame.component.html',
  styleUrls: ['./bowling-frame.component.scss']
})
export class BowlingFrameComponent {
  @Input() frame: BowlingFrame;
  @Input() activeFrame: boolean;

  readonly bowlingRoll: typeof BowlingRoll = BowlingRoll;

  constructor(public readonly gameDetailsService: GameDetailsService) { }
}
