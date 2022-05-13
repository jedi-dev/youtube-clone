import {Component, HostListener, OnInit} from '@angular/core';
import {SidebarService} from '../../../../services/sidebar.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    this.menuApps = false
    this.menuSettings = false
    this.voiceSearch = false
    event.stopPropagation()
  }

  menuApps: boolean = false
  menuSettings: boolean = false
  voiceSearch: boolean = false

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void { }

  showMenuApps(event: MouseEvent): void {
    this.menuApps = !this.menuApps
    this.menuSettings = false
    event.stopPropagation()
  }

  showMenuSettings(event: MouseEvent): void {
    this.menuSettings = !this.menuSettings
    this.menuApps = false
    event.stopPropagation()
  }

  showSidebarMin(): void {
    this.sidebarService.showSidebarMin()
  }

  showVoiceSearch(event: MouseEvent): void {
    this.voiceSearch = !this.voiceSearch
    this.menuApps = false
    this.menuSettings = false
    event.stopPropagation()
  }
}
