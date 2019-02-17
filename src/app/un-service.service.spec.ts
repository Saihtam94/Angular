import { TestBed } from '@angular/core/testing';

import { UnServiceService } from './un-service.service';
import { TestScheduler } from 'rxjs/testing';
import polling from 'rx-polling';

describe('UnServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      scheduler = new TestScheduler
  }));

  it('should be created', () => {
    const service: UnServiceService = TestBed.get(UnServiceService);
    expect(service).toBeTruthy();
  });

  it('should poll the messages every interval', () => {
      //scheduler.run
  })
});
