import { useContext } from "react";
import { federalStates, Incomes } from "~/assets/data";
import { Context } from "~/contexts/context";

export const Settings = () => {
  const { setReferenceIncome, federalState, setFederalState } = useContext(Context);

  return (
    <div tw="space-y-10 mb-40">
      {/* <div tw="flex justify-between ">
        <label htmlFor="reference-income">Vergleichseinkommen</label>
        <select
          tw="border-2 rounded"
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
      </div> */}
      <div tw="flex justify-between">
        <label htmlFor="federal-state">Bundesland</label>
        <select
          tw="border-2 rounded"
          name="Bundesland"
          id="federal-state"
          value={federalState}
          onChange={(v) => {
            if (v.target && setReferenceIncome !== undefined) {
              setFederalState(v.target.value || "");
            }
          }}
        >
          {federalStates.map((state) => (
            <option value={state} key={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
