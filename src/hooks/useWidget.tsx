import React, { useCallback, useEffect, useState } from "react";
import { INITIAL_START_DELAY } from "../constants/constants";
import useGetGoogleData from "./useGetGoogleData";
import { normalizeGoogleSheetsData } from "../utils/functions";
import { CardDataType } from "../types/types";

const useWidget = () => {
  const [cardsData, setCardsData] = useState<CardDataType[]>([]);
  const [isShown, setIsShown] = useState(false);
  const { googleData } = useGetGoogleData();

  // Generate common cards data
  useEffect(() => {
    if (googleData && !!googleData.length) {
      setCardsData([...normalizeGoogleSheetsData(googleData)]);
    }
  }, [googleData]);

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

  return { isShown, hideWidget, cardsData };
};

export default useWidget;
