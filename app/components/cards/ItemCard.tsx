"use client";

import Image from "next/image";

interface ItemCardProps {
  id: string;
  label: string;
  image: string;
  region: string;
  maker: string;
  rating: number;
  price: number;
  name: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
  id,
  label,
  image,
  region,
  maker,
  rating,
  price,
  name,
}) => {
  return (
    <div className="w-1/3 h-1/3 flex flex-col p-4 rounded-lg hover:bg-neutral-300 cursor-pointer">
      <Image
        src={
          "https://cb.scene7.com/is/image/Crate/TondoChopsticksSSS22/$web_pdp_main_carousel_med$/211116170028/tondo-chopsticks.jpg"
        }
        alt="picture of item"
      />
      <h3 className="text-md">{label}</h3>
    </div>
  );
};

export default ItemCard;
