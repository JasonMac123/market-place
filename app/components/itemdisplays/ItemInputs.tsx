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
  return (
    <div className="border-[1px]">
      <h3>{quantity}</h3>
      <h3>{price}</h3>
    </div>
  );
};

export default ItemInputs;
