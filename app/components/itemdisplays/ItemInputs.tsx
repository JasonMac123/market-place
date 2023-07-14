"use client";

import { useForm, FieldValues } from "react-hook-form";

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

  return (
    <div className="border-[1px]">
      <h3>{quantity}</h3>
      <h3>{price}</h3>
    </div>
  );
};

export default ItemInputs;
