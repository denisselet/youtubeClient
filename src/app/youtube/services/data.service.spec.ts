import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';

describe('Service', () => {
  let myService: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        myService
      ]
    });
    myService = TestBed.inject(DataService);
  });

  it('Get data', () => {
    myService.getData('123').subscribe((action) => {
      console.log(action);
      // expect(action).toEqual();

    });
  });
});
