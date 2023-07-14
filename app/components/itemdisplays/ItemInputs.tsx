"use client";

import { useForm, FieldValues } from "react-hook-form";
import QuantityCounter from "../Input/QuantityCounter";

interface ItemInputsProps {
  quantity: number;
  price: number;
  options: [];
}

const ItemInputs: React.FC<ItemInputsProps> = ({
  quantity,
  price,
  options,
}) => {
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      counter: 1,
      option: null,
    },
  });

  const counter = watch("counter");
  const option = watch("option");

  const setFormValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  return (
    <div className="border-[1px]">
      <h3>{quantity}</h3>
      <h3>{price}</h3>
      <QuantityCounter
        title="How many?"
        maxValue={quantity}
        value={counter}
        onChange={(value) => setFormValue("counter", value)}
      />
    </div>
  );
};

export default ItemInputs;
