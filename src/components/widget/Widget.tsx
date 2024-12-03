import classNames from "classnames";
import { FC, useEffect } from "react";
import WidgetCard from "../common//widget-card/WidgetCard";
import styles from "./Widget.module.scss";
import useWidget from "../../hooks/useWidget";

interface WidgetProps {
  isWebflow: boolean;
}

const Widget: FC<WidgetProps> = ({ isWebflow }) => {
  const { hideWidget, isShown, cardContent } = useWidget({ isWebflow });

  return (
    <div className={classNames(styles.widget, isShown && styles.shown)}>
      <WidgetCard
        category="Third Party Transfer"
        hideWidget={hideWidget}
        isWebflow={isWebflow}
        iconName={"solana"}
        CTALink="https://relaypay.io/"
        cityName="Adelaide"
        cryptoCurrency="SOL"
        period="Today"
        bankName="Westpac"
      />
    </div>
  );
};

export default Widget;
