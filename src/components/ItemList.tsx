import { ComparisonItem } from "~/assets/data";
import { Item } from "./item";

type Props = {
  items: ComparisonItem[];
};

export const ItemList = (props: Props) => {
  return (
    <div>
      {props.items.map((item, i) => (
        <Item item={item} key={`${item.name} ${i}`} />
      ))}
    </div>
  );
};
