"use client";

interface OptionSelect {
  label: string;
  value: string;
}

interface Item {
  image: string;
  itemID: string;
  itemName: string;
  optionType: OptionSelect;
  orderAmount: number;
  orderQuantity: number;
}

interface ItemOrderContainerProps {
  userCart: Item[];
}

const ItemOrderContainer: React.FC<ItemOrderContainerProps> = ({
  userCart,
}) => {
  return <div></div>;
};

export default ItemOrderContainer;
