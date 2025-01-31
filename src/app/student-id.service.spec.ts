import { TestBed } from '@angular/core/testing';

import { StudentIDService } from './student-id.service';

describe('StudentIDService', () => {
  let service: StudentIDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentIDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
