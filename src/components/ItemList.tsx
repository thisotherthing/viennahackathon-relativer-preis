import { ComparisonItem } from "~/assets/data";
import { Item } from "./item";

type Props = {
  items: ComparisonItem[];
};

export const ItemList = (props: Props) => {
  const categories = [...new Set(props.items.map((item) => item.category))];

  return (
    <div tw="mt-30 mb-80 flex flex-row flex-wrap justify-between">
      {categories.map((category) => (
        <div tw="w-full flex flex-row flex-wrap justify-between">
          <h2
            tw="w-full mb-14 mt-14 md:ml-36 font-size[24px] font-black text-center md:text-left"
            // style={{ color: `#${props.items.find((item) => item.category === category).color}` }}
          >
            {category}
          </h2>
          {props.items
            .filter((item) => item.category === category)
            .map((item, i) => (
              <Item item={item} key={`${item.name} ${i}`} />
            ))}
        </div>
      ))}
    </div>
  );
};
