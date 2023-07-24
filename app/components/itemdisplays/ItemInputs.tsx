"use client";

import QuantityCounter from "../input/QuantityCounter";
import MultiSelect from "../input/MultiSelect";
import Button from "../input/Button";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

import { AiOutlineShoppingCart, AiOutlineStop } from "react-icons/ai";
import { toast } from "react-toastify";

import firebase_app from "@/app/firebase/config";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import addToCart from "@/app/firebase/addToCart";

import { useRouter } from "next/navigation";

interface ItemInputsProps {
  quantity: ItemQuantity;
  imageSrc: string;
  itemName: string;
  price: number;
  options: [Object, ...Object[]];
  id: string;
}

interface ItemQuantity {
  [key: string]: number;
}

const ItemInputs: React.FC<ItemInputsProps> = ({
  quantity,
  price,
  imageSrc,
  itemName,
  options,
  id,
}) => {
  const auth = getAuth(firebase_app);
  const [user] = useAuthState(auth);

  const router = useRouter();

  const { handleSubmit, setValue, watch, reset } = useForm<FieldValues>({
    defaultValues: {
      counter: 1,
      option: { label: options[0], value: options[0] },
    },
  });

  const counter = watch("counter");
  const option = watch("option");

  const setFormValue = (id: string, value: any) => {
    if (id === option) {
      reset();
    }

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
      maxQuantity: quantity,
      image: imageSrc,
      itemName: itemName,
    });

    if (addItem) {
      toast.success("Succesfully added item!");
      reset();
      return;
    } else {
      toast.error("Unsuccessfully added item.");
      return;
    }
  };

  return (
    <div className="flex flex-col border-[1px] m-8 gap-4 p-8">
      <MultiSelect
        optionList={options}
        value={option}
        onChange={(value) => setFormValue("option", value)}
      />
      {quantity[option.value] < 10 ? (
        <div className="flex gap-2 items-center">
          <h3 className="text-lg">Only</h3>
          <h3 className="text-xl text-red-600">
            {quantity[option.value]} in stock
          </h3>
          <h3 className="text-lg">now.</h3>
        </div>
      ) : (
        <h3>In stock now!</h3>
      )}
      <QuantityCounter
        title="How many?"
        maxValue={quantity[option.value]}
        value={counter}
        onChange={(value) => setFormValue("counter", value)}
      />
      <h3 className="w-full text-right text-4xl text-green-500">${price}</h3>
      {quantity[option.value] > 0 ? (
        <Button
          label="Add to Cart"
          Icon={AiOutlineShoppingCart}
          onClick={handleSubmit(onSubmit)}
        />
      ) : (
        <Button
          label="Sold Out"
          Icon={AiOutlineStop}
          disabled
          onClick={() => toast.error("Sorry cannot add item to cart")}
        />
      )}
    </div>
  );
};

export default ItemInputs;
