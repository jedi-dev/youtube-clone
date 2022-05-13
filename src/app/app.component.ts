import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {SidebarService} from './shared/services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sidebarMin$!: Observable<boolean>

    constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.sidebarMin$ = this.sidebarService.getSidebarMin()
  }

}
