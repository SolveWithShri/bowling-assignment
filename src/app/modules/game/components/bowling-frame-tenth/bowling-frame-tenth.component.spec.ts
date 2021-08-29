import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BowlingFrameTenthComponent } from './bowling-frame-tenth.component';

describe('BowlingFrameTenthComponent', () => {
  let component: BowlingFrameTenthComponent;
  let fixture: ComponentFixture<BowlingFrameTenthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BowlingFrameTenthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BowlingFrameTenthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
