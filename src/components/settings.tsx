import { useContext } from "react";
import { styled } from "twin.macro";
import { federalStates, Incomes } from "~/assets/data";
import { Context } from "~/contexts/context";

const Select = styled.select`
  background-image: linear-gradient(45deg, transparent 50%, black 50%),
    linear-gradient(135deg, black 50%, transparent 50%);
  background-position: calc(100% - 20px) calc(1em - 3px), calc(100% - 15px) calc(1em - 3px);
  background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
  background-repeat: no-repeat;
`;

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
        <Select
          tw="relative border-2 border-radius[26px] px-8 py-4 pl-16 pr-34 bg-white -webkit-appearance[none] -moz-appearance[none]"
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
        </Select>
      </div>
    </div>
  );
};
