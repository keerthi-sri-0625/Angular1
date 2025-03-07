import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyComponent } from './my-component.component';
import { MyService } from '../my-service.service';
import { of } from 'rxjs';

// Mocking the service
describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;
  let myServiceMock: jasmine.SpyObj<MyService>;

  beforeEach(() => {
    // Create a mock of MyService
    myServiceMock = jasmine.createSpyObj('MyService', ['getData']);
    myServiceMock.getData.and.returnValue('Mocked Data');

    TestBed.configureTestingModule({
      imports: [MyComponent], // Add the standalone component to imports
      providers: [
        { provide: MyService, useValue: myServiceMock } // Use mock service
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger change detection
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display data from the service', () => {
    expect(component.data).toBe('Mocked Data');
  });

});
``
