"use client";
import { IconType } from "react-icons";

interface MenuItemProps {
  Icon: IconType;
  label: string;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ Icon, label, onClick }) => {
  return (
    <div
      className="flex justify-between items-center hover:bg-neutral-300 transition-all p-2 rounded-md cursor-pointer w-11/12"
      onClick={onClick}
    >
      <div className="text-lg">{label}</div>
      <Icon size={30} />
    </div>
  );
};

export default MenuItem;
