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
    onChange(value + 1);
  }, [onChange, value]);

  const onMinus = useCallback(() => {
    if (value === 1) {
      toast.error("Cannot order less than 1");
      return;
    }

    if (value === maxValue) {
      toast.error("Cannot order more as this is max quantity");
    }

    onChange(value - 1);
  }, [onChange, value]);

  return (
    <div className="flex items-center justify-between">
      <div className="text-xl">{title}</div>
      <div className="flex items-center space-x-4">
        <div
          onClick={onAdd}
          className="flex w-10 h-10 rounded-full border-[1px] items-center justify-center cursor-pointer transition hover:border-black"
        >
          <AiOutlinePlus />
        </div>
        <div className="border-[1px] p-4">{value}</div>
        <div
          onClick={onMinus}
          className="flex w-10 h-10 rounded-full border-[1px] items-center justify-center cursor-pointer transition hover:border-black"
        >
          <AiOutlineMinus />
        </div>
      </div>
    </div>
  );
};

export default QuantityCounter;
