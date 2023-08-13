import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  @Input() placeholder: string = '';
  @Input() autocompleteOptions: any[] = ['One', 'Two', 'Three'];

  myControl = new FormControl('');

  constructor() {}

  ngOnInit(): void {}
}
