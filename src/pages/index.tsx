import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useContext } from "react";
import { DefaultPage } from "~/layouts/DefaultPage";
import { ItemList } from "~/components/ItemList";

import { Slider } from "~/components/slider";
import { Items } from "~/assets/data";
import { Context } from "~/contexts/context";
import { Settings } from "~/components/settings";

interface Props {}

const Index: NextPage<Props> = () => {
  const { referenceIncome } = useContext(Context);

  return (
    <>
      <NextSeo title="Relative Preise" />
      <DefaultPage>
        <div tw="max-w-[92%] md:max-w-[40%] m-auto text-center h-screen items-center text-[20px] mt-80">
          <h1 tw="text-[40px] font-black ">Relative Preise</h1>
          <Slider />
          <Settings />
          <div tw="flex justify-between mt-20 items-center">
            <span>Referenz Einkommen:</span>
            <span tw="text-[25px]">{referenceIncome} €</span>
          </div>
          <ItemList items={Items} />
        </div>
      </DefaultPage>
    </>
  );
};

export default Index;
