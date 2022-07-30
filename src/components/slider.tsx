import { useContext } from "react";
import { Context } from "~/contexts/context";

export const Slider = () => {
  const { income, setIncome } = useContext(Context);

  return (
    <div>
      <label htmlFor="_income_slider">Einkommen</label>
      <input
        type="range"
        id="_income_slider"
        name="volume"
        min="0"
        max="65000"
        onChange={(v) => {
          if (v.target && setIncome !== undefined) {
            setIncome(parseFloat(v.target.value) || 0);
          }
        }}
      />
      {income}
    </div>
  );
};
