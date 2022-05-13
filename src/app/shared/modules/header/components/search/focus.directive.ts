import {Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2} from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective {
  @Input() magnifier!: boolean
  @Output() showMagnifier: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('focus') onFocus() {
    this.renderer.setStyle(
      this.el.nativeElement.parentElement,
      'border',
      '1px solid #1c62b9'
      )
    this.change()
  }

  @HostListener('blur') onBlur() {
    this.renderer.removeStyle(
      this.el.nativeElement.parentElement,
      'border'
    )
    this.change()
  }

  change(): void {
    this.showMagnifier.emit(!this.magnifier)
  }


}
