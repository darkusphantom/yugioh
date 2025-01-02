import { Component, OnInit } from '@angular/core';
import { YugiohCard } from 'src/app/shared/models/card.model';
import { YugiohService } from '../../services/yugioh.service';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';

@Component({
  selector: 'app-all-cards',
  templateUrl: './all-cards.component.html',
  styleUrls: ['./all-cards.component.scss']
})
export class AllCardsComponent implements OnInit {
  allCards: YugiohCard[] = [];
  offset = 0
  pagesRemaining = 0

  constructor(private yugiohService: YugiohService) { }
  ngOnInit(): void {
    this.yugiohService.getRandomCard(30, this.offset, 'name').subscribe({
      next: (res) => {
        this.allCards = res.data;
        this.pagesRemaining = res.meta?.pages_remaining ?? 0
        console.log(res.meta, this.pagesRemaining)
      },
      error: (err) => {
        console.error(err)
      }
    });
  }

  getMoreCards() {
    this.offset += 30
    if (this.pagesRemaining) {
      this.yugiohService.getRandomCard(30, this.offset, 'name')
        .pipe(debounceTime(300))
        .subscribe({
          next: (res) => {
            this.allCards = [...this.allCards, ...res.data];
          },
          error: (err) => {
            console.error(err)
          }
        });
    }
  }
}
