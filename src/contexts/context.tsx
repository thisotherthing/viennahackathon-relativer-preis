import * as React from "react";
import { Incomes } from "~/assets/data";

export const Context = React.createContext<ContextType>({
  income: -1,
  referenceIncome: -1,
  setIncome: () => {},
  setReferenceIncome: () => {},
});

export type ContextType = {
  income: number;
  setIncome: (v: number) => void;
  referenceIncome: number;
  setReferenceIncome: (v: number) => void;
};

export const ContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [income, setIncome] = React.useState(25000);
  const [referenceIncome, setReferenceIncome] = React.useState(Incomes[0]!.value);
  return (
    <Context.Provider value={{ income, setIncome, referenceIncome, setReferenceIncome }}>{children}</Context.Provider>
  );
};
