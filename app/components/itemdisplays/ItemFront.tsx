"use client";

interface ItemFrontProps {
  name: string;
  description: string;
  region: string;
  maker: string;
}

const ItemFront: React.FC<ItemFrontProps> = ({
  name,
  description,
  region,
  maker,
}) => {
  return (
    <div className="flex flex-col border-[1px] items-center justify-between md:mt-8 md:mx-8 md:p-8 gap-4 py-4 px-2">
      <h2 className="w-full text-left text-4xl">{name}</h2>
      <h3 className="w-full text-left">
        Made in {region}, Tokyo by {maker}
      </h3>
      <h3>{description}</h3>
    </div>
  );
};

export default ItemFront;
