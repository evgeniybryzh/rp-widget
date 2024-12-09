import React, { FC } from "react";
import styles from "../WidgetCard.module.scss";
import IconExit from "../../Icons/IconExit";
import IconTrustpilot from "../../Icons/IconTrustpilot";
// import Icon from "../../Icon/Icon";

interface WidgetCardReviewProps {
  text?: string | null;
  CTALink: string;
  onClick: () => void;
  period: string;
}

const WidgetCardReview: FC<WidgetCardReviewProps> = ({
  text,
  CTALink,
  onClick,
  period,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <IconTrustpilot />
      </div>
      <div className={styles.content}>
        <div className={styles.contentTitle}>Trustpilot Review * * * * *</div>
        <div
          className={styles.contentText}
          dangerouslySetInnerHTML={{ __html: text || "" }}
        />
        <div className={styles.contentPeriod}>{period}</div>
        <a
          className={styles.contentLink}
          href={CTALink}
          target={"_blank"}
          rel="noreferrer"
        >
          Write your review {">"}
        </a>
      </div>
      <div onClick={onClick} className={styles.exit}>
        <IconExit />
      </div>
    </div>
  );
};

export default WidgetCardReview;
