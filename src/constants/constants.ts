import { CategoriesType } from "../types/types";

export const INITIAL_START_DELAY = 1000;

export const REFETCH_CARD_DELAY = 10000;

export const CATEGORIES: CategoriesType = [
  "BILL",
  "CREDIT_CARD",
  "THIRD_PARTY_LOCAL",
  "SELF_TRANSFER_LOCAL",
  "INTERNATIONAL_TRANSFER",
  "SIGN_UP",
  "GIFT_CARD",
  "BUY",
  "REVIEW",
  "REFERRAL_REDEMPTION",
  "REFERRAL_SIGNUP",
  // Info cards:
  "THIRD_PARTY_INFO",
  "SCAM_INFO",
  "REFERRAL_INFO",
  "METAMASK_INFO",
];

export const SESSION_STORAGE_NAME = "showWidget";

export const CTA_LINKS: {
  [key: string]: {
    webflow: string;
    app: string;
  };
} = {
  BILL: {
    webflow:
      "https://www.relaypay.io/bill-payments?utm_source=popup&utm_medium=website",
    app: "https://app.relaypay.io/personal/sell-crypto/bill-payments?utm_source=popup&utm_medium=website",
  },
  CREDIT_CARD: {
    webflow: "https://www.relaypay.io/bill-payments",
    app: "https://app.relaypay.io/personal/sell-crypto/bill-payments?utm_source=popup&utm_medium=website",
  },
  THIRD_PARTY_INFO: {
    webflow:
      "https://www.relaypay.io/post/accept-crypto-payments-australia-business-guide?utm_source=popup&utm_medium=website",
    app: "https://www.relaypay.io/post/accept-crypto-payments-australia-business-guide?utm_source=popup&utm_medium=website",
  },
  THIRD_PARTY_LOCAL: {
    webflow: "https://www.relaypay.io/crypto-bank-transfer",
    app: "https://app.relaypay.io/personal/sell-crypto?utm_source=popup&utm_medium=website",
  },
  SELF_TRANSFER_LOCAL: {
    webflow:
      "https://www.relaypay.io/crypto-bank-transfer?utm_source=popup&utm_medium=website",
    app: "https://app.relaypay.io/personal/sell-crypto?utm_source=popup&utm_medium=website",
  },
  INTERNATIONAL_TRANSFER: {
    webflow: "https://www.relaypay.io/crypto-bank-transfer",
    app: "https://app.relaypay.io/personal/sell-crypto?utm_source=popup&utm_medium=website",
  },
  SIGN_UP: {
    webflow:
      "https://app.relaypay.io/sign-up?utm_source=popup&utm_medium=website",
    app: "https://app.relaypay.io/personal/sell-crypto?utm_source=popup&utm_medium=website",
  },
  GIFT_CARD_INFO: {
    webflow: "https://www.relaypay.io/gift-card-purchase",
    app: "https://app.relaypay.io/personal/sell-crypto/gift-cards?utm_source=popup&utm_medium=website",
  },
  GIFT_CARD: {
    webflow: "https://www.relaypay.io/gift-card-purchase",
    app: "https://app.relaypay.io/personal/sell-crypto/gift-cards?utm_source=popup&utm_medium=website",
  },
  SCAM_INFO: {
    webflow:
      "https://www.relaypay.io/post/crypto-investment-scams-australia-how-to-avoid?utm_source=popup&utm_medium=website",
    app: "https://www.relaypay.io/post/crypto-investment-scams-australia-how-to-avoid?utm_source=popup&utm_medium=website",
  },
  REFERRAL_INFO: {
    webflow: "https://www.relaypay.io/referral",
    app: "https://app.relaypay.io/personal/profile/referrals?utm_source=popup&utm_medium=website",
  },
  METAMASK_INFO: {
    webflow: "https://www.relaypay.io/post/pay-bills-with-metamask-australia",
    app: "https://www.relaypay.io/post/pay-bills-with-metamask-australia?utm_source=popup&utm_medium=website",
  },
  BUY: {
    webflow:
      "https://www.relaypay.io/buy-crypto?utm_source=popup&utm_medium=website",
    app: "https://app.relaypay.io/personal/buy-crypto?utm_source=popup&utm_medium=website",
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
  REVIEW: {
    webflow: "https://au.trustpilot.com/evaluate/relaypay.io",
    app: "https://au.trustpilot.com/evaluate/relaypay.io",
  },
};
