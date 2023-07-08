"use client";

import Image from "next/image";

interface ItemCardProps {
  id: string;
  label: string;
  description: string;
  image: string;
  quantity: number;
  region: string;
  maker: string;
  rating: number;
  price: number;
  name: string;
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
  name,
}) => {
  return (
    <div className="w-1/3 h-1/3 flex flex-col p-4 rounded-lg hover:bg-neutral-300 cursor-pointer">
      <Image src={image} alt="picture of item" />
      <h3 className="text-md">{label}</h3>
    </div>
  );
};

export default ItemCard;
