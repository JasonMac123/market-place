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
      className="flex justify-between items-center space-x-8"
      onClick={onClick}
    >
      <div className="text-lg">{label}</div>
      <Icon size={30} />
    </div>
  );
};

export default MenuItem;
