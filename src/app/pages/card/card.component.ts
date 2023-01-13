import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { YugiohCard } from 'src/app/Interfaces/card.model';
import { YugiohService } from 'src/app/services/yugioh.service';

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
    private yugioCard: YugiohService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          console.log(params)
          this.cardId = params.get('name');
          if (this.cardId) {
            return this.yugioCard.getCardByName(this.cardId);
          }
          return [];
        })
      )
      .subscribe((res: any) => (this.card = res.data[0]));
  }
}
