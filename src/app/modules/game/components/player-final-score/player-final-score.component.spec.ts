import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerFinalScoreComponent } from './player-final-score.component';

describe('PlayerFinalScoreComponent', () => {
  let component: PlayerFinalScoreComponent;
  let fixture: ComponentFixture<PlayerFinalScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerFinalScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerFinalScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
