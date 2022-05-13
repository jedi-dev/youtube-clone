import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-interests-filter',
  templateUrl: './interests-filter.component.html',
  styleUrls: ['./interests-filter.component.scss']
})
export class InterestsFilterComponent implements AfterViewInit, AfterViewChecked{
  @Input() sidebarMin: boolean | null | undefined

  position: number = 0
  containerWidth: number = 0

  @ViewChild('container') container?: ElementRef
  @ViewChild('prev') prev?: ElementRef
  @ViewChild('next') next?: ElementRef

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.containerWidth = -(this.container?.nativeElement.clientWidth /
      this.container?.nativeElement.children.length)
  }
  ngAfterViewChecked() {
    if (this.position === 0) {
      this.renderer.setStyle(
        this.prev?.nativeElement,
        'display', 'none')
    } else {
      this.renderer.removeStyle(
        this.prev?.nativeElement,
        'display')
    }
    this.position < this.containerWidth ?
      this.renderer.setStyle(
        this.next?.nativeElement,
        'display', 'none') :
      this.renderer.removeStyle(
        this.next?.nativeElement,
        'display')
  }

  btnPrev(): void {
    this.position = this.position + 50

    this.setPosition()
  }

  btnNext(): void {
    this.position = this.position - 50

    this.setPosition()
  }

  setPosition(): void {
    this.renderer.setStyle(
      this.container?.nativeElement,
      'transform', `translateX(${this.position}px)`)
  }
}
