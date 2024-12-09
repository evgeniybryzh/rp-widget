import React, { FC } from "react";
import styles from "../WidgetCard.module.scss";
import Icon from "../../Icon/Icon";

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
      <div>
        <Icon name="trustpilot" className={styles.icon} />
      </div>
      <div className={styles.content}>
        <div className={styles.contentTitle}>
          <Icon name="trustpilotReview" className={styles.reviewIcon} />
        </div>
        <div
          className={styles.contentText}
          dangerouslySetInnerHTML={{ __html: text || "" }}
        />
        <div className={styles.contentPeriod}>{period}</div>
        <a className={styles.contentLink} href={CTALink} target={"_blank"}>
          Write your review {">"}
        </a>
      </div>
      <div onClick={onClick} className={styles.exit}>
        <Icon name="close" />
      </div>
    </div>
  );
};

export default WidgetCardReview;
