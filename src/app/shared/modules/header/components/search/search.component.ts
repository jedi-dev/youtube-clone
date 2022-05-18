import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SearchService} from '../../../../services/search.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  form!: FormGroup
  magnifier: boolean = false


  constructor(
    private fb: FormBuilder,
    private searchService: SearchService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      request: this.fb.control('', Validators.required)
    })
  }

  showMagnifier(data: boolean): void {
    this.magnifier = data
  }

  getSearch(str: string): void {
    this.searchService.getSearch(str)
    this.router.navigate(['search'])
  }

}
