import { FC, useMemo } from "react";
import styles from "../WidgetCard.module.scss";
import IconExit from "../../Icons/IconExit";
import IconRelayPay from "../../Icons/IconRelayPay";
import { CategoryType } from "../../../../types/types";

interface WidgetCardDidYouKnowProps {
  title?: string | null;
  text?: string | null;
  CTALink: string;
  onClick: () => void;
  category: CategoryType;
  period: string;
  logoLink: string | null;
}

const WidgetCardDidYouKnow: FC<WidgetCardDidYouKnowProps> = ({
  text,
  CTALink,
  onClick,
  category,
  title,
  logoLink,
  period,
}) => {
  const CTAText = useMemo(() => {
    switch (category) {
      case "DID_YOU_KNOW_BUY":
        return "Read our guide >";

      case "DID_YOU_KNOW_REFERRAL_REDEMPTION":
        return "Read our guide >";

      case "DID_YOU_KNOW_REFERRAL_SIGNUP":
        return "Read our guide >";

      case "DID_YOU_KNOW_SELL_BPAY":
        return "Read our guide >";

      case "DID_YOU_KNOW_SELL_GIFT_CARD":
        return "Read our guide >";

      case "DID_YOU_KNOW_SELL_INTERNATIONAL_TRANSFER":
        return "Read our guide >";

      case "DID_YOU_KNOW_SELL_SELF_TRANSFER":
        return "Read our guide >";

      case "DID_YOU_KNOW_SELL_THIRD_PARTY":
        return "Read our guide >";

      case "DID_YOU_KNOW_SIGN_UP":
        return "Read our guide >";

      case "DID_YOU_KNOW_MERCHANT":
        return "Read our guide >";

      default:
        return "Read our guide >";
    }
  }, [category]);

  const defaultTitle = "Did you know?";

  const defaultText =
    "<span>Accept crypto payments </span> for your business and simply <span>be paid in dollars.</span>";

  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        {logoLink && logoLink?.length > 0 ? (
          <img className={styles.icon} src={logoLink} alt="Crypto logo" />
        ) : (
          <IconRelayPay />
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.contentTitle}>
          💡 {title && title?.length > 0 ? title : defaultTitle}
        </div>
        <div
          className={styles.contentText}
          dangerouslySetInnerHTML={{
            __html: text || defaultText,
          }}
        />
        {period && period?.length > 0 && (
          <div className={styles.contentPeriod}>{period}</div>
        )}
        <a
          className={styles.contentLink}
          href={CTALink}
          target={"_blank"}
          rel="noreferrer"
        >
          {CTAText}
        </a>
      </div>
      <div onClick={onClick} className={styles.exit}>
        <IconExit />
      </div>
    </div>
  );
};

export default WidgetCardDidYouKnow;
