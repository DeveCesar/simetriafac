import { TestBed } from '@angular/core/testing';

import { ApiFuncionesService } from './api-funciones.service';

describe('ApiFuncionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiFuncionesService = TestBed.get(ApiFuncionesService);
    expect(service).toBeTruthy();
  });
});
