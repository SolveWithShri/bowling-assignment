import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BowlingFrameComponent } from './bowling-frame.component';

describe('BowlingFrameComponent', () => {
  let component: BowlingFrameComponent;
  let fixture: ComponentFixture<BowlingFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BowlingFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BowlingFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
