import classNames from "classnames";
import { FC } from "react";
import WidgetCard from "../common//widget-cards/WidgetCard";
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
        category={cardContent?.template}
        hideWidget={hideWidget}
        isWebflow={isWebflow}
        // CTALink={getCTALinks(cardContent?.template, isWebflow)}
        CTALink={
          (isWebflow
            ? cardContent?.anonymousLink
            : cardContent?.loggedInLink) || ""
        }
        cityName={cardContent?.city}
        cryptoCurrency={cardContent?.coinName}
        period={cardContent?.timeline}
        bankName={cardContent?.bank}
        countryName={cardContent?.country}
        coinSymbol={cardContent?.coinSymbol}
        title={cardContent?.title}
        text={cardContent?.text}
      />
    </div>
  );
};

export default Widget;
