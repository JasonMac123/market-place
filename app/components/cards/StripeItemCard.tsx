"use client";

interface StripeItemCardProps {
  id: string;
  object: string;
  amount_discount: number;
  amount_subtotal: number;
  amount_tax: number;
  amount_total: number;
  currency: string;
  description: string;
  price: Object;
  quantity: number;
}

const StripeItemCard: React.FC<StripeItemCardProps> = ({
  id,
  amount_total,
  description,
  quantity,
}) => {
  return <div></div>;
};

export default StripeItemCard;
