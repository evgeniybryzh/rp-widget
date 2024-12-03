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

  console.log(cardContent);

  return (
    <div className={classNames(styles.widget, isShown && styles.shown)}>
      <WidgetCard
        category={cardContent?.type}
        hideWidget={hideWidget}
        isWebflow={isWebflow}
        iconName="relaypay"
        CTALink="https://relaypay.io/"
        cityName={cardContent?.city}
        cryptoCurrency={cardContent?.token}
        period={undefined}
        bankName={cardContent?.bank}
      />
    </div>
  );
};

export default Widget;
