"use client";
import { IconType } from "react-icons";

interface MenuItemProps {
  Icon: IconType;
  label: string;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ Icon, label, onClick }) => {
  return (
    <div className="flex justify-between" onClick={onClick}>
      <div className="text-md">{label}</div>
      <Icon />
    </div>
  );
};

export default MenuItem;
