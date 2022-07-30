import { ComparisonItem } from "~/assets/data";
import { Item } from "./item";

type Props = {
  items: ComparisonItem[];
};

export const ItemList = (props: Props) => {
  return (
    <table tw="m-auto mt-30 mb-80">
      {props.items.map((item, i) => (
        <Item item={item} key={`${item.name} ${i}`} />
      ))}
    </table>
  );
};
