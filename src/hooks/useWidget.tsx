import React, { useCallback, useEffect, useState } from "react";
import {
  INITIAL_START_DELAY,
  REFETCH_CARD_DELAY,
} from "../constants/constants";
import useFetchCardsData, { CardDataResponse } from "./useFetchCardsData";

const useWidget = ({ isWebflow = false }: { isWebflow: boolean }) => {
  const [cardContent, setCardContent] = useState<
    CardDataResponse | undefined
  >();
  const [isShown, setIsShown] = useState(false);

  const hideWidget = useCallback(() => {
    setIsShown(false);
  }, [setIsShown]);

  const showWidget = useCallback(() => {
    setIsShown(true);
  }, [setIsShown]);

  const { cardData, getCardData } = useFetchCardsData({
    isWebflow,
    hideWidget,
  });

  const onFetchSuccess = useCallback(
    (cardsData: CardDataResponse) => {
      if (cardsData) {
        console.log("cardsData: ", cardsData);
        setCardContent(cardsData);
        showWidget();
      }

      if (true) {
        setTimeout(() => {
          getCardData(onFetchSuccess);
        }, REFETCH_CARD_DELAY);
      }
    },
    [getCardData, showWidget]
  );

  // Initial cardData fetch
  useEffect(() => {
    if (!isShown) {
      setTimeout(() => {
        getCardData(onFetchSuccess);
      }, INITIAL_START_DELAY);
    }
  }, []);

  return { isShown, hideWidget, cardContent };
};

export default useWidget;
