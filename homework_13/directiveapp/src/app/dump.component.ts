import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dump',
  template: `
    <div [isVisible]="contact.showInList">
      {{contact.name | uppercase}}
    </div>
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styles: []
})
export class DumpComponent implements OnInit {
  @Input() contact;  

  constructor() { }

  ngOnInit() {
  }

}
