"use client";

interface ItemCardProps {
  id: string;
  label: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ id, label }) => {
  return <div>{label}</div>;
};

export default ItemCard;
