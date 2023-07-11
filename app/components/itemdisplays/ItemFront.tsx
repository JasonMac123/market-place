"use client";

interface ItemFrontProps {
  name: string;
  description: string;
  region: string;
}

const ItemFront: React.FC<ItemFrontProps> = ({ name, description, region }) => {
  return (
    <div className="flex flex-col">
      <h2>{name}</h2>
      <div className="flex gap-4">
        <h3>Made in</h3>
        <h3>{region}</h3>
      </div>
      <h3>{description}</h3>
    </div>
  );
};

export default ItemFront;
