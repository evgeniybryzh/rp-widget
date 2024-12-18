import { CategoriesType } from "../types/types";

export const INITIAL_START_DELAY = 1000;

export const REFETCH_CARD_DELAY = 10000;

export const DID_YOU_KNOW_CATEGORIES: CategoriesType = [
  "DID_YOU_KNOW_SELL_BPAY",
  "DID_YOU_KNOW_SELL_THIRD_PARTY",
  "DID_YOU_KNOW_SELL_SELF_TRANSFER",
  "DID_YOU_KNOW_SELL_INTERNATIONAL_TRANSFER",
  "DID_YOU_KNOW_SELL_GIFT_CARD",
  "DID_YOU_KNOW_BUY",
  "DID_YOU_KNOW_SIGN_UP",
  "DID_YOU_KNOW_REFERRAL_SIGNUP",
  "DID_YOU_KNOW_REFERRAL_REDEMPTION",
  "DID_YOU_KNOW_MERCHANT",
];

export const REVIEW_CATEGORIES: CategoriesType = [
  "REVIEW_TEMPLATE1",
  "REVIEW_TEMPLATE2",
];

export const CATEGORIES: CategoriesType = [
  "SELL_BPAY_BILL",
  "SELL_BPAY_CREDIT_CARD",
  "SELL_THIRD_PARTY_TRANSFER",
  "SELL_SELF_TRANSFER",
  "SELL_INTERNATIONAL_TRANSFER",
  "SELL_GIFT_CARD",
  "BUY",
  "SIGN_UP",
  "REFERRAL_SIGNUP",
  "REFERRAL_REDEMPTION",
  "MERCHANT",
  ...REVIEW_CATEGORIES,
  ...DID_YOU_KNOW_CATEGORIES,
];

export const SESSION_STORAGE_NAME = "showWidget";

export const CTA_LINKS: {
  [key: string]: {
    webflow: string;
    app: string;
  };
} = {
  SELL_BPAY_BILL: {
    webflow:
      "https://www.relaypay.io/bill-payments?utm_source=popup&utm_medium=website",
    app: "https://app.relaypay.io/personal/sell-crypto/bill-payments?utm_source=popup&utm_medium=website",
  },
  SELL_BPAY_CREDIT_CARD: {
    webflow: "https://www.relaypay.io/bill-payments",
    app: "https://app.relaypay.io/personal/sell-crypto/bill-payments?utm_source=popup&utm_medium=website",
  },
  SELL_THIRD_PARTY_TRANSFER: {
    webflow: "https://www.relaypay.io/crypto-bank-transfer",
    app: "https://app.relaypay.io/personal/sell-crypto?utm_source=popup&utm_medium=website",
  },
  SELL_SELF_TRANSFER: {
    webflow:
      "https://www.relaypay.io/crypto-bank-transfer?utm_source=popup&utm_medium=website",
    app: "https://app.relaypay.io/personal/sell-crypto?utm_source=popup&utm_medium=website",
  },
  SELL_INTERNATIONAL_TRANSFER: {
    webflow: "https://www.relaypay.io/crypto-bank-transfer",
    app: "https://app.relaypay.io/personal/sell-crypto?utm_source=popup&utm_medium=website",
  },
  SELL_GIFT_CARD: {
    webflow: "https://www.relaypay.io/gift-card-purchase",
    app: "https://app.relaypay.io/personal/sell-crypto/gift-cards?utm_source=popup&utm_medium=website",
  },
  BUY: {
    webflow:
      "https://www.relaypay.io/buy-crypto?utm_source=popup&utm_medium=website",
    app: "https://app.relaypay.io/personal/buy-crypto?utm_source=popup&utm_medium=website",
  },
  SIGN_UP: {
    webflow:
      "https://app.relaypay.io/sign-up?utm_source=popup&utm_medium=website",
    app: "https://app.relaypay.io/personal/sell-crypto?utm_source=popup&utm_medium=website",
  },
  REFERRAL_SIGNUP: {
    webflow:
      "https://app.relaypay.io/sign-in?utm_source=popup&utm_medium=website",
    app: "https://app.relaypay.io/personal/profile/referrals?utm_source=popup&utm_medium=website",
  },
  REFERRAL_REDEMPTION: {
    webflow:
      "https://app.relaypay.io/sign-in?utm_source=popup&utm_medium=website",
    app: "https://app.relaypay.io/personal/profile/referrals?utm_source=popup&utm_medium=website",
  },

  // REVIEW CARDS:
  REVIEW_TEMPLATE1: {
    webflow: "https://au.trustpilot.com/evaluate/relaypay.io",
    app: "https://au.trustpilot.com/evaluate/relaypay.io",
  },
  REVIEW_TEMPLATE2: {
    webflow: "https://au.trustpilot.com/evaluate/relaypay.io",
    app: "https://au.trustpilot.com/evaluate/relaypay.io",
  },

  // DID YOU KNOW CARDS:
  DID_YOU_KNOW_SELL_BPAY: {
    webflow:
      "https://www.relaypay.io/bill-payments?utm_source=popup&utm_medium=website",
    app: "https://app.relaypay.io/personal/sell-crypto/bill-payments?utm_source=popup&utm_medium=website",
  },
  DID_YOU_KNOW_SELL_THIRD_PARTY: {
    webflow:
      "https://www.relaypay.io/post/accept-crypto-payments-australia-business-guide?utm_source=popup&utm_medium=website",
    app: "https://www.relaypay.io/post/accept-crypto-payments-australia-business-guide?utm_source=popup&utm_medium=website",
  },
  DID_YOU_KNOW_SELL_SELF_TRANSFER: {
    webflow:
      "https://www.relaypay.io/crypto-bank-transfer?utm_source=popup&utm_medium=website",
    app: "https://app.relaypay.io/personal/sell-crypto?utm_source=popup&utm_medium=website",
  },
  DID_YOU_KNOW_SELL_INTERNATIONAL_TRANSFER: {
    webflow: "https://www.relaypay.io/crypto-bank-transfer",
    app: "https://app.relaypay.io/personal/sell-crypto?utm_source=popup&utm_medium=website",
  },
  DID_YOU_KNOW_SELL_GIFT_CARD: {
    webflow: "https://www.relaypay.io/gift-card-purchase",
    app: "https://app.relaypay.io/personal/sell-crypto/gift-cards?utm_source=popup&utm_medium=website",
  },
  DID_YOU_KNOW_BUY: {
    webflow:
      "https://www.relaypay.io/buy-crypto?utm_source=popup&utm_medium=website",
    app: "https://app.relaypay.io/personal/buy-crypto?utm_source=popup&utm_medium=website",
  },
  DID_YOU_KNOW_SIGN_UP: {
    webflow:
      "https://app.relaypay.io/sign-up?utm_source=popup&utm_medium=website",
    app: "https://app.relaypay.io/personal/sell-crypto?utm_source=popup&utm_medium=website",
  },
  DID_YOU_KNOW_REFERRAL_SIGNUP: {
    webflow: "https://www.relaypay.io/referral",
    app: "https://app.relaypay.io/personal/profile/referrals?utm_source=popup&utm_medium=website",
  },
  DID_YOU_KNOW_REFERRAL_REDEMPTION: {
    webflow: "https://www.relaypay.io/referral",
    app: "https://app.relaypay.io/personal/profile/referrals?utm_source=popup&utm_medium=website",
  },
  DID_YOU_KNOW_MERCHANT: {
    webflow: "https://www.relaypay.io/",
    app: "https://www.relaypay.io/",
  },
  MERCHANT: {
    webflow: "https://www.relaypay.io/",
    app: "https://www.relaypay.io/",
  },
};
