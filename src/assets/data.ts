import { parse } from "csv-parse/sync";

import preiseCsv from "~/assets/preise.csv";
import mieteCsv from "~/assets/miete.csv";
import referencesCsv from "~/assets/references.csv";

export const federalStates = [
  "Burgenland",
  "Kärnten",
  "Niederösterreich",
  "Oberösterreich",
  "Salzburg",
  "Steiermark",
  "Tirol",
  "Vorarlberg",
  "Wien",
];

export type ComparisonItem = {
  category: string;
  name: string;
  price: number;
  url: string;
  icon: string;
  color: string;
  federalStateFilter?: string;
};

export type ReferenceIncome = {
  name: string;
  value: number;
};

const prices: ComparisonItem[] = parse(preiseCsv)
  .map((line: string[]) => {
    const item: ComparisonItem = {
      category: line[0] || "",
      name: line[1] || "",
      icon: line[2] || "",
      color: line[3] || "grey",
      price: parseFloat((line[4] || "").replace(".", "").replace(",", ".")),
      url: line[5] || "",
    };
    return item;
  })
  .filter((item: ComparisonItem) => !Number.isNaN(item.price) && item.icon !== "miete");
const rents = parse(mieteCsv, { delimiter: ";" })
  .map((line: string[]) => {
    const item: ComparisonItem = {
      category: "Wohnen",
      name: `Miete warm (${line[0]})`,
      icon: "miete",
      color: "D4E9BE",
      price: parseFloat((line[2] || "").replace(",", ".")),
      url: "https://www.statistik.at/statistiken/bevoelkerung-und-soziales/wohnen/wohnkosten",
      federalStateFilter: federalStates.includes((line[0] || "").trim()) ? line[0] : undefined,
    };

    return item;
  })
  .filter((item: ComparisonItem) => !Number.isNaN(item.price));

export const Items: ComparisonItem[] = [...rents, ...prices];

export const references: { name: string; url: string }[] = parse(referencesCsv).map((line: string[]) => {
  return {
    name: line[0],
    url: line[1],
  };
});

export const Incomes: ReferenceIncome[] = [{ name: "Armutsgefährdungsschwelle", value: 1371 }];
