"use client";

interface ItemCardProps {
  id: string | number;
  label: string | number;
  description: string | number;
  image: string | number;
  quantity: string | number;
  region: string | number;
  maker: string | number;
  rating: string | number;
  price: string | number;
  title: string | number;
}

const ItemCard: React.FC<ItemCardProps> = ({
  id,
  label,
  description,
  image,
  quantity,
  region,
  maker,
  rating,
  price,
  title,
}) => {
  return <div>{label}</div>;
};

export default ItemCard;
