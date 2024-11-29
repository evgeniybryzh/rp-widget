import { FC } from "react";
import styles from "./WidgetCard.module.scss";
import Icon from "../Icon/Icon";

interface WidgetCardProps {
  hideWidget: () => void;
  isWebflow: boolean;
}
const WidgetCard: FC<WidgetCardProps> = ({ hideWidget, isWebflow }) => {
  return (
    <div className={styles.card}>
      widget card
      <div onClick={hideWidget} className={styles.exit}>
        X
      </div>
      <Icon name="close" />
    </div>
  );
};

export default WidgetCard;
