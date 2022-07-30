import styled from "styled-components";
import { ComparisonItem } from "~/assets/data";
import { Item } from "./item";

type Props = {
  items: ComparisonItem[];
};

const Table = styled.table`
  tr:nth-child(2n) {
    background: rgba(0, 0, 0, 0.05);
  }

  th:first-child,
  td:first-child {
    text-align: start;
    padding: 0.4em 0;
    padding-left: 1em;
  }
  th:nth-child(2),
  td:nth-child(2) {
    width: 6em;
    text-align: end;
    padding-right: 2em;
  }
  th:last-child,
  td:last-child {
    text-align: end;
    padding-left: 2em;
    width: 6em;
    padding-right: 1em;
  }
`;

export const ItemList = (props: Props) => {
  return (
    <Table tw="width[calc(100% + 2em)] transform[translateX(-1em)] mt-30 mb-80">
      <tr>
        <th>Produkt</th>
        <th>Preis</th>
        <th> </th>
        <th>Angepasst</th>
      </tr>
      {props.items.map((item, i) => (
        <Item item={item} key={`${item.name} ${i}`} />
      ))}
    </Table>
  );
};
