import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YugiohService } from 'src/app/modules/yugioh/services/yugioh.service';

@Component({
  selector: 'app-type-card',
  templateUrl: './type-card.component.html',
  styleUrls: ['./type-card.component.scss'],
})
export class TypeCardComponent implements OnInit {
  typeCard: string | null = '';
  allCards: [] = [];

  constructor(
    private route: ActivatedRoute,
    private yugiohService: YugiohService
  ) {}

  ngOnInit(): void {
    //Cada vez que reciba un nuevo id en el router, paramMap se encargará de detectarlo
    this.route.paramMap.subscribe((params) => {
      // Este parámetro debe coincidir con el parámetro que colocaste en la ruta
      this.typeCard = params.get('type');
      this.getCards(this.typeCard);
    });
  }

  /**
   * Obtiene las cartas por fuzzy dizze
   * @param fname nombre por fuzzy dizze
   */
  getCards(type: string | null) {
    this.yugiohService.getCardByType(type).subscribe((res: any) => {
      const allCards = res.data;
      this.allCards = allCards.slice(12, 24);
    });
  }
}
