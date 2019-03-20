import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodEditComponent } from './mood-edit.component';

describe('MoodEditComponent', () => {
  let component: MoodEditComponent;
  let fixture: ComponentFixture<MoodEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoodEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
