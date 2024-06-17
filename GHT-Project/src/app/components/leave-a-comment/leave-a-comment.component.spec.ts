import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveACommentComponent } from './leave-a-comment.component';

describe('LeaveACommentComponent', () => {
  let component: LeaveACommentComponent;
  let fixture: ComponentFixture<LeaveACommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeaveACommentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeaveACommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
