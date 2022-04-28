import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('focus') onFocus() {
    this.renderer.setStyle(
      this.el.nativeElement.parentElement,
      'border',
      '1px solid #1c62b9'
      )
  }

  @HostListener('blur') onBlur() {
    this.renderer.removeStyle(
      this.el.nativeElement.parentElement,
      'border'
    )
  }

}
