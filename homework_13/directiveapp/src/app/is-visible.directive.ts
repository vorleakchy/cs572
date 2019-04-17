import { Directive, ElementRef, Renderer2, Input, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[isVisible]'
})
export class IsVisibleDirective implements OnChanges {
  @Input('isVisible') visible: boolean; 

  constructor(private element: ElementRef, private renderer2: Renderer2) { }

  ngOnInit() {
    this.setVisibility();
  }

  ngOnChanges() {
    this.setVisibility();
  }

  private setVisibility() {
    const visibility: string = this.visible === true ? 'none' : 'block';
    this.renderer2.setStyle(this.element.nativeElement, 'display', visibility);
  }
}
