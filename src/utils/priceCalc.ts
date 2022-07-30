import { ComparisonItem } from "~/assets/data";

export const getAdjustedPrice = (
  item: { price: number },
  referenceIncome: number,
  income: number
): { adjustedPrice: number } => {
  let adjustedPrice = item.price / referenceIncome;

  adjustedPrice *= income;

  return {
    adjustedPrice,
  };
};
