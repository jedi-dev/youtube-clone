import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public sidebarMin$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor() { }

  showSidebarMin(): void {
    const data: boolean = !this.sidebarMin$.value
    this.sidebarMin$.next(data)
  }
  getSidebarMin() {
    return this.sidebarMin$.asObservable()
  }
}
