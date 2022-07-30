import { useContext } from "react";
import { federalStates, Incomes } from "~/assets/data";
import { Context } from "~/contexts/context";

export const Settings = () => {
  const { setReferenceIncome, setFederalState } = useContext(Context);

  return (
    <div>
      <label htmlFor="reference-income">Vergleichseinkommen</label>
      <select
        name="Vergleichseinkommen"
        id="reference-income"
        onChange={(v) => {
          if (v.target && setReferenceIncome !== undefined) {
            setReferenceIncome(parseFloat(v.target.value) || 0);
          }
        }}
      >
        {Incomes.map((income) => (
          <option value={income.value}>{`${income.name} (${income.value})`}</option>
        ))}
      </select>

      <label htmlFor="federal-state">Bundesland</label>
      <select
        name="Bundesland"
        id="federal-state"
        onChange={(v) => {
          if (v.target && setReferenceIncome !== undefined) {
            setFederalState(v.target.value || "");
          }
        }}
      >
        {federalStates.map((state) => (
          <option value={state}>{state}</option>
        ))}
      </select>
    </div>
  );
};
