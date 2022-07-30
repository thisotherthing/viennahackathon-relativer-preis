import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useContext } from "react";
import { DefaultPage } from "~/layouts/DefaultPage";
import { ItemList } from "~/components/ItemList";

import { Slider } from "~/components/slider";
import { Items } from "~/assets/data";
import { Context } from "~/contexts/context";

interface Props {}

const Index: NextPage<Props> = () => {
  const { referenceIncome } = useContext(Context);

  return (
    <>
      <NextSeo title="Relative Preise" />
      <DefaultPage>
        <div tw="container m-auto text-center">
          <h1 tw="text-lg font-black">Relative Preise</h1>
          <Slider />
          Referenz Einkommen: {referenceIncome}
          <ItemList items={Items} />
        </div>
      </DefaultPage>
    </>
  );
};

export default Index;
