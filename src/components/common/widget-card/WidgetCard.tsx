import { FC } from "react";
import styles from "./WidgetCard.module.scss";
import Icon, { IconPaths } from "../Icon/Icon";
import { CategoryType } from "../../../types/types";

interface WidgetCardProps {
  category?: CategoryType | null;
  hideWidget: () => void;
  isWebflow: boolean;
  iconName: keyof typeof IconPaths;
  CTALink: string;

  cityName?: string | null;
  cryptoCurrency?: string | null;
  period?: string | null;
  bankName?: string | null;
}
const WidgetCard: FC<WidgetCardProps> = ({
  category,
  hideWidget,
  isWebflow,
  iconName,
  CTALink,

  cityName,
  cryptoCurrency,
  period,
  bankName,
}) => {
  switch (category) {
    case "BILL":
      return (
        <div className={styles.card}>
          <Icon name={iconName} className={styles.icon} />
          <div className={styles.content}>
            <div className={styles.contentText}>
              Someone in <span>{cityName}</span> paid a bill <br /> via{" "}
              <span>BPAY</span> using <span>{cryptoCurrency}</span>. ✓
            </div>
            <div className={styles.contentPeriod}>{period}</div>
            <a className={styles.contentLink} href={CTALink} target={"_blank"}>
              BPAY your bills with crypto {">"}
            </a>
          </div>
          <div onClick={hideWidget} className={styles.exit}>
            <Icon name="close" />
          </div>
        </div>
      );

    case "THIRD_PARTY_INFO":
      return (
        <div className={styles.card}>
          <Icon name={iconName} className={styles.icon} />
          <div className={styles.content}>
            <div className={styles.contentText}>
              Someone in <span>{cityName}</span> paid dollars <br /> to a{" "}
              <span>{bankName}</span> account using{" "}
              <span>{cryptoCurrency}</span>. ✓
            </div>
            <div className={styles.contentPeriod}>{period}</div>
            <a className={styles.contentLink} href={CTALink} target={"_blank"}>
              Pay crypto to anyone's Aussie bank {">"}
            </a>
          </div>
          <div onClick={hideWidget} className={styles.exit}>
            <Icon name="close" />
          </div>
        </div>
      );

    default:
      return (
        <div className={styles.card}>
          <Icon name={"warning"} className={styles.icon} />
          <div className={styles.content}>
            <div className={styles.contentText}>
              Someone{" "}
              {cityName && (
                <span>
                  in <span>{cityName}</span>
                </span>
              )}{" "}
              made a transaction <br /> using <span>{cryptoCurrency}</span>. ✓
            </div>
            <div className={styles.contentPeriod}>{period}</div>
            <a className={styles.contentLink} href={CTALink} target={"_blank"}>
              Pay your bills with crypto {">"}
            </a>
          </div>
          <div onClick={hideWidget} className={styles.exit}>
            <Icon name="close" />
          </div>
        </div>
      );
  }
};

export default WidgetCard;
