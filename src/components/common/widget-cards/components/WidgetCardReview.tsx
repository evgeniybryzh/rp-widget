import { FC } from "react";
import styles from "../WidgetCard.module.scss";
import IconExit from "../../Icons/IconExit";
import IconTrustpilot from "../../Icons/IconTrustpilot";
import IconTrustpilotReview from "../../Icons/IconTrustpilotReview";

interface WidgetCardReviewProps {
  title?: string | null;
  text?: string | null;
  CTALink: string;
  onClick: () => void;
  period: string;
  logoLink?: string;
}

const WidgetCardReview: FC<WidgetCardReviewProps> = ({
  title,
  text,
  CTALink,
  onClick,
  period,
  logoLink,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        {logoLink && logoLink?.length > 0 ? (
          <img className={styles.icon} src={logoLink} alt="Crypto logo" />
        ) : (
          <IconTrustpilot />
        )}
      </div>
      <div className={styles.content}>
        {title && <div className={styles.contentTitle}>{title}</div>}

        {!title && (
          <div className={styles.contentTitle}>
            <IconTrustpilotReview />
          </div>
        )}

        {text && (
          <div
            className={styles.contentText}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )}

        {!text && (
          <div className={styles.contentText}>
            RelayPay received <span>5 stars on TrustPilot.</span>
          </div>
        )}

        <div className={styles.contentPeriod}>{period || "TODAY"}</div>
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
