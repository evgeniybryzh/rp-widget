export type CategoryType =
  | "BILL"
  | "CREDIT_CARD"
  | "THIRD_PARTY_INFO"
  | "THIRD_PARTY_LOCAL"
  | "SELF_TRANSFER_LOCAL"
  | "INTERNATIONAL_TRANSFER"
  | "SIGN_UP"
  | "GIFT_CARD_INFO"
  | "GIFT_CARD"
  | "SCAM_INFO"
  | "REFERRAL_INFO"
  | "METAMASK_INFO"
  | "BUY";

export type CategoriesType = CategoryType[];

export interface CardDataResponse {
  type?: CategoryType | null;
  city?: string | null;
  country?: string | null;
  bank?: string | null;
  token?: string | null;
}

export interface CardDataType {
  cardType: string;
  iconName: string;
  htmlText: string;
  ctaText: string;
  webflowCTALink: string;
  appCTALink: string;
  day?: string;
  rate?: "1" | "2" | "3" | "4" | "5";
}

export interface GoogleSheetsInterface {
  htmlText: string;
  CTAText: string;
  WebflowCTALink: string;
  AppCTALink: string;
  IconName: string;
  CardType: string;
}
