import classNames from "classnames";
import { FC } from "react";
import WidgetCard from "../common//widget-card/WidgetCard";
import styles from "./Widget.module.scss";
import useWidget from "../../hooks/useWidget";

interface WidgetProps {
  isWebflow: boolean;
}

const Widget: FC<WidgetProps> = ({ isWebflow }) => {
  const { hideWidget, isShown, cardsData } = useWidget();

  return (
    <div className={classNames(styles.widget, isShown && styles.shown)}>
      <WidgetCard
        category="Third Party Transfer"
        hideWidget={hideWidget}
        isWebflow={isWebflow}
        iconName={"solana"}
        CTALink="https://www.relaypay.com/"
        cityName="Adelaide"
        cryptoCurrency="SOL"
        period="Today"
        bankName="Westpac"
      />
    </div>
  );
};

export default Widget;
