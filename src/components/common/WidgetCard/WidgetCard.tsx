import { FC } from "react";
import styles from "./WidgetCard.module.scss";
import Icon, { IconProps, Icons } from "../Icon/Icon";
import { CategoryType } from "../../../types/types";

interface WidgetCardProps {
  category: CategoryType;
  hideWidget: () => void;
  isWebflow: boolean;
  iconName: keyof typeof Icons;
  CTALink: string;

  cityName?: string;
  cryptoCurrency?: string;
  period?: "Today" | "Yesterday";
  bankName?: string;
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
    case "BPAY":
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

    case "Third Party Transfer":
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
      break;
  }
};

export default WidgetCard;
