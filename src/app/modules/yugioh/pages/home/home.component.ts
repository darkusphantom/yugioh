import { Component, OnInit } from '@angular/core';
import { YugiohService } from 'src/app/modules/yugioh/services/yugioh.service';
import { CardSets, YugiohCard } from '../../models/card.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  allCards: YugiohCard[] = [];
  allCardSets: CardSets[] = [];
  filteredCards: YugiohCard[] = [];
  randomCards: YugiohCard[] = [];
  magicianCards: YugiohCard[] = [];
  elementalHeroCards: YugiohCard[] = [];

  constructor(private yugiohService: YugiohService) { }

  ngOnInit(): void {
    this.yugiohService.getRandomCard(10, 0, 'random').subscribe({
      next: (res: any) => {
        this.randomCards = res.data;
      },
      error: (error) => {
        console.log(error);
      },
    });
    this.yugiohService
      .getRandomCardByFname(10, 0, 'random', 'magician')
      .subscribe({
        next: (res: any) => {
          this.magicianCards = res.data;
        },
        error: (error) => {
          console.log(error);
        },
      });
    this.yugiohService
      .getRandomCardByFname(10, 0, 'random', 'elemental HERO')
      .subscribe({
        next: (res: any) => {
          this.elementalHeroCards = res.data;
        },
        error: (error) => {
          console.log(error);
        },
      });

    this.yugiohService.getALlCardSets().subscribe({
      next: (res: any) => {
        this.allCardSets = res.splice(0, 10).filter((card: any) => card?.set_image);
      },
      error: (error) => {
        console.log(error);
      }
    },
    )
  }

  /**
   * Obtiene todas las cartas filtradas por unas palabras especificas en el nombre de la carta
   *
   * @param words palabras que debe contener el nombre de la carta
   * @returns un arreglo con todas las cartas que contenga las palabras especccificadas
   */
  getCardsByFilterName(words: string) {
    const filteredCards = this.allCards
      .map((card: any) => {
        if (card?.name.includes(words)) return card;
      })
      .filter((card: YugiohCard | undefined) => card !== undefined);
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
      this.filteredCards = this.getCardsByFilterName('Dark Magician').slice(0, 6);
    });
  }
}
