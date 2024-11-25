import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { parseCSV } from "../utils/functions";
import { GoogleSheetsInterface } from "../types/types";

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQelfzeHUcGzI9NTtQ6q5b9V6KpeIeoVrURPeIy2LNO8iGQa3l_K9GsY0Zk_THBtsBA0jxeNJFV0It4/pub?output=csv"; // Replace with your Google Sheets CSV file URL

const useGetGoogleData = () => {
  const [csvData, setCsvData] = useState<GoogleSheetsInterface[]>([]);

  const fetchCSVData = useCallback(async () => {
    try {
      const response = await axios.get(CSV_URL);
      const parsedCsvData = parseCSV(response.data);
      setCsvData(parsedCsvData);
    } catch (error) {
      console.error("Failed to fetch CSV data", error);
    }
  }, []);

  useEffect(() => {
    fetchCSVData();
  }, []);

  return { googleData: csvData };
};

export default useGetGoogleData;
