import { FC } from "react";
import styles from "./WidgetCard.module.scss";

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
    </div>
  );
};

export default WidgetCard;
