import { Component, OnChanges, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs';
import { YugiohService } from 'src/app/modules/yugioh/services/yugioh.service';
import { YugiohCard } from '../../models/card.model';
import { Carousel } from '../../models/carousel.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  allCards: YugiohCard[] = [];
  darkMagicianCards: YugiohCard[] = [];
  normalMonsterCards: YugiohCard[] = [];
  effectMonsterCards: YugiohCard[] = [];
  spellCards: YugiohCard[] = [];
  trapCards: YugiohCard[] = [];

  carouselData: Carousel[] = [
    {
      title: 'Dark Magicians',
      description:
        'Dark Magician, known as "Black Magician" is an archetype that has been a part of the Yu-Gi-Oh! franchise since its beginning, with "Dark Magician" appearing as Yugi Muto\'s ace card.',
      cards: [],
      url: '',
    },
    {
      title: 'Normal Monster',
      description:
        'Normal Monsters, colored yellow, are Main Deck monsters with no monster effects.',
      cards: [],
      url: '/yugioh/type-card/normal monster',
    },
    {
      title: 'Effect Monster',
      description:
        'Effect Monster are Monster Cards with an orange color border. Effect Monsters necessarily have at least one card effect or condition.',
      cards: [],
      url: '/yugioh/type-card/effect monster',
    },
    {
      title: 'Spell Cards',
      description:
        'Often, a Spell Card has a single effect to provide a bonus to the user or a weakness to the opponent. Unlike Trap Cards, Spell Cards have the advantage of being able to be played without having to be Set first.',
      cards: [],
      url: '/yugioh/type-card/spell card',
    },
    {
      title: 'Trap Cards',
      description:
        "Trap Cards are cards with purple-colored borders that have various effects. A Trap Card must first be Set and can only be activated after the current turn has finished. After that, it may be activated during either player's turn.",
      cards: [],
      url: '/yugioh/type-card/trap card',
    },
  ];

  constructor(private yugiohService: YugiohService) {}

  ngOnInit(): void {
    this.getAllCards();
  }

  /**
   * Obtiene todas las cartas filtradas por unas palabras especificas en el nombre de la carta
   *
   * @param words palabras que debe contener el nombre de la carta
   * @returns un arreglo con todas las cartas que contenga las palabras especccificadas
   */
  getCardsByFilterName(words: string, cards?: any): YugiohCard[] {
    const filteredCards = cards
      .map((card: any) => {
        if (card.name.includes(words)) return card;
      })
      .filter((card: any) => card !== undefined);
    return filteredCards;
  }

  /**
   * Obtiene todas las cartas de la API
   */
  getAllCards(): void {
    this.yugiohService.getAllCards().subscribe((res: any) => {
      this.allCards = res.data;
      const allTypeCards = this.getAllCardsFilteredByType();
      this.setCardsInCarousel(allTypeCards);
    });
  }

  getAllCardsFilteredByType() {
    this.darkMagicianCards = this.getCardsByFilterName(
      'Dark Magician',
      this.allCards
    );
    this.normalMonsterCards = this.getCardsByTypeFiltered('normal', 12);
    this.effectMonsterCards = this.getCardsByTypeFiltered('effect', 12);
    this.spellCards = this.getCardsByTypeFiltered('spell', 12);
    this.trapCards = this.getCardsByTypeFiltered('trap', 12);
    return [
      this.darkMagicianCards,
      this.normalMonsterCards,
      this.effectMonsterCards,
      this.spellCards,
      this.trapCards,
    ];
  }

  setCardsInCarousel(cardList: YugiohCard[][]) {
    this.carouselData = this.carouselData.map((carousel, i) => {
      return { ...carousel, cards: cardList[i] };
    });
  }

  /**
   * Get cards by frametype
   *
   * @param type
   * @param limit
   * @returns an array of
   */
  getCardsByTypeFiltered(type: string, limit?: number): YugiohCard[] {
    return !limit
      ? this.allCards.filter((card) => card.frameType === type)
      : this.allCards
          .filter((card) => card.frameType === type)
          .splice(0, limit);
  }

  getNormalMonsterCards(type: string): void {
    this.yugiohService
      .getCardByType(type)
      .pipe(debounceTime(200))
      .subscribe((cards: any) => {
        this.normalMonsterCards = cards.data.splice(0, 12);
      });
  }
}
