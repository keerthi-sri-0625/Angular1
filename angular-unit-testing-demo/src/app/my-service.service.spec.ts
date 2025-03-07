import { TestBed } from '@angular/core/testing';
import { MyService } from './my-service.service';

describe('MyService', () => {
  let service: MyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // Test if the service is created
  });

  it('should return data', () => {
    const result = service.getData();
    expect(result).toBe('Hello, Angular Unit Testing!');
  });
});
