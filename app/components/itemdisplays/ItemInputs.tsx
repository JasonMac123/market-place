"use client";

import { useForm, FieldValues, SubmitHandler, Field } from "react-hook-form";

import QuantityCounter from "../Input/QuantityCounter";
import MultiSelect from "../Input/MultiSelect";
import Button from "../Input/Button";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { toast } from "react-toastify";

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

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (option === null) {
      toast.error("Please choose an option type");
      return;
    }
  };

  return (
    <div className="border-[1px]">
      <h3>{quantity}</h3>
      <h3>{price}</h3>
      <MultiSelect
        optionList={options}
        value={option}
        onChange={(value) => setFormValue("option", value)}
      />
      <QuantityCounter
        title="How many?"
        maxValue={quantity}
        value={counter}
        onChange={(value) => setFormValue("counter", value)}
      />
      <Button
        label="Add to Cart"
        Icon={AiOutlineShoppingCart}
        onClick={handleSubmit(onSubmit)}
      />
    </div>
  );
};

export default ItemInputs;
