import axios from "axios";
import { useCallback } from "react";
import { CardDataResponse } from "../types/types";

interface UseFetchCardDataProps {
  isWebflow: boolean;
}

const ACCESS_TOKEN = "ACCESS_TOKEN";

const WEBFLOW_API_URL = process.env.REACT_APP_WEBFLOW_API_URL;
const APP_API_URL = process.env.REACT_APP_APP_API_URL;

export const axiosClient = axios.create();

axiosClient.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem(ACCESS_TOKEN)?.replaceAll('"', "");
    const isPrivate = APP_API_URL?.includes("/private");

    if (accessToken && accessToken !== "null" && isPrivate) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      delete config.headers.Authorization;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const useFetchCardData = ({
  isWebflow = false,
}: UseFetchCardDataProps): {
  getCardData: typeof fetchData;
} => {
  const fetchData = useCallback(
    async (onSuccess?: (cardData: CardDataResponse) => void) => {
      if (!WEBFLOW_API_URL || !APP_API_URL) return;

      try {
        const response = await axiosClient.get<CardDataResponse>(
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
