import { Injectable } from '@angular/core';

import { BowlingRoll } from '../../enums/bowling-roll.enum';
import { BowlingFrame } from '../../models/bowling-frame.model';
import { HelperUtilsService } from '../helper-utils/helper-utils.service';

@Injectable({
  providedIn: 'root',
})
export class ScoreCalculatorService {
  getPinsDown(bowlingRoll: BowlingRoll, firstRollDownPins: number): number {
    switch (bowlingRoll) {
      case BowlingRoll.FIRST:
        return HelperUtilsService.GetFirstRollDownPins();
      case BowlingRoll.SECOND:
        return HelperUtilsService.GetDownPinsInRange(1, 10 - firstRollDownPins);
      case BowlingRoll.THIRD:
        return HelperUtilsService.GetFirstRollDownPins();
    }
  }

  calculateScore(frames: BowlingFrame[], currentFrameIndex: number): void {
    for (let index = 0; index <= currentFrameIndex; index++) {
      const frame = frames[index];
      const previousFrameTotalScore =
        (index > 0 && frames[index - 1].totalScore) || 0;

      // When we are at `currentFrameIndex` and
      // current frame is `open frame` then
      // let's add score right away, no need to wait for next frame
      if (index === currentFrameIndex) {
        const totalScore = frame.firstBallScore + frame.secondBallScore;
        if (totalScore < 10) {
          frame.totalScore = previousFrameTotalScore + totalScore;
        }
      }

      // If score is already calculated for current frame then
      // we can skip calculation,
      // then continue to next frame
      if (frame.totalScore !== null) {
        continue;
      }

      // We will reach here,
      // only if score is not calculated for current frame
      // because cuurent frame was `Strike` or `Spare`
      // And to calculate score of `Strike` or `Spare` we need next frame
      const nextFrameIndex = index + 1;
      if (nextFrameIndex > currentFrameIndex) {
        // If next frame is not present then lets break the loop
        break;
      }
      const nextFrame = frames[nextFrameIndex];

      // If next frame is present and
      // if current frame is `Strike` then lets go in `if` clause
      // else frame is `Spare` lets go in else (if-else)
      if (frame.firstBallScore === 10) {
        // Strike

        if (nextFrame.firstBallScore !== 10) {
          // If current frame is strike
          // and next frame is not strike
          // then add `next frame - 2 rolls` in current frame
          frame.totalScore =
            previousFrameTotalScore +
            frame.firstBallScore +
            nextFrame.firstBallScore +
            nextFrame.secondBallScore;
        } else if (nextFrame.firstBallScore === 10) {
          // If current frame is strike
          // and next frame is also strike
          // then add score of next 2 rolls in current frame score
          // i.e. `next frame - 1st roll` & `next to next frame - 1st roll`

          // But if nextFrame is `9th`, then its a last frame
          // So we will add `last frame - 1st roll` & `last frame - 2nd roll`
          // from nextFrame i.e. last frame
          if (nextFrameIndex === 9) {
            frame.totalScore =
              previousFrameTotalScore +
              frame.firstBallScore +
              nextFrame.firstBallScore +
              nextFrame.secondBallScore;
          }

          // But if nextFrame is not last frame
          // then we need to find `next to next frame`
          // But there might be chance that `next to next frame` is not yet ready
          // if not ready `continue`
          const nextToNextFrameIndex = nextFrameIndex + 1;
          if (nextToNextFrameIndex > currentFrameIndex) {
            continue;
          }
          const nextToNextFrame = frames[nextToNextFrameIndex];

          // If `next to next frame` is present
          // So we will add `next frame - 1st roll` and
          // `next to next frame - 1st roll`
          frame.totalScore =
            previousFrameTotalScore +
            frame.firstBallScore +
            nextFrame.firstBallScore +
            nextToNextFrame.firstBallScore;
        }
      } else if (frame.firstBallScore + frame.secondBallScore === 10) {
        // Spare
        // If current frame is `Spare` then
        // lets add `next frame - first roll` score in current frame
        frame.totalScore =
          previousFrameTotalScore +
          (frame.firstBallScore + frame.secondBallScore) +
          nextFrame.firstBallScore;
      }
    }

    // Tenth frame
    if (currentFrameIndex === 9) {
      const frame = frames[currentFrameIndex];
      const previousFrameTotalScore = frames[currentFrameIndex - 1];
      frame.totalScore =
        previousFrameTotalScore.totalScore +
        frame.firstBallScore +
        frame.secondBallScore +
        frame.thirdBallScore;
    }
  }
}
