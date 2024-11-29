import React, { FC, useMemo } from "react";
import BTC from "../../../icons/Bitcoin.svg";
import CART from "../../../icons/Cart.svg";
import DOGE_COIN from "../../../icons/DogeCoin.svg";
import ETHEREUM from "../../../icons/Ethereum.svg";
import GIFT_CARD from "../../../icons/GiftCard.svg";
import METAMASK from "../../../icons/Metamask.svg";
import RELAY_PAY from "../../../icons/RelayPay.svg";
import SOLANA from "../../../icons/Solana.svg";
import TRUSTPILOT from "../../../icons/Trustpilot.svg";
import WARNING from "../../../icons/Warning.svg";
import CLOSE from "../../../icons/Close.svg";

const Icons = {
  bitcoin: (className?: string) => <BTC className={className} />,
  cart: (className?: string) => <CART className={className} />,
  dogecoin: (className?: string) => <DOGE_COIN className={className} />,
  ethereum: (className?: string) => <ETHEREUM className={className} />,
  giftcard: (className?: string) => <GIFT_CARD className={className} />,
  metamask: (className?: string) => <METAMASK className={className} />,
  relaypay: (className?: string) => <RELAY_PAY className={className} />,
  solana: (className?: string) => <SOLANA className={className} />,
  trustpilot: (className?: string) => <TRUSTPILOT className={className} />,
  warning: (className?: string) => <WARNING className={className} />,
  close: (className?: string) => <CLOSE className={className} />,
};

interface IconProps {
  name: keyof typeof Icons;
  className?: string;
  color?: string;
}

const Icon: FC<IconProps> = ({ className, name }) => {
  const icon = useMemo(() => Icons[name](className), [name, className]);

  return <>{icon}</>;
};

export default Icon;
