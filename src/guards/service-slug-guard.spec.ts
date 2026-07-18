import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { serviceSlugGuard } from './service-slug-guard';

describe('serviceSlugGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => serviceSlugGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
