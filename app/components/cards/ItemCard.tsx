"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../Input/Button";

interface ItemCardProps {
  id: string;
  label: string;
  image: string;
  region: string;
  maker: string;
  rating: number;
  price: number;
  name: string;
  description: string;
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
  description,
}) => {
  const router = useRouter();

  return (
    <div className="w-1/4 h-[60vh] space-y-4">
      <div
        className="w-full h-full flex flex-col p-4 rounded-lg bg-neutral-200 hover:bg-neutral-300 cursor-pointer justify-center items-center"
        onClick={() => {
          router.push(`/item/${id}`);
        }}
      >
        <Image
          src={
            "https://cb.scene7.com/is/image/Crate/TondoChopsticksSSS22/$web_pdp_main_carousel_med$/211116170028/tondo-chopsticks.jpg"
          }
          alt="picture of item"
          width={400}
          height={400}
        />
        <h3 className="text-lg mt-4 text-left w-full ml-2">{label}</h3>
        <h4 className="text-mg text-left w-full ml-2 mt-4">{description}</h4>
        <div className="flex w-full justify-end">
          <h4 className="text-lg text-green-600">$</h4>
          <h4 className="text-lg text-green-600">{price}</h4>
        </div>
      </div>
      <Button
        label="Add to Cart!"
        onClick={() => {
          router.push("/login");
        }}
      />
    </div>
  );
};

export default ItemCard;
