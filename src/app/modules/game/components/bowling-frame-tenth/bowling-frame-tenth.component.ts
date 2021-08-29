import { Component } from '@angular/core';

import { GameDetailsService } from '../../services/game-details/game-details.service';
import { BowlingFrameComponent } from '../bowling-frame/bowling-frame.component';

@Component({
  selector: 'app-bowling-frame-tenth',
  templateUrl: './bowling-frame-tenth.component.html',
  styleUrls: ['./bowling-frame-tenth.component.scss']
})
export class BowlingFrameTenthComponent extends BowlingFrameComponent {
  constructor(public readonly gameDetailsService: GameDetailsService) {
    super(gameDetailsService);
  }
}
