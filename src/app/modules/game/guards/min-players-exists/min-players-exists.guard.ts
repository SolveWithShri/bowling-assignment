import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { GameDetailsService } from '../../services/game-details/game-details.service';

@Injectable({
  providedIn: 'root',
})
export class MinPlayersExistsGuard implements CanActivate {
  constructor(
    public readonly gameDetailsService: GameDetailsService,
    private readonly router: Router
  ) {}

  canActivate(): boolean {
    if (this.gameDetailsService.players.length > 1) {
      return true;
    }

    this.router.navigate(['welcome']);
    return false;
  }
}
