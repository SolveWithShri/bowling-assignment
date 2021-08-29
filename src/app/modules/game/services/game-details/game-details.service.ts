import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { BowlingRoll } from '../../enums/bowling-roll.enum';
import { BowlingFrame } from '../../models/bowling-frame.model';
import { PlayerBowlingDetails } from '../../models/player-bowling-score.model';
import { ScoreCalculatorService } from '../score-calculator/score-calculator.service';

@Injectable({
  providedIn: 'root',
})
export class GameDetailsService {
  players: PlayerBowlingDetails[] = [];
  currentPlayer: number;
  currentFrame: number;
  currentRoll: BowlingRoll;

  private readonly avatarLinks: string[] = [
    'assets/avatars/player-avatar-1.png',
    'assets/avatars/player-avatar-2.jpg',
    'assets/avatars/player-avatar-3.png',
  ];

  constructor(private readonly scoreCalculatorService: ScoreCalculatorService) {
    this.resetCalculationValues();

    if (!environment.production) {
      // this.addPlayer('Amita');
      // this.addPlayer('Shrikant');
      // this.addPlayer('Ravina');
    }
  }

  addPlayer(playerName: string): void {
    const avararLink = this.avatarLinks[this.players.length];
    this.players.push({
      name: playerName,
      avatar: avararLink,
      finalScore: 0,
      frames: this.getDefaultBowlingFrame(),
    });
  }

  replayGame(): void {
    this.resetCalculationValues();
    this.resetPlayersFrames();
  }

  resetGame(): void {
    this.resetCalculationValues();
    this.players = [];
  }

  updateRoll(): boolean {
    const downPins: number = this.scoreCalculatorService.getPinsDown(
      this.currentRoll,
      this.players[this.currentPlayer].frames[this.currentFrame].firstBallScore
    );

    switch (this.currentRoll) {
      case BowlingRoll.FIRST: {
        this.updateRollScore(
          this.currentPlayer,
          this.currentFrame,
          this.currentRoll,
          downPins
        );

        if (this.currentFrame === 9) {
          this.nextRoll();
        } else {
          if (downPins === 10) {
            this.updateDefaultSecondRoll();
            this.resetRoll();
            this.nextPlayer();
          } else {
            this.nextRoll();
          }
        }

        break;
      }
      case BowlingRoll.SECOND: {
        this.updateRollScore(
          this.currentPlayer,
          this.currentFrame,
          this.currentRoll,
          downPins
        );

        const currentPlayerCurrentFrame =
          this.players[this.currentPlayer].frames[this.currentFrame];
        if (
          this.currentFrame === 9 &&
          (currentPlayerCurrentFrame.firstBallScore === 10 ||
            currentPlayerCurrentFrame.firstBallScore +
              currentPlayerCurrentFrame.secondBallScore ===
              10)
        ) {
          this.nextRoll();
        } else {
          this.updateDefaultThirdRoll();
          this.resetRoll();
          this.nextPlayer();
        }

        break;
      }
      case BowlingRoll.THIRD: {
        this.updateRollScore(
          this.currentPlayer,
          this.currentFrame,
          this.currentRoll,
          downPins
        );

        this.resetRoll();
        this.nextPlayer();

        break;
      }
    }

    if (this.currentFrame === 10) {
      this.updatePlayersTotalScore();
      return true;
    }

    return false;
  }

  getWinner(): PlayerBowlingDetails {
    return this.players.reduce((prev, current) => {
      return prev.finalScore > current.finalScore ? prev : current;
    });
  }

  private updatePlayersTotalScore(): void {
    this.players.forEach((player) => {
      player.finalScore = player.frames[9].totalScore;
    });
  }

  private updateDefaultSecondRoll(): void {
    this.players[this.currentPlayer].frames[
      this.currentFrame
    ].secondBallScore = 0;
    this.players[this.currentPlayer].frames[
      this.currentFrame
    ].secondBallDisplay = '';
  }

  private updateDefaultThirdRoll(): void {
    this.players[this.currentPlayer].frames[
      this.currentFrame
    ].thirdBallScore = 0;
    this.players[this.currentPlayer].frames[
      this.currentFrame
    ].thirdBallDisplay = '';
  }

  private nextPlayer(): void {
    this.scoreCalculatorService.calculateScore(
      this.players[this.currentPlayer].frames,
      this.currentFrame
    );

    if (this.players.length === this.currentPlayer + 1) {
      this.resetPlayer();
      this.nextFrame();
    } else {
      this.currentPlayer += 1;
    }
  }

  private resetPlayer(): void {
    this.currentPlayer = 0;
  }

  private nextRoll(): void {
    this.currentRoll = this.currentRoll + 1;
  }

  private resetRoll(): void {
    this.currentRoll = BowlingRoll.FIRST;
  }

  private nextFrame(): void {
    this.currentFrame += 1;
  }

  private updateRollScore(
    playerIndex: number,
    frameIndex: number,
    bowlingRoll: BowlingRoll,
    score: number
  ): void {
    const frame: BowlingFrame = this.players[playerIndex].frames[frameIndex];
    switch (bowlingRoll) {
      case BowlingRoll.FIRST:
        frame.firstBallScore = score;
        frame.firstBallDisplay = this.getFirstRollScore(score);
        break;
      case BowlingRoll.SECOND:
        frame.secondBallScore = score;
        frame.secondBallDisplay = this.getSecondRollScore(
          frame.firstBallScore,
          frame.secondBallScore,
          this.currentFrame
        );
        break;
      case BowlingRoll.THIRD:
        frame.thirdBallScore = score;
        frame.thirdBallDisplay = this.getFirstRollScore(score);
        break;
    }
  }

  private getFirstRollScore(score: number): string {
    if (score === 10) {
      return 'X';
    } else if (score === 0) {
      return '-';
    } else {
      return `${score}`;
    }
  }

  private getSecondRollScore(
    firstBallScore: number,
    secondBallScore: number,
    currentframe: number
  ): string {
    if (currentframe === 9 && secondBallScore === 10) {
      return 'X';
    } else if (secondBallScore === 0) {
      return '-';
    } else if (firstBallScore + secondBallScore === 10) {
      return '/';
    } else {
      return `${secondBallScore}`;
    }
  }

  private resetPlayersFrames(): void {
    this.players.forEach((player) => {
      player.finalScore = 0;
      player.frames = this.getDefaultBowlingFrame();
    });
  }

  private resetCalculationValues(): void {
    this.currentPlayer = 0;
    this.currentFrame = 0;
    this.currentRoll = BowlingRoll.FIRST;
  }

  private getDefaultBowlingFrame(): BowlingFrame[] {
    const bowlingFrames: BowlingFrame[] = [];

    for (let index = 0; index < 10; index++) {
      bowlingFrames.push({
        firstBallScore: null,
        secondBallScore: null,
        totalScore: null,
        firstBallDisplay: '',
        secondBallDisplay: '',
      });
    }

    return bowlingFrames;
  }
}
