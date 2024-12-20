import { CTA_LINKS } from "../constants/constants";
import { CategoryType } from "../types/types";

export const getCTALinks = (
  category: CategoryType | null | undefined,
  isWebflow: boolean
) => {
  if (!category) return "https://www.relaypay.io/";
  return CTA_LINKS?.[category]?.[isWebflow ? "webflow" : "app"];
};
