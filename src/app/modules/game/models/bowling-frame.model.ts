export interface BowlingFrame {
  firstBallScore: number;
  secondBallScore: number;
  thirdBallScore?: number;

  firstBallDisplay: string;
  secondBallDisplay: string;
  thirdBallDisplay?: string;

  totalScore: number;
}
