import {
  CardDataType,
  GoogleSheetsInterface,
  IGenerateCardsData,
} from "../types/types";

export const parseCSV = (csvText: string): GoogleSheetsInterface[] => {
  const rows = csvText.split(/\r?\n/); // Split CSV text into rows, handling '\r' characters
  if (rows.length < 2) {
    throw new Error("CSV must have at least a header row and one data row.");
  }

  const headers = rows[0].split(","); // Extract headers (assumes the first row is the header row)
  const data: any[] = []; // Initialize an array to store parsed data

  for (let i = 1; i < rows.length; i++) {
    if (!rows[i].trim()) continue; // Skip empty rows
    const rowData = rows[i].split(","); // Split the row, handling '\r' characters
    const rowObject: Record<string, string> = {};

    for (let j = 0; j < headers.length; j++) {
      rowObject[headers[j]] = rowData[j] || ""; // Handle missing values
    }

    data.push(rowObject);
  }

  return data;
};

export const normalizeGoogleSheetsData = (
  data: GoogleSheetsInterface[]
): CardDataType[] => {
  return data.map((item) => {
    return {
      htmlText: item.htmlText,
      ctaText: item.CTAText,
      webflowCTALink: item.WebflowCTALink,
      appCTALink: item.AppCTALink,
      iconName: item.IconName,
      cardType: item.CardType,
    };
  });
};

export const generateCardsData = ({ cardsData }: IGenerateCardsData) => {
  return cardsData;
};
