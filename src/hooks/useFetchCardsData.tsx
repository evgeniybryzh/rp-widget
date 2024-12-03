import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { CardDataResponse } from "../types/types";

interface UseFetchCardDataProps {
  isWebflow: boolean;
}

const WEBFLOW_API_URL = process.env.WEBFLOW_API_URL;
const APP_API_URL = process.env.APP_API_URL;

const useFetchCardData = ({
  isWebflow = false,
}: UseFetchCardDataProps): {
  getCardData: typeof fetchData;
} => {
  const fetchData = useCallback(
    async (onSuccess?: (cardData: CardDataResponse) => void) => {
      if (!WEBFLOW_API_URL || !APP_API_URL) return;

      try {
        const response = await axios.get<CardDataResponse>(
          isWebflow ? WEBFLOW_API_URL : APP_API_URL,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.data) {
          console.error("No data received from the server");
          return;
        }

        if (response.status === 200 && onSuccess) {
          onSuccess(response?.data);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    },
    [isWebflow]
  );

  return { getCardData: fetchData };
};

export default useFetchCardData;
