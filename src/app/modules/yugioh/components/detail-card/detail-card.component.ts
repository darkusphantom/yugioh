import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { YugiohCard } from 'src/app/shared/models/card.model';

@Component({
  selector: 'detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss'],
})
export class DetailCardComponent implements OnInit {
  @Input() cardDetail: YugiohCard = {
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
  @Input() showCardDetail: boolean = false;
  @Output() showCard = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  toggleCardDetail() {
    this.showCardDetail = !this.showCardDetail;
    this.showCard.emit(this.showCardDetail);
  }
}
