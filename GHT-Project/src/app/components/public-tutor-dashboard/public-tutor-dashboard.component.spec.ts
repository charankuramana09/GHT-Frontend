import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicTutorDashboardComponent } from './public-tutor-dashboard.component';

describe('PublicTutorDashboardComponent', () => {
  let component: PublicTutorDashboardComponent;
  let fixture: ComponentFixture<PublicTutorDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublicTutorDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublicTutorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
