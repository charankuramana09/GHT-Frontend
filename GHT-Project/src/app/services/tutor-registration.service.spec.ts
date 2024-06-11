import { TestBed } from '@angular/core/testing';

import { TutorRegistrationService } from './tutor-registration.service';

describe('TutorRegistrationService', () => {
  let service: TutorRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
