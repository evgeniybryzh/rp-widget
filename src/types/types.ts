export type CategoryType =
  | "SELL_BPAY_BILL"
  | "SELL_BPAY_CREDIT_CARD"
  | "SELL_THIRD_PARTY_TRANSFER"
  | "SELL_SELF_TRANSFER"
  | "SELL_INTERNATIONAL_TRANSFER"
  | "SELL_GIFT_CARD"
  | "BUY"
  | "SIGN_UP"
  | "REFERRAL_SIGNUP"
  | "REFERRAL_REDEMPTION"
  | "REVIEW_TEMPLATE1"
  | "REVIEW_TEMPLATE2"
  | "DID_YOU_KNOW_SELL_BPAY"
  | "DID_YOU_KNOW_SELL_THIRD_PARTY"
  | "DID_YOU_KNOW_SELL_SELF_TRANSFER"
  | "DID_YOU_KNOW_SELL_INTERNATIONAL_TRANSFER"
  | "DID_YOU_KNOW_SELL_GIFT_CARD"
  | "DID_YOU_KNOW_BUY"
  | "DID_YOU_KNOW_SIGN_UP"
  | "DID_YOU_KNOW_REFERRAL_SIGNUP"
  | "DID_YOU_KNOW_REFERRAL_REDEMPTION";

export type CategoriesType = CategoryType[];

export interface CardDataResponse {
  template?: CategoryType | null;
  city?: string | null;
  country?: string | null;
  bank?: string | null;
  coinSymbol?: string | null;
  coinName?: string | null;
  title?: string | null;
  text?: string | null;
  iconUrl?: string | null;
  timeline?: string | null;
  loggedInLink?: string | null;
  anonymousLink?: string | null;
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
