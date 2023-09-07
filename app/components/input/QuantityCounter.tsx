"use client";

import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { toast } from "react-toastify";

interface QuantityCounterProps {
  maxValue: number;
  title: string;
  value: number;
  onChange: (value: number) => void;
}

const QuantityCounter: React.FC<QuantityCounterProps> = ({
  title,
  value,
  onChange,
  maxValue,
}) => {
  const onAdd = useCallback(() => {
    if (value === maxValue) {
      return;
    }

    onChange(value + 1);
  }, [onChange, value]);

  const onMinus = useCallback(() => {
    if (value < 1) {
      return;
    }
    onChange(value - 1);
  }, [onChange, value]);

  const changeValue = useCallback(
    (value: string) => {
      console.log(value);
      const number = parseInt(value, 10);
      console.log(number);
      if (!number) {
        onChange(0);
        return;
      }

      if (number > maxValue) {
        return;
      }
      onChange(number);
    },
    [onChange]
  );

  return (
    <div className="flex items-center justify-between">
      <div className="text-xl">{title}</div>
      <div className="flex items-center justify-end space-x-4">
        <div
          onClick={onAdd}
          className="hidden md:flex lg:hidden xl:flex w-10 h-10 rounded-full border-[1px] items-center justify-center cursor-pointer transition hover:border-black"
        >
          <AiOutlinePlus />
        </div>
        <input
          className="border-[1px] px-8 py-4 focus:border-blue-200 w-1/2 text-center min-w-[5rem]"
          type="number"
          value={value}
          onChange={(e: any) => changeValue(e.target.value)}
        />
        <div
          onClick={onMinus}
          className="hidden md:flex lg:hidden xl:flex w-10 h-10 rounded-full border-[1px] items-center justify-center cursor-pointer transition hover:border-black"
        >
          <AiOutlineMinus />
        </div>
      </div>
    </div>
  );
};

export default QuantityCounter;
