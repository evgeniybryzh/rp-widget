import classNames from "classnames";
import { FC } from "react";
import WidgetCard from "../../common/WidgetCard";
import styles from "./Widget.module.scss";
import useWidget from "../../../hooks/useWidget";

interface WidgetProps {
  isWebflow: boolean;
}

const Widget: FC<WidgetProps> = ({ isWebflow }) => {
  const { hideWidget, isShown, cardsData } = useWidget();

  console.log(cardsData);

  return (
    <div className={classNames(styles.widget, isShown && styles.shown)}>
      <WidgetCard hideWidget={hideWidget} isWebflow={isWebflow} />
    </div>
  );
};

export default Widget;
