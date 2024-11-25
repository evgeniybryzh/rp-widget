export type CategoryType =
  | "BPAY"
  | "Third Party Transfer"
  | "Self Transfer"
  | "International Transfer"
  | "Sign Up"
  | "Gift Card"
  | "Referral"
  | "Buy"
  | "Review";

export type CategoriesType = CategoryType[];

export interface CardDataType {
  cardType: string;
  iconName: string;
  htmlText: string;
  ctaText: string;
  webflowCTALink: string;
  appCTALink: string;
}

export interface IGenerateCardsData {
  cardsData?: CardDataType[];
}

export interface GoogleSheetsInterface {
  htmlText: string;
  CTAText: string;
  WebflowCTALink: string;
  AppCTALink: string;
  IconName: string;
  CardType: string;
}
