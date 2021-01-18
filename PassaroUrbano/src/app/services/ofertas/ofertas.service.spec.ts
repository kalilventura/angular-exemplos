/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OfertasService } from './ofertas.service';

describe('Service: Ofertas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OfertasService]
    });
  });

  it('should ...', inject([OfertasService], (service: OfertasService) => {
    expect(service).toBeTruthy();
  }));
});
