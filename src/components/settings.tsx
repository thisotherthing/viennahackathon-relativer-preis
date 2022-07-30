import { useContext } from "react";
import { Incomes } from "~/assets/data";
import { Context } from "~/contexts/context";

export const Settings = () => {
  const { setReferenceIncome } = useContext(Context);

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
    </div>
  );
};
