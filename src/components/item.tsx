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
    <Row>
      <td>{props.item.name}</td>
      <td>{props.item.price}</td>
      <td>wäre</td>
      <td>{adjusted.adjustedPrice.toFixed(2)}</td>
    </Row>
  );
};
