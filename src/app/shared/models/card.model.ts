export interface YugiohCardData {
  data: YugiohCard[];
}

export interface YugiohCard {
  id: Number;
  name: String;
  type: String;
  frameType: String;
  desc: String;
  atk: Number;
  def: Number;
  level: Number;
  race: String;
  attribute: String;
  archetype: String;
  card_sets: CardSets[];
  card_images: CardImages[];
  card_prices: CardPrices[];
}

export interface CardImages {
  id: Number;
  image_url: String;
  image_url_small: String;
  image_url_cropped: String;
}

export interface CardPrices {
  amazon_price: String;
  cardmarket_price: String;
  coolstuffinc_price: String;
  ebay_price: String;
  tcgplayer_price: String;
}

export interface CardSets {
  set_code: String;
  set_name: String;
  set_price?: String;
  set_rarity?: String;
  set_rarity_code?: String;
  num_of_cards?: Number;
  tcg_date?: String;
  set_image?: String;
}
