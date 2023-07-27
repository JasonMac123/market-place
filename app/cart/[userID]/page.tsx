import getUserCart from "@/app/firebase/getUserCart";
import removeItemFromCart from "@/app/firebase/removeItemFromCart";

import ItemOrderCard from "@/app/components/cards/ItemOrderCard";
import ClientContainer from "@/app/components/containers/ClientContainer";
import Button from "@/app/components/input/Button";

import { toast } from "react-toastify";

interface UserParams {
  userID: string;
}

const Page = async ({ params }: { params: UserParams }) => {
  let userCart = await getUserCart(params);

  const totalAmount = userCart.reduce(
    (acc, value) => value.orderAmount + acc,
    0
  );

  const removeItem = async (name: string, label: string) => {
    const result = await removeItemFromCart({
      userParams: params,
      itemID: name,
      itemLabel: label,
    });

    if (result) {
      userCart = userCart.filter(
        (item) => item.itemID !== name && item.optionType.label !== label
      );
      toast.success("Item removed successfully");
    } else {
      toast.error("Error, could not remove item from cart.");
    }
  };

  if (!userCart.length) {
    return (
      <div className="flex flex-col w-full items-center justify-center">
        <h1>You have no items currently!</h1>
        <h2>Add some items</h2>
      </div>
    );
  }
  return (
    <div className="mx-auto my-4 p-4 w-3/4">
      <h1 className="text-4xl mb-8">Cart</h1>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl">Image</h2>
        <h2 className="text-3xl">Description</h2>
        <h2 className="text-3xl">Price</h2>
      </div>
      <hr className="border-black w-full mb-4" />
      <ClientContainer>
        {userCart.map((item) => {
          return <ItemOrderCard {...item} />;
        })}
      </ClientContainer>
      <div className="flex flex-col jusitfy-end items-end">
        <div>Your Subtotal : {totalAmount}</div>
        <div>Your tax : {(totalAmount * 0.13).toFixed(2)}</div>
        <div>
          Your Total including tax (GST + HST) :
          {(totalAmount + totalAmount * 0.13).toFixed(2)}
        </div>
      </div>
      <Button label="Checkout" />
    </div>
  );
};

export default Page;
