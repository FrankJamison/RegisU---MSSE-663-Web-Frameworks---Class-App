import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { HeroesService } from './hero.service';

describe('HeroService', () => {
  let service: HeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(HeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
