import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class YugiohService {
  // Documentación de la API: https://ygoprodeck.com/api-guide/
  private URL_API = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

  constructor(private http: HttpClient) {}

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
  getCardByName(name: string) {
    return this.http.get(`${this.URL_API}/?name=${name}`);
  }

  /**
   * Obtiene una carta especifica por la búsqueda rápida por el nombre
   * @param fname Nombre que contiene la carta (Magician)
   * @returns la carta que coincida con el fname
   */
  getCardByFName(fname: string) {
    return this.http.get(`${this.URL_API}/?fname=${fname}`);
  }

  /**
   * Obtiene una carta especifica por el atributo
   * @param attribute atributo de la carta
   * @returns la carta que coincida con el atributo
   */
  getCardByAttribute(attribute: string) {
    return this.http.get(`${this.URL_API}/?attribute=${attribute}`);
  }

  /**
   * Obtiene una carta especifica por el tipo
   * @param type tipo de la carta (normal, effect, spell, trap...)
   * @returns la carta que coincida con el tipo
   */
  getCardByType(type: string) {
    return this.http.get(`${this.URL_API}/?type=${type}%20card`);
  }

  /**
   * Obtiene una carta especifica por el tipo y la raza
   * @param type tipo de la carta (normal, effect, spell, trap,...)
   * @param race raza de la carta (spellcaster, warrior, insect...)
   * @returns la carta que coincida con el tipo y la raza
   */
  getCardByTypeByRace(type: string, race: string) {
    return this.http.get(`${this.URL_API}/?type=${type}%20card&race=${race}`);
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
  ) {
    return this.http.get(
      `${this.URL_API}/?level=${level}&attribute=${attribute}&sort=${sort}`
    );
  }
}
