"use client";

import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface QuantityCounterProps {
  title: string;
  value: number;
  onChange: (value: number) => void;
}

const QuantityCounter: React.FC<QuantityCounterProps> = ({
  title,
  value,
  onChange,
}) => {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const onMinus = useCallback(() => {
    if (value === 1) {
      return;
    }

    onChange(value - 1);
  }, [onChange, value]);

  return (
    <div className="flex items-center justify-between">
      <div>{title}</div>
      <div className="flex items-center space-x-4">
        <div
          onClick={onAdd}
          className="flex w-10 h-10 rounded-full border-[1px] items-center justify-center cursor-pointer transition hover:border-black"
        >
          <AiOutlinePlus />
        </div>
        <div>{value}</div>
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
