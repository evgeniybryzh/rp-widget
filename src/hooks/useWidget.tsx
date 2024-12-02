import React, { useCallback, useEffect, useState } from "react";
import { INITIAL_START_DELAY } from "../constants/constants";
import useGetGoogleData from "./useGetGoogleData";
import { normalizeGoogleSheetsData } from "../utils/functions";
import { CardDataType } from "../types/types";
import useFetchCardsData from "./useFetchCardsData";

const useWidget = ({ isWebflow = false }: { isWebflow: boolean }) => {
  const [cardsContent, setCardsContent] = useState<CardDataType[]>([]);
  const [isShown, setIsShown] = useState(false);
  const { googleData } = useGetGoogleData();
  const { cardsData } = useFetchCardsData({ isWebflow });

  // Generate common cards data
  useEffect(() => {
    if (googleData && !!googleData.length) {
      setCardsContent([...normalizeGoogleSheetsData(googleData)]);
    }
  }, [googleData]);

  // Show widget after a delay (initial)
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

  return { isShown, hideWidget, cardsContent };
};

export default useWidget;
