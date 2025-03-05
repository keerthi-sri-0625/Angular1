import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  templateUrl: './lifecycle-demo.component.html',
  styleUrls: ['./lifecycle-demo.component.css']
})
export class LifecycleDemoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, OnDestroy {

  message: string = 'Hello, Angular Lifecycle!';
  counter: number = 0;

  // This hook is called when any input property of the component changes
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called', changes);
  }

  // This hook is called once the component is initialized
  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  // This hook is called during every change detection cycle
  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  // This hook is called once the content (ng-content) is projected into the component
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }

  // This hook is called once the view and child views are initialized
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }

  // This hook is called after the content and view are checked during every change detection cycle
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  // This hook is called just before the component is destroyed
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }

  // Method to simulate change detection
  incrementCounter(): void {
    this.counter++;
  }

  // Method to simulate input property change
  changeMessage(): void {
    this.message = 'Updated message';
  }
}
