import { useContext } from "react";
import { ComparisonItem } from "~/assets/data";
import { Context } from "~/contexts/context";
import { getAdjustedPrice } from "~/utils/priceCalc";

type Props = {
  item: ComparisonItem;
};

export const Item = (props: Props) => {
  const { income, referenceIncome } = useContext(Context);

  const adjusted = getAdjustedPrice(props.item, referenceIncome, income);

  return (
    <div>
      {props.item.name}
      {props.item.price}
      wäre
      {adjusted.adjustedPrice.toFixed(2)}
    </div>
  );
};
