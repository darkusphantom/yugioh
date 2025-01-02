import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { YugiohCardData } from '../../../shared/models/card.model';

@Injectable({
  providedIn: 'root',
})
export class YugiohService {
  // Documentación de la API: https://ygoprodeck.com/api-guide/
  private URL_API = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

  constructor(private http: HttpClient) { }

  /**
   * Obtiene todas las cartas
   * @returns todas las cartas
   */
  getAllCards() {
    return this.http.get(`${this.URL_API}/`);
  }

  /**
   * Obtiene una carta especifica por id
   * @param id ID o passcode de la carta
   * @returns la carta que coincida con el ID o passcode
   */
  getCardById(id: string) {
    return this.http.get(`${this.URL_API}/?id=${id}`);
  }

  /**
   * Obtiene una carta especifica por el nombre
   * @param name Nombre de la carta
   * @returns la carta que coincida con el nombre
   */
  getCardByName(name: string): Observable<YugiohCardData> {
    return this.http.get<YugiohCardData>(`${this.URL_API}/?name=${name}`);
  }

  /**
   * Obtiene una carta especifica por la búsqueda rápida por el nombre
   * @param fname Nombre que contiene la carta (Magician)
   * @returns la carta que coincida con el fname
   */
  getCardByFName(fname: string): Observable<YugiohCardData> {
    return this.http.get<YugiohCardData>(`${this.URL_API}/?fname=${fname}`);
  }

  /**
   * Obtiene una carta especifica por el atributo
   * @param attribute atributo de la carta
   * @returns la carta que coincida con el atributo
   */
  getCardByAttribute(attribute: string): Observable<YugiohCardData> {
    return this.http.get<YugiohCardData>(`${this.URL_API}/?attribute=${attribute}`);
  }

  /**
   * Obtiene una carta especifica por el tipo
   * @param type tipo de la carta (normal monster, effect monster, spell card, trap card...)
   * @returns la carta que coincida con el tipo
   */
  getCardByType(type: string | null): Observable<YugiohCardData> {
    const getSpecifficType = () => {
      const isSpellOrTrap = type === 'spell' || type === 'trap';
      if (isSpellOrTrap) return `${type} card`;
      if (!isSpellOrTrap) return `${type} monster`;
      return type;
    };
    const typeCard = getSpecifficType();
    return this.http.get<YugiohCardData>(`${this.URL_API}/?type=${typeCard}`);
  }

  /**
   * Obtiene una carta especifica por el tipo
   * @param type tipo de la carta (normal, effect, spell, trap...)
   * @returns la carta que coincida con el tipo
   */
  getCardByFrameType(type: string): Observable<YugiohCardData> {
    return this.http.get<YugiohCardData>(`${this.URL_API}/?frametype=${type}`);
  }

  /**
   * Obtiene una carta especifica por el tipo y la raza
   * @param type tipo de la carta (normal, effect, spell, trap,...)
   * @param race raza de la carta (spellcaster, warrior, insect...)
   * @returns la carta que coincida con el tipo y la raza
   */
  getCardByTypeByRace(type: string, race: string): Observable<YugiohCardData> {
    return this.http.get<YugiohCardData>(`${this.URL_API}/?type=${type}%20card&race=${race}`);
  }

  /**
   * Obtiene una carta especifica por el atributo, el nivel y el orden
   * @param level nivel o rango de la carta (1,2,...,12)
   * @param attribute atributo de la carta (water, fire, dark,...)
   * @param sort el orden para organizar las cartas (atk, def)
   * @returns la carta que coincida con el tipo y la raza
   */
  getCardByLevelByAttributeBySort(
    level: string,
    attribute: string,
    sort: string
  ): Observable<YugiohCardData> {
    return this.http.get<YugiohCardData>(
      `${this.URL_API}/?level=${level}&attribute=${attribute}&sort=${sort}`
    );
  }

  getRandomCard(
    num: number = 3,
    offset: number = 0,
    sort: string
  ): Observable<YugiohCardData> {
    return this.http.get<YugiohCardData>(
      `${this.URL_API}?num=${num}&offset=${offset}&sort=${sort}`
    );
  }

  getRandomCardByType(
    num: number = 3,
    offset: number = 0,
    sort: string,
    type: string
  ): Observable<YugiohCardData> {
    return this.http.get<YugiohCardData>(
      `${this.URL_API}?num=${num}&offset=${offset}&sort=${sort}&type=${type}`
    );
  }

  getRandomCardByFname(
    num: number = 3,
    offset: number = 0,
    sort: string,
    fname: string
  ): Observable<YugiohCardData> {
    return this.http.get<YugiohCardData>(
      `${this.URL_API}?num=${num}&offset=${offset}&sort=${sort}&fname=${fname}`
    );
  }

  getAllCardSets(): Observable<any[]> {
    return this.http.get<any[]>(`https://db.ygoprodeck.com/api/v7/cardsets.php`);
  }
}
