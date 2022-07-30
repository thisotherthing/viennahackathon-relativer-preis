import { useContext } from "react";
import { Context } from "~/contexts/context";

export const Slider = () => {
  const { income, setIncome } = useContext(Context);

  return (
    <div>
      <div tw="container flex justify-between">
        <label tw="text-[30px]" htmlFor="_income_slider">
          Monatliches Netto-Einkommen:
        </label>
        <span tw="text-[30px]">{income} €</span>
      </div>
      <input
        type="range"
        id="_income_slider"
        name="volume"
        min="0"
        max="65000"
        tw="w-full cursor-pointer outline-none "
        onChange={(v) => {
          if (v.target && setIncome !== undefined) {
            setIncome(parseFloat(v.target.value) || 0);
          }
        }}
      />
    </div>
  );
};
