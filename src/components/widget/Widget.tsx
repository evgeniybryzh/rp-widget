import classNames from "classnames";
import { FC, useEffect } from "react";
import WidgetCard from "../common//widget-card/WidgetCard";
import styles from "./Widget.module.scss";
import useWidget from "../../hooks/useWidget";
import { getCTALinks } from "../../utils/functions";

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
        CTALink={getCTALinks(cardContent?.type, isWebflow)}
        cityName={cardContent?.city}
        cryptoCurrency={cardContent?.token}
        period={"Yesterday/Today"}
        bankName={cardContent?.bank}
        countryName={cardContent?.country}
      />
    </div>
  );
};

export default Widget;
