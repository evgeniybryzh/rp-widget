import axios from "axios";
import { useEffect, useState } from "react";

interface UseFetchCardsDataProps {
  isWebflow: boolean;
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
}: UseFetchCardsDataProps): { cardsData: Response[] | undefined } => {
  const [cardsData, setCardsData] = useState<Response[] | undefined>(undefined);

  useEffect(() => {
    if (!WEBFLOW_API_URL || !APP_API_URL) return;

    const fetchData = async () => {
      try {
        const response = await axios.get<Response[]>(
          isWebflow ? WEBFLOW_API_URL : APP_API_URL,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setCardsData(response.data); // set the state with the response data
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData(); // Trigger fetch when the component is mounted or the props change
  }, [isWebflow]); // Dependency array ensures the fetch happens when `isWebflow` changes

  return { cardsData };
};

export default useFetchCardsData;
