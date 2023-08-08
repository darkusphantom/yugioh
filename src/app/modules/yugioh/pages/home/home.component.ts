import { Component, OnInit } from '@angular/core';
import { YugiohService } from 'src/app/modules/yugioh/services/yugioh.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  allCards: any[] = [];
  filteredCards: any[] = [];

  constructor(private yugiohService: YugiohService) {}

  ngOnInit(): void {
    this.getCardsByFname('magician');
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
   * Obtiene las cartas por fuzzy dizze
   *
   * @param fname nombre por fuzzy dizze
   */
  getCardsByFname(fname: string) {
    this.yugiohService.getCardByFName(fname).subscribe((res: any) => {
      this.allCards = res.data;
      this.filteredCards = this.getCardsByFilterName('Dark Magician');
    });
  }
}
