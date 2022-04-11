import { TestBed } from '@angular/core/testing';

import { InfoGuard } from './info.guard';

describe('InfoGuard', () => {
  let guard: InfoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InfoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
