import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { YugiohService } from '../../services/yugioh.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  searchbar = new FormControl('');
  results: any[] = [];
  filters = { name: true, type: false, attribute: false, archetype: false };
  isOverlayOpen = false;

  constructor(private yugiohService: YugiohService) { }

  ngOnInit(): void {
    this.searchbar.valueChanges
      .pipe(debounceTime(300))
      .subscribe(value => {
        if (value) {
          this.searchCard(value);
        } else {
          this.results = [];
        }
      });
  }

  onSearchCard(card: any) {
    console.log(card);

  }

  openOverlay() {
    this.isOverlayOpen = true;
  }

  closeOverlay() {
    this.isOverlayOpen = false;
  }

  searchCard(query: string) {
    this.yugiohService.getCardByFName(query).subscribe({
      next: res => {
        this.results = res.data;
      },
      error: err => {
        this.results = [{
          name: "Sin resultados",
          card_images: []
        }]
        console.error(err)
      }
    });
  }
}
