import { useCallback, useEffect, useState } from "react";
import {
  INITIAL_START_DELAY,
  REFETCH_CARD_DELAY,
  SESSION_STORAGE_NAME,
} from "../constants/constants";
import useFetchCardsData from "./useFetchCardsData";
import { CardDataResponse } from "../types/types";

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

  const customerHideWidgetClick = useCallback(() => {
    sessionStorage.setItem(SESSION_STORAGE_NAME, "false");
    hideWidget();
  }, [hideWidget]);

  const { getCardData } = useFetchCardsData({
    isWebflow,
  });

  const onFetchSuccess = useCallback(
    (cardsData: CardDataResponse) => {
      const shouldShowWidget = JSON.parse(
        sessionStorage.getItem(SESSION_STORAGE_NAME) || "{}"
      );

      // Check if widget should be shown
      if (Boolean(shouldShowWidget)) {
        if (cardsData) {
          setCardContent(cardsData || {});
          showWidget();
        }

        // Fetch new card data after some time
        setTimeout(() => {
          hideWidget();
          setTimeout(() => {
            console.log(123);

            getCardData(onFetchSuccess);
          }, 1000);
        }, REFETCH_CARD_DELAY);
      }
    },
    [getCardData, showWidget, hideWidget]
  );

  // Initial cardData fetch
  useEffect(() => {
    const shouldShowWidget = JSON.parse(
      sessionStorage.getItem(SESSION_STORAGE_NAME) || "{}"
    );

    if (!isShown && Boolean(shouldShowWidget)) {
      setTimeout(() => {
        console.log(111);

        getCardData(onFetchSuccess);
      }, INITIAL_START_DELAY);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Set sessionStorage to true on first render
  useEffect(() => {
    if (!sessionStorage.getItem(SESSION_STORAGE_NAME)) {
      sessionStorage.setItem(SESSION_STORAGE_NAME, "true");
    }
  }, []);

  return { isShown, hideWidget: customerHideWidgetClick, cardContent };
};

export default useWidget;
