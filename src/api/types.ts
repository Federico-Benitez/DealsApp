export interface DealsResponse {
  internalName: string;
  title: string;
  metacriticLink: string;
  dealID: string;
  storeID: string;
  gameID: string;
  salePrice: string;
  normalPrice: string;
  isOnSale: string;
  savings: string;
  metacriticScore: string;
  steamRatingText: SteamRatingText;
  steamRatingPercent: string;
  steamRatingCount: string;
  steamAppID: string;
  releaseDate: number;
  lastChange: number;
  dealRating: string;
  thumb: string;
}

export interface Product {
  id: DealsResponse["dealID"];
  savings: DealsResponse["savings"];
  thumb: DealsResponse["thumb"];
  title: DealsResponse["title"];
  steamRatingPercent: DealsResponse["steamRatingPercent"];
  normalPrice: DealsResponse["normalPrice"];
  salePrice: DealsResponse["salePrice"];
}

export enum SteamRatingText {
  Mixed = "Mixed",
  MostlyNegative = "Mostly Negative",
  MostlyPositive = "Mostly Positive",
  OverwhelminglyPositive = "Overwhelmingly Positive",
  VeryPositive = "Very Positive",
}
