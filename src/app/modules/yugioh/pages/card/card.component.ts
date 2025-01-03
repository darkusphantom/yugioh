import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { YugiohCard } from 'src/app/shared/models/card.model';
import { YugiohService } from 'src/app/modules/yugioh/services/yugioh.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  cardId: string | null = null;
  card: YugiohCard = {
    id: 0,
    name: 'None',
    type: 'None',
    frameType: 'None',
    desc: 'None',
    atk: 0,
    def: 0,
    level: 0,
    race: 'None',
    attribute: 'None',
    archetype: 'None',
    card_sets: [],
    card_images: [],
    card_prices: [],
  };

  constructor(
    private route: ActivatedRoute,
    private yugiohCard: YugiohService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.cardId = params.get('name');
          if (this.cardId) {
            return this.yugiohCard.getCardByName(this.cardId);
          }
          return [];
        })
      )
      .subscribe((res) => (this.card = res.data[0]));
  }
}
