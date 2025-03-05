import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';  // Import HelloComponent
import { BrowserModule } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent, HelloComponent, BrowserModule],  // Correct: Import both AppComponent and HelloComponent
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();  // Verify if the app component is created successfully
  });

  it("should have the 'unit-testing' title", () => {
    expect(component.title).toEqual('unit-testing');  // Check if the title is set correctly
  });

  it('should render title', () => {
    fixture.detectChanges();  // Trigger change detection
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('unit-testing app is running!');
  });
});
