import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodLandingComponent } from './mood-landing.component';

describe('MoodLandingComponent', () => {
  let component: MoodLandingComponent;
  let fixture: ComponentFixture<MoodLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoodLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
