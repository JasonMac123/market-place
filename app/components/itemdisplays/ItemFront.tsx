"use client";

interface ItemFrontProps {
  name: string;
  description: string;
  region: string;
  rating: number;
  maker: string;
}

const ItemFront: React.FC<ItemFrontProps> = ({
  name,
  description,
  region,
  rating,
  maker,
}) => {
  return (
    <div className="flex flex-col border-[1px] rounded-xl items-center justify-between m-8">
      <h2>{name}</h2>
      <div className="flex gap-4">
        <h3>Made in</h3>
        <h3>{region}</h3>
        <h3>by</h3>
        <h3>{maker}</h3>
      </div>
      <h3>{description}</h3>
      <h3>{rating}</h3>
    </div>
  );
};

export default ItemFront;
