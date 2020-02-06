import { TestBed } from '@angular/core/testing';

import { SensorServicesService } from './sensor-services.service';

describe('SensorServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SensorServicesService = TestBed.get(SensorServicesService);
    expect(service).toBeTruthy();
  });
});
