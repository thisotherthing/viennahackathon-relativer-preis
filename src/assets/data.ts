export type ComparisonItem = {
  name: string;
  price: number;
};

export type ReferenceIncome = {
  name: string;
  value: number;
};

export const Items: ComparisonItem[] = [
  { name: "Benzin", price: 2.0 },
  { name: "Essen", price: 8.0 },
];

export const Incomes: ReferenceIncome[] = [
  { name: "Armutsgrenze", value: 12000 },
  { name: "Mindesteinkommen", value: 20000 },
];
