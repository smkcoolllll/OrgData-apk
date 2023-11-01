import { TestBed } from '@angular/core/testing';

import { TemplatizationService } from './templatization.service';

describe('TemplatizationService', () => {
  let service: TemplatizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplatizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
