import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BowlingFramesComponent } from './bowling-frames.component';

describe('BowlingFramesComponent', () => {
  let component: BowlingFramesComponent;
  let fixture: ComponentFixture<BowlingFramesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BowlingFramesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BowlingFramesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
