import { parse } from "csv-parse/sync";
import preise from "~/assets/preise.csv";

export type ComparisonItem = {
  category: string;
  name: string;
  price: number;
  url: string;
};

export type ReferenceIncome = {
  name: string;
  value: number;
};

export const Items: ComparisonItem[] = parse(preise)
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

export const Incomes: ReferenceIncome[] = [
  { name: "Armutsgrenze", value: 12000 },
  { name: "Mindesteinkommen", value: 20000 },
];
