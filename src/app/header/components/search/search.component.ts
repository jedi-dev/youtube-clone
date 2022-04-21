import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  magnifier: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  showMagnifier(): void {
    this.magnifier = !this.magnifier
  }

}
