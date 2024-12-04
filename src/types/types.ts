export type CategoryType =
  | "BILL"
  | "CREDIT_CARD"
  | "THIRD_PARTY_LOCAL"
  | "SELF_TRANSFER_LOCAL"
  | "INTERNATIONAL_TRANSFER"
  | "SIGN_UP"
  | "GIFT_CARD"
  | "REFERRAL_SIGNUP"
  | "REFERRAL_REDEMPTION"
  | "BUY"
  | "REVIEW"
  // Info cards:
  | "THIRD_PARTY_INFO"
  | "SCAM_INFO"
  | "GIFT_CARD_INFO"
  | "REFERRAL_INFO"
  | "METAMASK_INFO";

export type CategoriesType = CategoryType[];

export interface CardDataResponse {
  type?: CategoryType | null;
  city?: string | null;
  country?: string | null;
  bank?: string | null;
  coinName?: string | null;
  coinSymbol?: string | null;
  title?: string | null;
  text?: string | null;
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
