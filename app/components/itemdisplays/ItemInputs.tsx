"use client";

import { useForm, FieldValues, SubmitHandler, Field } from "react-hook-form";

import QuantityCounter from "../Input/QuantityCounter";
import MultiSelect from "../Input/MultiSelect";
import Button from "../Input/Button";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { toast } from "react-toastify";

import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase_app from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import addToCart from "@/app/firebase/addToCart";

interface ItemInputsProps {
  quantity: number;
  price: number;
  options: [];
  id: string;
}

const ItemInputs: React.FC<ItemInputsProps> = ({
  quantity,
  price,
  options,
  id,
}) => {
  const auth = getAuth(firebase_app);
  const [user, loading] = useAuthState(auth);

  const router = useRouter();

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

  const onSubmit: SubmitHandler<FieldValues> = async () => {
    if (option === null) {
      toast.error("Please choose an option type");
      return;
    }

    if (!user) {
      toast.error("Please log in to add to cart!");
      router.push("/login");
      return;
    }

    const addItem = await addToCart({
      orderAmount: counter,
      optionType: option,
      userID: user.uid,
      itemID: id,
      amount: counter * price,
    });

    if (addItem) {
      toast.success("Succesfully added item!");
      return;
    } else {
      toast.error("Unsuccessfully added item.");
      return;
    }
  };

  return (
    <div className="border-[1px] m-8 gap-4">
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
