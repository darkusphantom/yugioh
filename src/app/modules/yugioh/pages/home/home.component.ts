import { Component, OnInit } from '@angular/core';
import { YugiohService } from 'src/app/modules/yugioh/services/yugioh.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  allCards: any[] = [];
  cardsData: any[] = [];
  filteredCards: any[] = [];
  normalMonsterCards: any[] = [];
  effectMonsterCards: any[] = [];
  spellCards: any[] = [];
  trapCards: any[] = [];

  constructor(private yugiohService: YugiohService) {}

  ngOnInit(): void {
    this.getCardsByFname('magician');
    this.getNormalMonsterCards('normal monster');
    this.getEffectMonsterCards('effect monster');
    this.getSpellCards('spell card');
    this.getTrapCards('trap card');
  }

  /**
   * Obtiene todas las cartas filtradas por unas palabras especificas en el nombre de la carta
   *
   * @param words palabras que debe contener el nombre de la carta
   * @returns un arreglo con todas las cartas que contenga las palabras especccificadas
   */
  getCardsByFilterName(words: string) {
    const filteredCards = this.allCards
      .map((card) => {
        if (card.name.includes(words)) return card;
      })
      .filter((card) => card !== undefined);
    return filteredCards;
  }

  /**
   * Obtiene todas las cartas de la API
   */
  getAllCards() {
    this.yugiohService.getAllCards().subscribe((res: any) => {
      this.allCards = res.data;
    });
  }

  /**
   * Obtiene las cartas por fuzzy dizzy
   *
   * @param fname nombre por fuzzy dizzy
   */
  getCardsByFname(fname: string) {
    this.yugiohService.getCardByFName(fname).subscribe((res: any) => {
      this.allCards = res.data;
      this.filteredCards = this.getCardsByFilterName('Dark Magician');
    });
  }

  getNormalMonsterCards(type: string) {
    this.yugiohService.getCardByType(type).subscribe((cards: any) => {
      this.normalMonsterCards = cards.data.splice(0, 12);
    });
  }

  getEffectMonsterCards(type: string) {
    this.yugiohService.getCardByType(type).subscribe((cards: any) => {
      this.effectMonsterCards = cards.data.splice(0, 12);
    });
  }

  getSpellCards(type: string) {
    this.yugiohService.getCardByType(type).subscribe((cards: any) => {
      this.spellCards = cards.data.splice(0, 12);
    });
  }

  getTrapCards(type: string) {
    this.yugiohService.getCardByType(type).subscribe((cards: any) => {
      this.trapCards = cards.data.splice(0, 12);
    });
  }
}
