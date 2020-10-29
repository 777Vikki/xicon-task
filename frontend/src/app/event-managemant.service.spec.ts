import { TestBed } from '@angular/core/testing';

import { EventManagemantService } from './event-managemant.service';

describe('EventManagemantService', () => {
  let service: EventManagemantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventManagemantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
