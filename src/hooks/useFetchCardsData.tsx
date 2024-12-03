import axios from "axios";
import { useCallback, useEffect, useState } from "react";

interface UseFetchCardDataProps {
  isWebflow: boolean;
  hideWidget?: () => void;
}

export interface CardDataResponse {
  type: string | null;
  city: string | null;
  country: string | null;
  bank: string | null;
  token: string | null;
}

const WEBFLOW_API_URL = process.env.WEBFLOW_API_URL;
const APP_API_URL = process.env.APP_API_URL;

const useFetchCardData = ({
  isWebflow = false,
  hideWidget,
}: UseFetchCardDataProps): {
  cardData: CardDataResponse | undefined;
  getCardData: typeof fetchData;
} => {
  const [cardData, setCardData] = useState<CardDataResponse | undefined>(
    undefined
  );

  const fetchData = useCallback(
    async (onSuccess?: (cardData: CardDataResponse) => void) => {
      if (!WEBFLOW_API_URL || !APP_API_URL || !hideWidget) return;

      hideWidget();

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

        if (response.status === 200) {
          setCardData(response.data);
        }

        if (response.status === 200 && onSuccess) {
          onSuccess(response?.data);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    },
    [isWebflow, hideWidget]
  );

  return { cardData, getCardData: fetchData };
};

export default useFetchCardData;
