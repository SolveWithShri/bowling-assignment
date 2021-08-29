import { TestBed } from '@angular/core/testing';

import { MinPlayersExistsGuard } from './min-players-exists.guard';

describe('MinPlayersExistsGuard', () => {
  let guard: MinPlayersExistsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MinPlayersExistsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
