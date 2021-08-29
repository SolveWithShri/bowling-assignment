import { Component, Input } from '@angular/core';

import { BowlingFrame } from '../../models/bowling-frame.model';
import { GameDetailsService } from '../../services/game-details/game-details.service';

@Component({
  selector: 'app-bowling-frames',
  templateUrl: './bowling-frames.component.html',
  styleUrls: ['./bowling-frames.component.scss']
})
export class BowlingFramesComponent {
  @Input() frames: BowlingFrame[];
  @Input() activeFrames: boolean;

  constructor(public readonly gameDetailsService: GameDetailsService) { }
}
