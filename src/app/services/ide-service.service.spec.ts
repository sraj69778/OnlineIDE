import { TestBed } from '@angular/core/testing';

import { IdeServiceService } from './ide-service.service';

describe('IdeServiceService', () => {
  let service: IdeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
