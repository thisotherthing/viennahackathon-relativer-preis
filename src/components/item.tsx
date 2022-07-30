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
    <section tw="flex flex-row items-center border-radius[30px] border border-black p-16 pr-40 mb-20 w-full md:width[calc(50% - 10px)] font-bold">
      <div
        tw="aspect-ratio[1] width[100px] border-radius[20px] overflow-hidden mr-30 flex-shrink-0 flex justify-center items-center"
        style={{ background: `#${props.item.color}` || "green" }}
      >
        <img tw="w-60" src={`/icons/${props.item.icon}.svg`} alt={`${props.item.name} icon`} aria-hidden />
      </div>

      <div tw="flex flex-col w-full truncate">
        <h3 tw="truncate mb-8 font-size[18px]">
          <a tw="underline" target="_blank" rel="noopener noreferrer" href={props.item.url}>
            {props.item.name}
          </a>
        </h3>
        <div tw="w-full flex flex-row justify-between font-size[22px]">
          <span>{props.item.price} €</span>
          <span>{"-->"}</span>
          <span>{adjusted.adjustedPrice.toFixed(2)} €</span>
        </div>
      </div>
    </section>
  );
};
