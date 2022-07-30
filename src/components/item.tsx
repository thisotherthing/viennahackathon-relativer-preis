import { useContext } from "react";
import { ComparisonItem } from "~/assets/data";
import { Context } from "~/contexts/context";
import { getAdjustedPrice } from "~/utils/priceCalc";

type Props = {
  item: ComparisonItem;
};

export const Item = (props: Props) => {
  const { income, referenceIncome, federalState } = useContext(Context);

  const adjusted = getAdjustedPrice(props.item, referenceIncome, income);

  if (props.item.federalStateFilter !== undefined && props.item.federalStateFilter !== federalState) return null;

  return (
    <div>
      <span>{props.item.name}</span>
      <span>{props.item.price}</span>
      <span>wäre</span>
      <span>{adjusted.adjustedPrice.toFixed(2)}</span>
    </div>
  );
};
