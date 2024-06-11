import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorParkComponent } from './tutor-park.component';

describe('TutorParkComponent', () => {
  let component: TutorParkComponent;
  let fixture: ComponentFixture<TutorParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutorParkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
