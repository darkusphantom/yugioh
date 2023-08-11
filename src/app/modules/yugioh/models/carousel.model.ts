import { YugiohCard } from './card.model';

export interface Carousel {
  title: string;
  description: string;
  cards: YugiohCard[];
  url: string;
}
