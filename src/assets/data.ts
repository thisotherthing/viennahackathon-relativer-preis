import { parse } from "csv-parse/sync";
import preise from "~/assets/preise.csv";
import miete from "~/assets/miete.csv";

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
  federalStateFilter?: string;
};

export type ReferenceIncome = {
  name: string;
  value: number;
};

const prices: ComparisonItem[] = parse(preise)
  .map((line: string[]) => {
    const item: ComparisonItem = {
      category: line[0] || "",
      name: line[1] || "",
      price: parseFloat((line[2] || "").replace(",", ".")),
      url: line[3] || "",
    };
    return item;
  })
  .filter((item: ComparisonItem) => !Number.isNaN(item.price));
const rents = parse(miete, { delimiter: ";" })
  .map((line: string[]) => {
    const item: ComparisonItem = {
      category: "Wohnen",
      name: `Miete mit Betriebskosten (${line[0]})`,
      price: parseFloat((line[2] || "").replace(",", ".")),
      url: "https://www.statistik.at/statistiken/bevoelkerung-und-soziales/wohnen/wohnkosten",
      federalStateFilter: federalStates.includes((line[0] || "").trim()) ? line[0] : undefined,
    };

    return item;
  })
  .filter((item: ComparisonItem) => !Number.isNaN(item.price));
console.log(rents);

export const Items: ComparisonItem[] = [...rents, ...prices];

export const Incomes: ReferenceIncome[] = [
  { name: "Armutsgrenze", value: 12000 },
  { name: "Mindesteinkommen", value: 20000 },
];
