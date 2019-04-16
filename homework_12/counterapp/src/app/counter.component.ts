import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <button (click)="decrease()">-</button>
    {{counterValue}}
    <button (click)="increase()">+</button>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  @Input() counter: number;
  @Output() counterChange = new EventEmitter();
  counterValue: number;

  constructor() {
  }

  increase() {
    this.counterValue ++;
    this.counterChange.emit(this.counterValue);
  }

  decrease() {
    this.counterValue --;
    this.counterChange.emit(this.counterValue);
  }

  ngOnInit() {
    this.counterValue = this.counter;
  }

}
