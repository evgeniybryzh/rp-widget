export const getCoinLogoLink = (
  coinTitle: string | null | undefined,
  coinSymbol: string | null | undefined
) => {
  if (coinTitle && coinSymbol) {
    return `https://cryptologos.cc/logos/${coinTitle.toLowerCase()}-${coinSymbol.toLowerCase()}-logo.svg`;
  }
  return "https://cryptologos.cc/logos/bitcoin-btc-logo.svg";
};
