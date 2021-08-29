import { BowlingFrame } from './bowling-frame.model';

export interface PlayerBowlingDetails {
    name: string;
    avatar: string;
    frames: BowlingFrame[];
    finalScore: number;
}
