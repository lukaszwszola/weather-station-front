import { TestBed } from '@angular/core/testing';

import { MeasuredValueService } from './measured-value.service';

describe('MeasuredValueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeasuredValueService = TestBed.get(MeasuredValueService);
    expect(service).toBeTruthy();
  });
});
