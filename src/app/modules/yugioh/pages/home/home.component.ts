import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs';
import { YugiohService } from 'src/app/modules/yugioh/services/yugioh.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  allCards: any[] = [];
  darkMagicianCards: any[] = [];
  cardsData: any[] = [];
  filteredCards: any[] = [];
  normalMonsterCards: any[] = [];
  effectMonsterCards: any[] = [];
  spellCards: any[] = [];
  trapCards: any[] = [];

  carouselData: any[] = [
    {
      title: 'Normal Monster Cards',
      description:
        'Normal Monsters, colored yellow, are Main Deck monsters with no monster effects.',
      cards: [],
      url: '/yugioh/type-card/normal monster',
    },
    {
      title: 'Effect Monster Cards',
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

  typeCards = ['normal monster', 'effect monster', 'spell card', 'trap card'];

  constructor(private yugiohService: YugiohService) {}

  ngOnInit(): void {
    this.getAllCards();
    const darkMagician = this.allCards.filter(card => card.n)
    // this.getCardsFilteredName('Dark Magician');
    // this.getCardsByFname('magician');
    // this.getNormalMonsterCards('normal monster');
    // this.getEffectMonsterCards('effect monster');
    // this.getSpellCards('spell card');
    // this.getTrapCards('trap card');
    // setTimeout(() => {
    //   this.allCards = [
    //     this.normalMonsterCards,
    //     this.effectMonsterCards,
    //     this.spellCards,
    //     this.trapCards,
    //   ];
    //   this.carouselData = this.carouselData.map((carousel, i) => {
    //     return { ...carousel, cards: this.allCards[i] };
    //   });
    // }, 1000);
  }

  /**
   * Obtiene todas las cartas filtradas por unas palabras especificas en el nombre de la carta
   *
   * @param words palabras que debe contener el nombre de la carta
   * @returns un arreglo con todas las cartas que contenga las palabras especccificadas
   */
  getCardsByFilterName(words: string, cards?: any) {
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
  getAllCards() {
    this.yugiohService.getAllCards().subscribe((res: any) => {
      this.allCards = res.data;
      console.log(this.allCards);
    });
  }

  getCardsFilteredName(fname: string) {
    this.darkMagicianCards = this.getCardsByFilterName(fname, this.allCards);
    console.log(this.darkMagicianCards);
  }

  /**
   * Obtiene las cartas por fuzzy dizzy
   *
   * @param fname nombre por fuzzy dizzy
   */
  getCardsByFname(fname: string) {
    this.yugiohService.getCardByFName(fname).subscribe((res: any) => {
      const cards = res.data;
      this.filteredCards = this.getCardsByFilterName('Dark Magician', cards);
    });
  }

  getNormalMonsterCards(type: string) {
    this.yugiohService
      .getCardByType(type)
      .pipe(debounceTime(200))
      .subscribe((cards: any) => {
        this.normalMonsterCards = cards.data.splice(0, 12);
      });
  }

  getEffectMonsterCards(type: string) {
    this.yugiohService
      .getCardByType(type)
      .pipe(debounceTime(200))
      .subscribe((cards: any) => {
        this.effectMonsterCards = cards.data.splice(0, 12);
      });
  }

  getSpellCards(type: string) {
    this.yugiohService
      .getCardByType(type)
      .pipe(debounceTime(200))
      .subscribe((cards: any) => {
        this.spellCards = cards.data.splice(0, 12);
      });
  }

  getTrapCards(type: string) {
    this.yugiohService
      .getCardByType(type)
      .pipe(debounceTime(200))
      .subscribe((cards: any) => {
        this.trapCards = cards.data.splice(0, 12);
      });
  }
}
