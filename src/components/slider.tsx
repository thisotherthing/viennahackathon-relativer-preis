import { useContext } from "react";
import { styled } from "twin.macro";
import { Context } from "~/contexts/context";

const Input = styled.input`
  & {
    height: 28px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
  }
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #000000;
    border-radius: 4px;
    border: 1px solid #000000;
  }
  &::-webkit-slider-thumb {
    box-shadow: 0px 0px 1px #000000;
    border: 2px solid #000000;
    height: 20px;
    width: 20px;
    border-radius: 18px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -10px;
  }
  &:focus::-webkit-slider-runnable-track {
    background: #000000;
  }
  &::-moz-range-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #000000;
    border-radius: 4px;
    border: 0px solid #000000;
  }
  &::-moz-range-thumb {
    box-shadow: 0px 0px 1px #000000;
    border: 2px solid #000000;
    height: 20px;
    width: 20px;
    border-radius: 18px;
    background: #ffffff;
    cursor: pointer;
  }
  &::-ms-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  &::-ms-fill-lower {
    background: #000000;
    border: 1px solid #000000;
    border-radius: 8px;
    box-shadow: 0px 0px 0px #000000;
  }
  &::-ms-fill-upper {
    background: #000000;
    border: 1px solid #000000;
    border-radius: 8px;
    box-shadow: 0px 0px 0px #000000;
  }
  &::-ms-thumb {
    margin-top: 1px;
    box-shadow: 0px 0px 1px #000000;
    border: 2px solid #000000;
    height: 20px;
    width: 20px;
    border-radius: 18px;
    background: #ffffff;
    cursor: pointer;
  }
  &:focus::-ms-fill-lower {
    background: #000000;
  }
  &:focus::-ms-fill-upper {
    background: #000000;
  }
`;

export const Slider = () => {
  const { income, setIncome } = useContext(Context);

  return (
    <div>
      <div tw="container flex justify-between">
        <label tw="text-[30px]" htmlFor="_income_slider">
          Monatliches Netto-Einkommen:
        </label>
        <span tw="text-[30px] whitespace-nowrap">{income} €</span>
      </div>
      <Input
        type="range"
        id="_income_slider"
        name="volume"
        min="0"
        max="10000"
        tw="w-full cursor-pointer outline-none "
        value={income}
        onChange={(v) => {
          if (v.target && setIncome !== undefined) {
            setIncome(parseFloat(v.target.value) || 0);
          }
        }}
      />
    </div>
  );
};
