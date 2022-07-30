import { useContext } from "react";
import { styled } from "twin.macro";
import { ComparisonItem } from "~/assets/data";
import { Context } from "~/contexts/context";
import { getAdjustedPrice } from "~/utils/priceCalc";

type Props = {
  item: ComparisonItem;
};

const formatNumber = (v: number): string => {
  return v < 10 ? v.toFixed(2) : v.toFixed(0);
};

export const Item = (props: Props) => {
  const { income, referenceIncome, federalState } = useContext(Context);

  const adjusted = getAdjustedPrice(props.item, referenceIncome, income);

  if (props.item.federalStateFilter !== undefined && props.item.federalStateFilter !== federalState) return null;

  return (
    <section tw="font-bold relative w-full md:width[calc(50% - 10px)] mb-20">
      <div tw="border-radius[26px] border-2 border-dashed border-black w-full h-full absolute transform[scale(0.99)]" />
      <div tw="flex flex-row items-center transform hover:-translate-x-7 hover:-translate-y-7 border-radius[26px] border-2 border-black p-16 pr-28 w-full background[white] transition transition-transform">
        <div
          tw="aspect-ratio[1] width[100px] border-radius[20px] overflow-hidden mr-26 flex-shrink-0 flex justify-center items-center"
          style={{ background: `#${props.item.color}` || "green" }}
        >
          <img tw="w-60" src={`/icons/${props.item.icon}.svg`} alt={`${props.item.name} icon`} aria-hidden />
        </div>

        <div tw="flex flex-col w-full truncate">
          <h3 tw="truncate mb-8 font-size[14px] md:font-size[18px]">
            <a tw="underline" target="_blank" rel="noopener noreferrer" href={props.item.url}>
              {props.item.name}
            </a>
          </h3>
          <div tw="w-full flex flex-row justify-between font-size[16px] md:font-size[22px]">
            <span>{formatNumber(props.item.price)} €</span>
            <span>{"-->"}</span>
            <span>{formatNumber(adjusted.adjustedPrice)} €</span>
          </div>
        </div>
      </div>
    </section>
  );
};
