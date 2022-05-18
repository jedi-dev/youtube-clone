import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  search$: Observable<string> = this.searchSubject.asObservable();

  constructor() { }

  getSearch(str: string) {
    this.searchSubject.next(str)
  }
}
