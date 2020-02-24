import { TestBed } from '@angular/core/testing';

import { FormCompromisoService } from './form-compromiso.service';

describe('FormCompromisoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormCompromisoService = TestBed.get(FormCompromisoService);
    expect(service).toBeTruthy();
  });
});
