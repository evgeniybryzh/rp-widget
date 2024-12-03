import axios from "axios";
import { useCallback, useEffect, useState } from "react";

interface UseFetchCardsDataProps {
  isWebflow: boolean;
  onSuccess?: () => void;
}

interface Response {
  type: string | null;
  city: string | null;
  country: string | null;
  bank: string | null;
  token: string | null;
}

const WEBFLOW_API_URL = process.env.WEBFLOW_API_URL;
const APP_API_URL = process.env.APP_API_URL;

const useFetchCardsData = ({
  isWebflow = false,
  onSuccess,
}: UseFetchCardsDataProps): {
  cardsData: Response[] | undefined;
  refetch: () => void;
} => {
  const [cardsData, setCardsData] = useState<Response[] | undefined>(undefined);

  const fetchData = useCallback(async () => {
    if (!WEBFLOW_API_URL || !APP_API_URL) return;

    try {
      const response = await axios.get<Response[]>(
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
        setCardsData(response.data);
      }

      if (response.status === 200 && onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }, []);

  useEffect(() => {
    fetchData(); // Trigger fetch when the component is mounted or the props change
  }, [isWebflow]); // Dependency array ensures the fetch happens when `isWebflow` changes

  return { cardsData, refetch: fetchData };
};

export default useFetchCardsData;
