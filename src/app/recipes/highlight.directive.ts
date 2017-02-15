import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[rbHighlight]'
})
export class HighlightDirective {
  background = 'red';
  @HostListener('mouseenter') changeColorToGreen(): void {
    this.background = 'green';
  }
   @HostListener('mouseleave') changeColorBackToRed(): void {
    this.background = 'red';
  }
  @HostBinding('style.background') get getBackgroundColor() {
    return this.background;
  }
  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background', 'green');
  }

}
