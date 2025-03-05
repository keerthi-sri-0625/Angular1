import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelloComponent } from './hello.component';

describe('HelloComponent', () => {
  let fixture: ComponentFixture<HelloComponent>;
  let component: HelloComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HelloComponent],  // Correct: Import HelloComponent here (not in declarations)
    });
    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();  // Ensure the component is created successfully
  });

  it('should display the message', () => {
    component.message = 'Hello, Angular!';
    fixture.detectChanges();  // Trigger change detection
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Hello, Angular!');
  });

  it('should change the message when the button is clicked', () => {
    component.changeMessage();
    fixture.detectChanges();  // Trigger change detection again after method call
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('You clicked the button!');
  });
});
