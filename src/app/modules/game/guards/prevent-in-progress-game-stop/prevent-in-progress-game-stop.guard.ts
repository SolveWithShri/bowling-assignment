import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { GameHomePageComponent } from '../../components/game-home-page/game-home-page.component';
import { GameDetailsService } from '../../services/game-details/game-details.service';

@Injectable({
  providedIn: 'root'
})
export class PreventInProgressGameStopGuard implements CanDeactivate<GameHomePageComponent> {
  constructor(private readonly gameDetailsService: GameDetailsService) { }

  canDeactivate(component: GameHomePageComponent): boolean {
    if (component.gameDone) {
      this.gameDetailsService.resetGame();
      return true;
    } else {
      if (confirm('Are you sure you want to quit the game ?')) {
        this.gameDetailsService.resetGame();
        return true;
      } else {
        return false;
      }
    }
  }
}
