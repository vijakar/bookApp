import { TestBed } from '@angular/core/testing';

import { BooksAppService } from './books-app.service';

describe('BooksAppService', () => {
  let service: BooksAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
