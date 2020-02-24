import { TestBed } from '@angular/core/testing';

import { DataCompromisosService } from './data-compromisos.service';

describe('DataCompromisosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataCompromisosService = TestBed.get(DataCompromisosService);
    expect(service).toBeTruthy();
  });
});
