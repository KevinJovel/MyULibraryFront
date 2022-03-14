import { TestBed } from '@angular/core/testing';

import { LibraryGuardGuard } from './library-guard.guard';

describe('LibraryGuardGuard', () => {
  let guard: LibraryGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LibraryGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
