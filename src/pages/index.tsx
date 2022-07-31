import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useContext } from "react";
import { DefaultPage } from "~/layouts/DefaultPage";
import { ItemList } from "~/components/ItemList";

import { Slider } from "~/components/slider";
import { Incomes, Items } from "~/assets/data";
import { Context } from "~/contexts/context";
import { Settings } from "~/components/settings";
import { References } from "~/components/References";
import { getAdjustedPrice } from "~/utils/priceCalc";

interface Props {}

const DataShow = (props: { label: string; value: string }) => {
  return (
    <div tw="flex flex-col justify-end text-center font-size[0.8em] py-18 px-40 border-radius[26px] background[#ffc9b5] w-full md:width[calc(50% - 10px)] mb-20">
      <div tw="flex justify-center items-center h-full">{props.label}:</div>
      <span tw="text-[32px] font-bold mt-4 whitespace-nowrap">{props.value}</span>
    </div>
  );
};

const Index: NextPage<Props> = () => {
  const { referenceIncome, income } = useContext(Context);

  return (
    <>
      <NextSeo title="Mind the Gap – Rechner für Relative Preise" />
      <DefaultPage>
        <div tw="max-w-[92%] md:max-w-[840px] px-10 m-auto h-screen text-left text-[20px] mt-80">
          <h1 tw="text-[40px] font-black mb-20 line-height[1.1em]">
            Mind the Gap <br /> <span tw="font-size[0.65em] opacity-70">Rechner für Relative Preise</span>
          </h1>
          <Slider />
          <Settings />

          <div tw="w-full flex flex-col md:flex-row md:justify-between mt-14">
            <DataShow label={`Referenz Einkommen ${Incomes[0]?.name}`} value={`${referenceIncome.toFixed(0)} €`} />
            <DataShow
              label={`Preisveränderung`}
              value={`${getAdjustedPrice({ price: 100 }, referenceIncome, income).adjustedPrice.toFixed(1)} %`}
            />
          </div>

          {/* <div tw="flex flex-col md:flex-row justify-between mt-20 md:items-center text-left">
            <span>Referenz Einkommen {Incomes[0]?.name}:</span>
            <span tw="text-[25px] whitespace-nowrap">{referenceIncome} €</span>
          </div>

          <div tw="flex flex-col md:flex-row justify-between mt-20 md:items-center md:text-left">
            <span>Preisveränderung</span>
            <span tw="text-[25px] whitespace-nowrap">
              {getAdjustedPrice({ price: 100 }, referenceIncome, income).adjustedPrice.toFixed(1)} %
            </span>
          </div> */}
          <ItemList items={Items} />

          <References />
        </div>
      </DefaultPage>
    </>
  );
};

export default Index;
