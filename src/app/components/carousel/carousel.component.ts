import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  cardByDefault = {
    id: 46986421,
    name: 'Dark Magician',
    type: 'Normal Monster',
    frameType: 'normal',
    desc: "''The ultimate wizard in terms of attack and defense.''",
    atk: 2500,
    def: 2100,
    level: 7,
    race: 'Spellcaster',
    attribute: 'DARK',
    archetype: 'Dark Magician',
    card_sets: [],
    card_images: [
      {
        id: 46986414,
        image_url: 'https://images.ygoprodeck.com/images/cards/46986414.jpg',
        image_url_small:
          'https://images.ygoprodeck.com/images/cards_small/46986414.jpg',
        image_url_cropped:
          'https://images.ygoprodeck.com/images/cards_cropped/46986414.jpg',
      },
    ],
    card_prices: [],
  };

  @Input() title: string = '';
  @Input() cards: any[] = [this.cardByDefault];

  showItem: boolean = false;
  itemSelected: any = this.cardByDefault;
  constructor() {}

  ngOnInit(): void {}

  /**
   * Muestra/oculta los detalles del item y envia al componente hijo los datos del mismo
   * @param item carta para enviar
   */
  toggleShowItem(item: any) {
    this.showItem = !this.showItem;
    this.itemSelected = item;
  }

  showItemState(state: boolean) {
    this.showItem = state;
  }
}
