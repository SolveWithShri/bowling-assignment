import { TestBed } from '@angular/core/testing';

import { PreventInProgressGameStopGuard } from './prevent-in-progress-game-stop.guard';

describe('PreventInProgressGameStopGuard', () => {
  let guard: PreventInProgressGameStopGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PreventInProgressGameStopGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
