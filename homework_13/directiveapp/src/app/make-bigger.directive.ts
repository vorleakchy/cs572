import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[makeBigger]'
})
export class MakeBiggerDirective {

  constructor(private element: ElementRef, private renderer2: Renderer2) { }

  @HostListener('dblclick') increaseFontSize() {
    const fontSize = this.getCurrentFontSize() + 2 + 'px';
    this.renderer2.setStyle(this.element.nativeElement, 'font-size', fontSize);
  }

  private getCurrentFontSize() {
    return parseFloat(window.getComputedStyle(this.element.nativeElement, null).getPropertyValue('font-size'));
  }
}
