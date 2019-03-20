import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodAddComponent } from './mood-add.component';

describe('MoodAddComponent', () => {
  let component: MoodAddComponent;
  let fixture: ComponentFixture<MoodAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoodAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
