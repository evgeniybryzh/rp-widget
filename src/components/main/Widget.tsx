import classNames from "classnames";
import React, { FC, useCallback, useEffect, useState } from "react";
import WidgetCard from "../common/WidgetCard";
import styles from "./Widget.module.scss";
import { INITIAL_START_DELAY } from "../../constants/constants";

interface WidgetProps {
  isWebflow: boolean;
}

const Widget: FC<WidgetProps> = ({ isWebflow }) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (!isShown) {
      setTimeout(() => {
        setIsShown(true);
      }, INITIAL_START_DELAY);
    }
  }, [isShown]);

  const hideWidget = useCallback(() => {
    setIsShown(false);
  }, [setIsShown]);

  return (
    <div className={classNames(styles.widget, isShown && styles.shown)}>
      <WidgetCard hideWidget={hideWidget} isWebflow={isWebflow} />
    </div>
  );
};

export default Widget;
