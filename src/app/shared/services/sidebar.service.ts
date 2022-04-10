import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebarMin: boolean = false
  onClick:EventEmitter<boolean> = new EventEmitter();

  constructor() { }
  showSidebarMin(): void {
    this.sidebarMin = !this.sidebarMin
    this.onClick.emit(this.sidebarMin);
  }
}
