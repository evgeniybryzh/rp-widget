import { CTA_LINKS } from "../constants/constants";
import { CategoryType, GoogleSheetsInterface } from "../types/types";

// Parse CSV text into an array of objects
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

export const getCTALinks = (
  category: CategoryType | null | undefined,
  isWebflow: boolean
) => {
  if (!category) return "https://www.relaypay.io/";
  return CTA_LINKS?.[category]?.[isWebflow ? "webflow" : "app"];
};
