import React, { FC, useEffect, useMemo, useState } from "react";

export const IconPaths = {
  cart: () => import("../../../icons/Cart.svg"),
  giftcard: () => import("../../../icons/GiftCard.svg"),
  metamask: () => import("../../../icons/Metamask.svg"),
  relaypay: () => import("../../../icons/RelayPay.svg"),
  trustpilot: () => import("../../../icons/Trustpilot.svg"),
  warning: () => import("../../../icons/Warning.svg"),
  close: () => import("../../../icons/Close.svg"),
  trustpilotReview: () => import("../../../icons/TrustpilotReview.svg"),
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
