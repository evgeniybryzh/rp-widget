import React, { FC, useEffect, useMemo, useState } from "react";

export const IconPaths = {
  bitcoin: () => import("../../../icons/Bitcoin.svg"),
  cart: () => import("../../../icons/Cart.svg"),
  dogecoin: () => import("../../../icons/DogeCoin.svg"),
  ethereum: () => import("../../../icons/Ethereum.svg"),
  giftcard: () => import("../../../icons/GiftCard.svg"),
  metamask: () => import("../../../icons/Metamask.svg"),
  relaypay: () => import("../../../icons/RelayPay.svg"),
  solana: () => import("../../../icons/Solana.svg"),
  trustpilot: () => import("../../../icons/Trustpilot.svg"),
  warning: () => import("../../../icons/Warning.svg"),
  close: () => import("../../../icons/Close.svg"),
};

export interface IconProps {
  name: keyof typeof IconPaths;
  className?: string;
}

const Icon: FC<IconProps> = ({ className, name }) => {
  const [IconComponent, setIconComponent] = useState<React.FC<
    React.SVGProps<SVGSVGElement>
  > | null>(null);

  useEffect(() => {
    // Dynamically import the icon
    IconPaths[name]().then((module) => {
      setIconComponent(() => module.default);
    });
  }, [name]);

  if (!IconComponent) {
    return null; // Optionally, you can return a loading spinner or placeholder here
  }

  return <IconComponent className={className} />;
};

export default Icon;
