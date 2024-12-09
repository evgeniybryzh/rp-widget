import { FC } from "react";
import styles from "../WidgetCard.module.scss";
import IconExit from "../../Icons/IconExit";
import IconRelayPay from "../../Icons/IconRelayPay";

interface WidgetCardDidYouKnowProps {
  title?: string | null;
  text?: string | null;
  iconName?: "giftcard" | "warning" | "metamask" | "relaypay" | "cart";
  CTALink: string;
  onClick: () => void;
  CTAText: string;
}

const WidgetCardDidYouKnow: FC<WidgetCardDidYouKnowProps> = ({
  text,
  CTALink,
  onClick,
  CTAText,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <IconRelayPay />
      </div>
      <div className={styles.content}>
        <div className={styles.contentTitle}>💡 Did you know?</div>
        <div
          className={styles.contentText}
          dangerouslySetInnerHTML={{ __html: text || "" }}
        />

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
