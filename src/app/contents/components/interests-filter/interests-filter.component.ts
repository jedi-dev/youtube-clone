import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-interests-filter',
  templateUrl: './interests-filter.component.html',
  styleUrls: ['./interests-filter.component.scss']
})
export class InterestsFilterComponent {
  @Input() sidebarMin: boolean | null | undefined

}
