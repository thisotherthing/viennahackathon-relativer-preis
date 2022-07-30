import { useContext } from "react";
import { styled } from "twin.macro";
import { ComparisonItem } from "~/assets/data";
import { Context } from "~/contexts/context";
import { getAdjustedPrice } from "~/utils/priceCalc";

type Props = {
  item: ComparisonItem;
};

const Row = styled.tr`
  &:nth-child(2n) {
    background: rgba(0, 0, 0, 0.05);
  }

  td:first-child {
    text-align: start;
    padding: 0.4em 0;
    padding-left: 1em;
  }
  td:last-child {
    text-align: end;
    padding-left: 2em;
    padding-right: 1em;
  }
`;

export const Item = (props: Props) => {
  const { income, referenceIncome, federalState } = useContext(Context);

  const adjusted = getAdjustedPrice(props.item, referenceIncome, income);

  if (props.item.federalStateFilter !== undefined && props.item.federalStateFilter !== federalState) return null;

  return (
    <div tw="flex justify-between">
      <span tw="w-4">{props.item.name}</span>
      <span>{props.item.price}</span>
      <span>wäre</span>
      <span>{adjusted.adjustedPrice.toFixed(2)}</span>
    </div>
  );
};
