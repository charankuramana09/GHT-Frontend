import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrangeATutorComponent } from './arrange-a-tutor.component';

describe('ArrangeATutorComponent', () => {
  let component: ArrangeATutorComponent;
  let fixture: ComponentFixture<ArrangeATutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArrangeATutorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrangeATutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
