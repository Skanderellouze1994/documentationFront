import { TestBed } from '@angular/core/testing';

import { PaylineService } from './payline.service';

describe('PaylineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaylineService = TestBed.get(PaylineService);
    expect(service).toBeTruthy();
  });
});
