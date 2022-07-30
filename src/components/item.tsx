import { useContext } from "react";
import { styled } from "twin.macro";
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
    <tr>
      <td>
        <a tw="underline" target="_blank" rel="noopener noreferrer" href={props.item.url}>
          {props.item.name}
        </a>
      </td>
      <td>{props.item.price}</td>
      <td>wäre</td>
      <td>{adjusted.adjustedPrice.toFixed(2)}</td>
    </tr>
  );
};
