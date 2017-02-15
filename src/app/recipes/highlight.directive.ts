import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[rbHighlight]'
})
export class HighlightDirective {
  @Input() defaultBackgroundColor = 'white';
  @Input() highlightColor: string;
  private background: string;
  @HostListener('mouseenter') changeColorToGreen(): void {
    this.background = this.highlightColor;
  }
  @HostListener('mouseleave') changeColorBackToRed(): void {
    this.background = this.defaultBackgroundColor;
  }
  @HostListener('click', ['$event']) onClick(event): void {
    console.log('$event', event.target);
  }
  @HostBinding('style.background') get getBackgroundColor() {
    return this.background;
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background', 'green');
  }
  OnInit() {
    this.background = this.defaultBackgroundColor;
  }
}
