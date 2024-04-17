import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}}</h3>

    <button type="button" class="btn btn-dark" (click)="increaseBy(-1)">-1</button>
    <button type="button" class="btn btn-danger" (click)="resetCounter()">Reset</button>
    <button type="button" class="btn btn-dark" (click)="increaseBy(1)">+1</button>
  `
})

export class CounterComponent {
  public counter: number = 10;

  increaseBy (value: number): void {
    this.counter += value;
  }

  resetCounter():void {
    this.counter = 10;
  }
}
