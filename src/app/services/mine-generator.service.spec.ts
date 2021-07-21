import { TestBed } from '@angular/core/testing';

import { MineGeneratorService } from './mine-generator.service';

describe('MineGeneratorService', () => {
  let service: MineGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MineGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
