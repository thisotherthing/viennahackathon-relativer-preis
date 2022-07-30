import { ComparisonItem } from "~/assets/data";
import { Item } from "./item";

type Props = {
  items: ComparisonItem[];
};

export const ItemList = (props: Props) => {
  return (
    <div tw="mt-30 mb-80 flex flex-row flex-wrap justify-between">
      {props.items.map((item, i) => (
        <Item item={item} key={`${item.name} ${i}`} />
      ))}
    </div>
  );
};
