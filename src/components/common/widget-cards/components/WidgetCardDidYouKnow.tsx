import React, { FC } from "react";
import styles from "../WidgetCard.module.scss";
import Icon from "../../Icon/Icon";

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
  title,
  CTALink,
  onClick,
  iconName = "relaypay",
  CTAText,
}) => {
  return (
    <div className={styles.card}>
      <div>
        <Icon name={iconName} className={styles.icon} />
      </div>
      <div className={styles.content}>
        {/* <div
          className={styles.contentTitle}
          dangerouslySetInnerHTML={{ __html: title || "" }}
        /> */}
        <div className={styles.contentTitle}>💡 Did you know?</div>
        <div
          className={styles.contentText}
          dangerouslySetInnerHTML={{ __html: text || "" }}
        />

        <a className={styles.contentLink} href={CTALink} target={"_blank"}>
          {CTAText}
        </a>
      </div>
      <div onClick={onClick} className={styles.exit}>
        <Icon name="close" />
      </div>
    </div>
  );
};

export default WidgetCardDidYouKnow;
